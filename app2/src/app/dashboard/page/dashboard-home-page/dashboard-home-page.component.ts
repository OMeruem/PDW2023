import { Component } from '@angular/core';
import {ShortCutSectionComponent} from '../short-cut-section/short-cut-section.component';
import {PostPublicationSectionComponent} from '../post-publication-section/post-publication-section.component';
import {YourFeedSectionComponent} from '../your-feed-section/your-feed-section.component';
import {YourPageSectionComponent} from '../your-page-section/your-page-section.component';
import {config} from 'rxjs';
import {CommentCreateFormConfig, PublicationCreateFormConfig} from '../../../security/data';
import {PublicationFormUtilsService} from '../../service/pubication-form-utils.service';
import {CommentFormUtilsService} from '../../service/comment-form-utils.service';
import {RecentActivitySectionComponent} from '../recent-activity-section/recent-activity-section.component';

@Component({
  selector: 'app-dashboard-home-page',
  standalone: true,
  imports: [
    ShortCutSectionComponent,
    PostPublicationSectionComponent,
    YourFeedSectionComponent,
    YourPageSectionComponent,
    RecentActivitySectionComponent
  ],
  templateUrl: './dashboard-home-page.component.html',
  styleUrl: './dashboard-home-page.component.scss'
})
export class DashboardHomePageComponent {

  readonly config: PublicationCreateFormConfig = PublicationFormUtilsService.publicationCreateFormConfig();
  readonly conf: CommentCreateFormConfig = CommentFormUtilsService.commentCreateFormConfig()

}
