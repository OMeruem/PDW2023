import {Component, inject, Input, OnInit, signal, WritableSignal} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {SignInUpFormConfig, SignInUpFormType} from '../../data';
import {JsonPipe, NgForOf, NgIf} from '@angular/common';
import {Observable, tap} from 'rxjs';
import {ApiResponse} from '../../../shared/api/service/api.response';
import {SecurityService} from '../../service';
import {Payload} from '../../../shared/core/type';
import {SignInPayload, SignUpPayload} from '../../data/payload';
import {ApiCodeResponse} from '../../../shared/api/service/api-code.response';


@Component({
  selector: 'app-sign-in-up-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    JsonPipe,
    NgIf
  ],
  templateUrl: './sign-in-up-form.component.html',
  styleUrl: './sign-in-up-form.component.scss'
})
export class SignInUpFormComponent implements OnInit{
  @Input({required:true}) config!: SignInUpFormConfig;
  private readonly securityService: SecurityService = inject(SecurityService)
  title:string = 'Connexion'
  btnLabel:string = 'Se connecter'
  error$:WritableSignal<string> = signal('');

  ngOnInit():void{
    this.title= this.config.type ===SignInUpFormType.SIGN_IN ? 'Connexion': 'Inscription';
    this.btnLabel = this.config.type ===SignInUpFormType.SIGN_IN ? 'Connexion' : 'S\'inscrire';
  }

  save():void{
    this.error$.set('');
    if(this.config.formGroup.valid){
      const payload:Payload={socialLogin:false,googleHash:'', facebookHash:'', ...this.config.formGroup.value};
      const obs:Observable<ApiResponse> = this.config.type ===SignInUpFormType.SIGN_IN ?
        this.securityService.signIn(payload as SignInPayload): this.securityService.signUp(payload as SignUpPayload);

      obs.pipe(
        tap((apiResponse:ApiResponse)=>{
          if(!apiResponse.result){
            this.error$.set(apiResponse.code);
          }
      })).subscribe((data:ApiResponse)=>{
        console.log('apiResponse', data);
      })
    }else{
      this.error$.set('Formulaire non valide');
    }
  }

}
