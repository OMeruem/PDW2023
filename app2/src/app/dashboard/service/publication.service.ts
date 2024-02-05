import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {ApiService} from '../../shared/api/service/api.service';
import {ApiURI} from '../../shared/api/enum/api-url.enum';
import {ApiResponse} from '../../shared/api/service/api.response';
import {BehaviorSubject, map, Observable, tap} from 'rxjs';
import {PublicationCreatePayload} from '../model/payload/postPublication.payload';
import {PublicationDto} from '../model/dto/dashboard.dto';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private readonly api: ApiService = inject(ApiService);

  list$:WritableSignal<PublicationDto[]> = signal([]);
  list2$:WritableSignal<PublicationDto[]> = signal([]);
  private list3$ = new BehaviorSubject<PublicationDto[]>([]);

    public publicationCreate(payload: PublicationCreatePayload): Observable<any> {
    return this.api.post(ApiURI.CREATE_PUBLICATION, payload);
  }
  public publicationList(): void {
    this.api.get(ApiURI.LIST_PUBLICATION).pipe(tap((response:ApiResponse)=>{
      this.list$.set(response.data);
      console.log(response);
    })).subscribe()
  }

  public publicationList2(): void {
    this.api.get(ApiURI.LIST_PUBLICATION).pipe(
      tap((response: ApiResponse) => {
        this.list3$.next(response.data);
        console.log(response);
      })
    ).subscribe();
  }

  public getLastPublicationDate(): Observable<Date | null> {
    return this.list3$.pipe(
      map(publications => {
        if (publications.length > 0) {

          return new Date(publications[publications.length-1].created);
        }
        return null;
      })
    );
  }

  public deletePublication(idPublication: string): Observable<any> {
    return this.api.delete(`${ApiURI.DELETE_PUBLICATION}/${idPublication}`);
  }

  public getPublicationByUser(): void {
    this.api.get(ApiURI.PUBLICATION_BY_USER).pipe(tap((response:ApiResponse)=>{
      this.list2$.set(response.data);
      console.log(response);
    })).subscribe();
  }
}
