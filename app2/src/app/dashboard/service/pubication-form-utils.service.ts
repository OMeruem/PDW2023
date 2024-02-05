import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {
  PublicationCreateField,
  PublicationCreateFormConfig,
  PublicationCreateFormFieldEnum,
  PublicationCreateType
} from '../../security/data';

@Injectable({
  providedIn: 'root'
})
export class PublicationFormUtilsService {

  public static publicationCreateFormGroup(): FormGroup {
    return new FormGroup<any>({
      [PublicationCreateFormFieldEnum.CONTENT]: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]),
    })
  }

  public static publicationCreateFormConfig(): PublicationCreateFormConfig {
    const formGroup: FormGroup = PublicationFormUtilsService.publicationCreateFormGroup()
    return {
      formGroup,
      type: PublicationCreateType.TEXT,
      fields:[
        PublicationFormUtilsService.getContentField(formGroup) ]
    }
  }

  public static getContentField(formGroup: FormGroup): PublicationCreateField {
    return {
      inputType: 'text',
      placeHolder: 'What else ?',
      control: PublicationFormUtilsService.getFormControl(formGroup, PublicationCreateFormFieldEnum.CONTENT)
    }
  }

  public static getFormControl(formGroup: FormGroup, controlName: string): FormControl {
    return formGroup.get(controlName) as FormControl
  }


}
