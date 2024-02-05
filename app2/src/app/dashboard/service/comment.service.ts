import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {ApiService} from '../../shared/api/service/api.service';
import {ApiURI} from '../../shared/api/enum/api-url.enum';
import {BehaviorSubject, map, Observable, tap} from 'rxjs';
import {ApiResponse} from '../../shared/api/service/api.response';
import {CommentDto, PublicationDto} from '../model/dto/dashboard.dto';
import {CommentCreatePayload} from '../model/payload/comment.payload';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private readonly api: ApiService = inject(ApiService);
  error$: WritableSignal<string> = signal('');
  List$:WritableSignal<CommentDto[]> = signal([]);
  List2$:WritableSignal<CommentDto[]> = signal([]);
  private listCom$ = new BehaviorSubject<PublicationDto[]>([]);

  public CommentList(idPublication: string): void {
    this.api.get(`${ApiURI.COMMENT_LIST}/${idPublication}`).pipe(tap((response:ApiResponse)=>{
      this.List$.set(response.data);
      console.log(response);
    })).subscribe()
  }

  public commentList2(): void {
    this.api.get(ApiURI.COMMENT_LIST).pipe(
      tap((response: ApiResponse) => {
        this.listCom$.next(response.data);
        console.log(response);
      })
    ).subscribe();
  }

  public getLastCommentDate(): Observable<Date | null> {
    return this.listCom$.pipe(
      map(comments => {
        if (comments.length > 0) {
          return new Date(comments[comments.length-1].created);
        }
        return null;
      })
    );
  }
  public commentCreate(payload: CommentCreatePayload): Observable<any> {
    return this.api.post(ApiURI.COMMENT_CREATE, payload);
  }

  public getCommentByUser(): void {
    this.api.get(ApiURI.COMMENT_BY_USER).pipe(tap((response:ApiResponse)=>{
      this.List2$.set(response.data);
      console.log(response);
    })).subscribe();
  }

}
