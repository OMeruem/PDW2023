import {Component, inject} from '@angular/core';
import {PublicationService} from '../../service/publication.service';
import {PublicationDto} from '../../model/dto/dashboard.dto';
import {CommentService} from '../../service/comment.service';
import {NgIf} from '@angular/common';
import {MyProfileService} from '../../service/myProfile.service';

@Component({
  selector: 'app-your-page-section',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './your-page-section.component.html',
  styleUrl: './your-page-section.component.scss'
})
export class YourPageSectionComponent {
  readonly publicationService: PublicationService = inject(PublicationService);
  readonly commentService: CommentService = inject(CommentService);
  readonly myProfileService:MyProfileService=inject(MyProfileService);
  ngOnInit(): void {
    this.publicationService.getPublicationByUser();
    this.commentService.getCommentByUser();
  }

}
