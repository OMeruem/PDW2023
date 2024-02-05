import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {CommentCreatePayload} from '../model/payload/comment.payload';
import {BehaviorSubject, map, Observable, tap} from 'rxjs';
import {ApiURI} from '../../shared/api/enum/api-url.enum';
import {ApiService} from '../../shared/api/service/api.service';
import {LikeCreatePayload} from '../model/payload/like.payload';
import {ApiResponse} from '../../shared/api/service/api.response';
import {PublicationDto} from '../model/dto/dashboard.dto';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  private readonly api: ApiService = inject(ApiService);
  private list$ = new BehaviorSubject<PublicationDto[]>([]);
  public likeCreate(payload: LikeCreatePayload): Observable<any> {
    return this.api.post(ApiURI.LIKE_CREATE, payload);
  }

  public likeList2(): void {
    this.api.get(ApiURI.LIKE_LIST).pipe(
      tap((response: ApiResponse) => {
        this.list$.next(response.data);
        console.log(response);
      })
    ).subscribe();
  }

  public getLastLikeDate(): Observable<Date | null> {
    return this.list$.pipe(
      map(likes => {
        if (likes.length > 0) {

          return new Date(likes[likes.length-1].created);
        }
        return null;
      })
    );
  }
}
