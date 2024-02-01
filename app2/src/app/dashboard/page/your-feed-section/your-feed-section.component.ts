import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-your-feed-section',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './your-feed-section.component.html',
  styleUrl: './your-feed-section.component.scss'
})
export class YourFeedSectionComponent {

}
