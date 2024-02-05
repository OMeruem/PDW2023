import {Component, inject, Input} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {config} from 'rxjs';
import {MyProfileFormConfig} from '../../../security/data';
import {MyProfileService} from '../../service/myProfile.service';
import {ShortCutSectionComponent} from '../short-cut-section/short-cut-section.component';
import {updateProfilePayload} from '../../model/payload/updateProfile.payload';



@Component({
  selector: 'app-my-profile-section',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    ShortCutSectionComponent
  ],
  templateUrl: './my-profile-section.component.html',
  styleUrl: './my-profile-section.component.scss'
})
export class MyProfileSectionComponent {

  @Input({required: true}) config!: MyProfileFormConfig;
  readonly myProfileService: MyProfileService = inject(MyProfileService);

  ngOnInit(): void {
    this.myProfileService.getProfile()
  }

  updateProfile(){
    const payload: updateProfilePayload = {
      idProfile:"string",
      ...this.config.formGroup.value
    };
    console.log('payload', payload);
    this.myProfileService.profileUpdate(payload as updateProfilePayload).subscribe();
    window.location.reload();
  }
}
