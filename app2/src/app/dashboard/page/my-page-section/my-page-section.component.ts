import {Component, Input} from '@angular/core';
import {MyProfileSectionComponent} from '../my-profile-section/my-profile-section.component';
import {MyProfileService} from '../../service/myProfile.service';
import {config} from 'rxjs';
import {MyProfileFormConfig} from '../../../security/data';
import {MyProfileFormUtilsService} from '../../service/myProfile-form-utils.service';

@Component({
  selector: 'app-my-page-section',
  standalone: true,
  imports: [
    MyProfileSectionComponent
  ],
  templateUrl: './my-page-section.component.html',
  styleUrl: './my-page-section.component.scss'
})
export class MyPageSectionComponent {
  readonly confi: MyProfileFormConfig = MyProfileFormUtilsService.myProfileFormConfig();
}
