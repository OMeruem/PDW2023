import {Component, inject} from '@angular/core';
import {CommentService} from '../../service/comment.service';
import {PublicationService} from '../../service/publication.service';
import {LikeService} from '../../service/like.service';
import {DatePipe} from '@angular/common';
import {AppNode} from '../../../shared/routes/enum/node.enum';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recent-activity-section',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './recent-activity-section.component.html',
  styleUrl: './recent-activity-section.component.scss'
})
export class RecentActivitySectionComponent {
  readonly commentService: CommentService = inject(CommentService);
  readonly publicationService: PublicationService = inject(PublicationService);
  readonly likeService: LikeService=inject((LikeService));
  private readonly router: Router = inject(Router);

  lastPublicationDate: Date | null = null;
  lastCommentDate: Date | null = null;
  lastLikeDate: Date | null = null;

  ngOnInit(): void {
    this.publicationService.publicationList2();
    this.publicationService.getLastPublicationDate().subscribe(date => {
      this.lastPublicationDate = date;

    });

    this.commentService.commentList2();
    this.commentService.getLastCommentDate().subscribe(date => {
      this.lastCommentDate = date;
    });

    this.likeService.likeList2();
    this.likeService.getLastLikeDate().subscribe(date => {
      this.lastLikeDate = date;
    });
  }

  goToMyProfile(): void  {
    this.router.navigate([AppNode.MYPAGE]).then();
  }


}
