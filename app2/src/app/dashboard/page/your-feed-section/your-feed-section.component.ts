import {Component, inject, Input, signal, WritableSignal} from '@angular/core';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {PublicationService} from '../../service/publication.service';
import {CommentCreatePayload} from '../../model/payload/comment.payload';
import {CommentCreateFormConfig} from '../../../security/data';
import {CommentService} from '../../service/comment.service';
import {LikeService} from '../../service/like.service';
import {ReactiveFormsModule} from '@angular/forms';
import{MyProfileService} from '../../service/myProfile.service';
import Swal from 'sweetalert2';
import {PublicationCreatePayload} from '../../model/payload/postPublication.payload';
import {LikeCreatePayload} from '../../model/payload/like.payload';

@Component({
  selector: 'app-your-feed-section',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './your-feed-section.component.html',
  styleUrl: './your-feed-section.component.scss'
})
export class YourFeedSectionComponent {
  @Input({required: true}) conf!: CommentCreateFormConfig;
  error$: WritableSignal<string> = signal('');
  readonly commentService: CommentService = inject(CommentService);
  readonly publicationService: PublicationService = inject(PublicationService);
  readonly likeService: LikeService=inject(LikeService);
  readonly myProfileService:MyProfileService=inject(MyProfileService);
  selectedPublicationId: string | null = null;

  ngOnInit(): void {
    this.publicationService.publicationList();

  }

  saveComment(idPublication: string) {
    this.error$.set('');
    const payload: CommentCreatePayload = {
      credential_id: {credential_id:"string"},
      idPublication,
      ...this.conf.formGroup.value
    };
    console.log('payload', payload);
    this.commentService.commentCreate(payload as CommentCreatePayload).subscribe();
  }

  seeComments(idPublication: string) {
    if (this.selectedPublicationId === idPublication) {
      this.selectedPublicationId = null;
    } else {
      this.selectedPublicationId = idPublication;
      this.commentService.CommentList(idPublication);
    }
  }

  onDeletePublication(idPublication: string): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.publicationService.deletePublication(idPublication).subscribe({
          // Handle response
          next: () => {
            Swal.fire(
              'Deleted!',
              'Your publication has been deleted.',
              'success'
            );
            window.location.reload();
          },
          error: (error) => {
            console.error('Error deleting publication:', error);
          }
        });
      }
    });
  }

  reloadPublications():void{
    this.publicationService.publicationList();
  }

  saveLike(idPublication:string): void {
    this.error$.set('');
    const payload: LikeCreatePayload = {
      idPublication,
    };
    console.log('payload', payload);
    this.likeService.likeCreate(payload as LikeCreatePayload).subscribe();
  }

}
