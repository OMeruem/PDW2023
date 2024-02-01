import {Component, inject} from '@angular/core';
import {InputComponent} from '../../../shared/ui/form/component/input/input.component';
import {SignInPayload} from '../../data/payload';
import {CommonModule} from '@angular/common';
import {Form, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {SecurityService} from '../../service';
import {SignInUpFormComponent} from '../../component/sign-in-up-form';
import {SecurityFormUtilsService} from '../../service/security-form-utils.service';
import {SignInUpFormConfig} from '../../data';



@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SignInUpFormComponent, SignInUpFormComponent, SignInUpFormComponent],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.scss'
})
export class SignInPageComponent {
  readonly config:SignInUpFormConfig=SecurityFormUtilsService.signInFormConfig();

}
