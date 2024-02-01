import { Component } from '@angular/core';
import {ShortCutSectionComponent} from '../short-cut-section/short-cut-section.component';
import {PostPublicationSectionComponent} from '../post-publication-section/post-publication-section.component';
import {YourFeedSectionComponent} from '../your-feed-section/your-feed-section.component';
import {YourPageSectionComponent} from '../your-page-section/your-page-section.component';

@Component({
  selector: 'app-dashboard-home-page',
  standalone: true,
  imports: [
    ShortCutSectionComponent,
    PostPublicationSectionComponent,
    YourFeedSectionComponent,
    YourPageSectionComponent
  ],
  templateUrl: './dashboard-home-page.component.html',
  styleUrl: './dashboard-home-page.component.scss'
})
export class DashboardHomePageComponent {

}
