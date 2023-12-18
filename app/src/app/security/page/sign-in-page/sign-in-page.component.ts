import {Component, inject} from '@angular/core';
import {InputComponent} from '../../../shared/ui/form/component/input/input.component';
import {SignInPayload} from '../../data/payload';
import {CommonModule} from '@angular/common';
import {FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {SecurityService} from '../../service';

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.scss'
})
export class SignInPageComponent {
  private readonly securityService: SecurityService = inject(SecurityService);

  public formGroup:FormGroup = new FormGroup<any>({
    username: new FormGroup('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
    password: new FormGroup('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)])
  })

  signIn(): void {
    alert('je clique');
  }
  save(): void {
   if(this.formGroup.valid){
     const payload:SignInPayload = {socialLogin:false, googleHash:null, facebookHash:null, ...this.formGroup.value }
     this.securityService.signIn(this.formGroup.value).subscribe();

    console.log('mon payload', this.formGroup.value);
   }
   else{
     alert('error')
   }
  }

}
