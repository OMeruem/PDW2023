import { Component } from '@angular/core';
import {SignInUpFormComponent} from '../../component/sign-in-up-form';
import {FormGroup} from '@angular/forms';
import {SecurityFormUtilsService} from '../../service/security-form-utils.service';
import {SignInUpFormConfig} from '../../data';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [
    SignInUpFormComponent
  ],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss'
})
export class SignUpPageComponent {
  readonly config:SignInUpFormConfig=SecurityFormUtilsService.signUpFormConfig();

}
