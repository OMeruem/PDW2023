import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {formFieldEnum, SignInUpField, SignInUpFormConfig, SignInUpFormType} from '../data';

@Injectable({
  providedIn: 'root'
})
export class SecurityFormUtilsService {

  public static signUpFormGroup(): FormGroup{
    return new FormGroup<any>({
      [formFieldEnum.USERNAME]: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
      [formFieldEnum.PASSWORD]: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
      [formFieldEnum.CONFIRMATION]: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
      [formFieldEnum.MAIL]: new FormControl('', [Validators.required, Validators.email])
    })
  }

  public static signInFormGroup(): FormGroup{
    return new FormGroup<any>({
      username: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)])
    })


  }

  static signInFormConfig():SignInUpFormConfig {
    const formGroup:FormGroup=SecurityFormUtilsService.signInFormGroup();
    return {
      formGroup,
      type:SignInUpFormType.SIGN_IN,
      fields:[
        SecurityFormUtilsService.getUsernamefield(formGroup),
        SecurityFormUtilsService.getPasswordfield(formGroup)
      ]
    }
  }

  static signUpFormConfig():SignInUpFormConfig {
    const formGroup:FormGroup=SecurityFormUtilsService.signUpFormGroup();
    return {
      formGroup,
      type:SignInUpFormType.SIGN_UP,
      fields:[
        SecurityFormUtilsService.getUsernamefield(formGroup),
        SecurityFormUtilsService.getPasswordfield(formGroup),
        SecurityFormUtilsService.getConfirmationfield(formGroup),
        SecurityFormUtilsService.getMailfield(formGroup)]
    }
  }

  public static getUsernamefield(formGroup:FormGroup):SignInUpField{
    return{
      label:'username',
      inputType:'test',
      placeHolder:'Entrez Identifiant',
      control: SecurityFormUtilsService.getFormControl(formGroup, formFieldEnum.USERNAME)
    }
  }

  public static getPasswordfield(formGroup:FormGroup):SignInUpField{
    return{
      label:'MDP',
      inputType:'password',
      placeHolder:'Entrez MDP',
      control: SecurityFormUtilsService.getFormControl(formGroup, formFieldEnum.PASSWORD)
    }
  }
  public static getConfirmationfield(formGroup:FormGroup):SignInUpField{
    return{
      label:'Confirmation',
      inputType:'password',
      placeHolder:'Entrez confirmation',
      control: SecurityFormUtilsService.getFormControl(formGroup, formFieldEnum.CONFIRMATION)
    }
  }
  public static getMailfield(formGroup:FormGroup):SignInUpField{
    return{
      label:'Email',
      inputType:'mail',
      placeHolder:'Entrez email',
      control: SecurityFormUtilsService.getFormControl(formGroup, formFieldEnum.MAIL)
    }
  }

  public static  getFormControl(formGroup:FormGroup, controlName:string):FormControl{
    return formGroup.get(controlName) as FormControl
  }
}
