import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MyProfileField, MyProfileFormConfig, MyProfileformFieldEnum, MyProfileformType} from '../../security/data';
@Injectable({
  providedIn: 'root'
})
export class MyProfileFormUtilsService {

  public static myProfileFormGroup(): FormGroup{
    return new FormGroup<any>({
      [MyProfileformFieldEnum.LASTNAME]: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      [MyProfileformFieldEnum.FIRSTNAME]: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      [MyProfileformFieldEnum.DESCRIPTION]: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      [MyProfileformFieldEnum.MAIL]: new FormControl('', [Validators.required, Validators.email]),
      [MyProfileformFieldEnum.PROFILE_PIC]: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      [MyProfileformFieldEnum.STATUS]: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
    })
  }

  static myProfileFormConfig():MyProfileFormConfig {
    const formGroup:FormGroup=MyProfileFormUtilsService.myProfileFormGroup();
    return {
      formGroup,
      type:MyProfileformType.UPDATE,
      fields:[
        MyProfileFormUtilsService.getLastNamefield(formGroup),
        MyProfileFormUtilsService.getFirstNameField(formGroup),
        MyProfileFormUtilsService.getDescritpionfield(formGroup),
        MyProfileFormUtilsService.getMailfield(formGroup),
        MyProfileFormUtilsService.getProfilePicfield(formGroup),
        MyProfileFormUtilsService.getStatusfield(formGroup)],


    }
  }

  public static getLastNamefield(formGroup:FormGroup):MyProfileField{
    return{
      label:'Last Name',
      inputType:'text',
      placeHolder:'Update lastname',
      control: MyProfileFormUtilsService.getFormControl(formGroup, MyProfileformFieldEnum.LASTNAME)
    }
  }

  public static getFirstNameField(formGroup:FormGroup):MyProfileField{
    return{
      label:'First Name',
      inputType:'text',
      placeHolder:'Update firstname',
      control: MyProfileFormUtilsService.getFormControl(formGroup,  MyProfileformFieldEnum.FIRSTNAME)
    }
  }
  public static getDescritpionfield(formGroup:FormGroup):MyProfileField{
    return{
      label:'Description',
      inputType:'text',
      placeHolder:'Update description',
      control: MyProfileFormUtilsService.getFormControl(formGroup, MyProfileformFieldEnum.DESCRIPTION)
    }
  }
  public static getMailfield(formGroup:FormGroup):MyProfileField{
    return{
      label:'Mail',
      inputType:'text',
      placeHolder:'Update mail',
      control: MyProfileFormUtilsService.getFormControl(formGroup, MyProfileformFieldEnum.MAIL)
    }
  }

  public static getProfilePicfield(formGroup:FormGroup):MyProfileField{
    return{
      label:'Profile pic',
      inputType:'text',
      placeHolder:'Update profile pic',
      control: MyProfileFormUtilsService.getFormControl(formGroup, MyProfileformFieldEnum.PROFILE_PIC)
    }
  }

  public static getStatusfield(formGroup:FormGroup):MyProfileField{
    return{
      label:'Status',
      inputType:'text',
      placeHolder:'Update status',
      control: MyProfileFormUtilsService.getFormControl(formGroup, MyProfileformFieldEnum.STATUS)
    }
  }

  public static  getFormControl(formGroup:FormGroup, controlName:string):FormControl{
    return formGroup.get(controlName) as FormControl
  }
}
