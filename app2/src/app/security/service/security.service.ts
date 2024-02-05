import {inject, Injectable} from '@angular/core';
import {SignInPayload, SignUpPayload} from '../data/payload';
import {Observable, of, tap} from 'rxjs';
import {ApiURI} from '../../shared/api/enum/api-url.enum';
import {ApiService} from '../../shared/api/service/api.service';
import {AppNode} from '../../shared/routes/enum/node.enum';
import {ApiResponse} from '../../shared/api/service/api.response';
import {TokenService} from '../../shared/api/model/token.service';
import {Router} from '@angular/router';
import {Token} from '../../shared/api/model/token.interface'
import {ApiCodeResponse} from '../../shared/api/service/api-code.response';
import {MyProfileService} from '../../dashboard/service/myProfile.service';


@Injectable({
  providedIn: 'root'
})

export class SecurityService {


  private readonly api: ApiService = inject(ApiService);
  private readonly tokenService: TokenService = inject(TokenService);
  private readonly router: Router = inject(Router);
  private readonly myProfileService: MyProfileService = inject(MyProfileService);

  constructor() {}

  public signIn(payload: SignInPayload): Observable<ApiResponse> {
    return this.api.post(ApiURI.SIGN_IN, {...payload, socialLogin: false}).pipe(
      tap((response: ApiResponse) => {
        //if success then goToDashboard and save token
        if (response.result) {
          this.tokenService.setToken({...response.data, isEmpty: false});
        }
      })
    );
  }

  public signUp(payload: SignUpPayload): Observable<ApiResponse> {
    return this.api.post(ApiURI.SIGN_UP, {...payload, socialLogin: false}).pipe(
      tap((response: ApiResponse) => {
        if (response.result) {
          this.tokenService.setToken({...response.data, isEmpty: false});
        }
      })
    );

  }

  public logOut(): void {
    this.tokenService.setToken({token: '', refreshToken: '', isEmpty: true});
  }

  public me():void {
    this.api.get(ApiURI.ME).pipe(tap((response: ApiResponse) => {
      if (response.result) {
        if (!window.location.pathname.startsWith('/' + AppNode.REDIRECT_TO_AUTHENTICATED)
          && !window.location.pathname.startsWith('/landing')) {
          this.router.navigate([AppNode.REDIRECT_TO_AUTHENTICATED]).then();
        }
      } else {
        this.router.navigate([AppNode.REDIRECT_TO_PUBLIC]).then();
      }
    })).subscribe();
  }

  private handleAuthenticatedChange(token: Token): void {
    if (!token.isEmpty) {
      this.me();
    } else {
      this.router.navigate([AppNode.REDIRECT_TO_PUBLIC]).then();
    }
  }





}
