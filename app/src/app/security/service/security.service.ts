import {inject, Injectable} from '@angular/core';
import {SignInPayload, SignUpPayload} from '../data/payload';
import {Observable, of} from 'rxjs';
import {ApiURI} from '../../shared/api/enum/api-url.enum';
import {ApiService} from '../../shared/api/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
private readonly api:ApiService=inject(ApiService);
  public signIn(payload: SignInPayload):Observable<any> {
    return this.api.post(ApiURI.SIGN_IN, payload);

  }


  public signUp(payload: SignUpPayload):Observable<any> {
    return this.api.post(ApiURI.SIGN_UP, payload);
  }

  public me():Observable<any> {
    return of(null);
  }
}
