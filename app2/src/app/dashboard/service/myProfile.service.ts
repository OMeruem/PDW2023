import {ApiService} from '../../shared/api/service/api.service';
import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {updateProfilePayload} from '../model/payload/updateProfile.payload';
import {Observable, tap} from 'rxjs';
import {ApiURI} from '../../shared/api/enum/api-url.enum';
import {ApiResponse} from '../../shared/api/service/api.response';
import {UpdateProfileDto} from '../model/dto/dashboard.dto';
import {PublicationCreatePayload} from '../model/payload/postPublication.payload';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService{
  private readonly api: ApiService = inject(ApiService);

  list$:WritableSignal<UpdateProfileDto> = signal( {
    credential_id: {username: ""},
    lastName: "",
    firstName: "",
    description: "",
    profilePic: "",
    status: "",
    mail: "",
    idProfile: ""
  });

  public getProfile(): void {
    this.api.get(ApiURI.GET_PROFILE).pipe(
      tap((response:ApiResponse)=>{
        this.list$.set(response.data);
        console.log(response);
      })).subscribe()
  }

  public profileUpdate(payload: updateProfilePayload): Observable<any> {
    return this.api.put(ApiURI.UPDATE_PROFILE, payload);
  }

  public profileCreate(payload: updateProfilePayload): Observable<any> {
    return this.api.post(ApiURI.CREATE_PROFILE, payload);
  }

}
