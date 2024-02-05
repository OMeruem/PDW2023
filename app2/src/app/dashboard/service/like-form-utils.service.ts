import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LikeCreateField, LikeCreateFormConfig, LikeCreateFormFieldEnum} from '../../security/data';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeFormUtilsService {

  public static likeCreateFormGroup(): FormGroup {
    return new FormGroup<any>({
      [LikeCreateFormFieldEnum.CONTENT]: new FormControl<string>('', [Validators.required]),
    })
  }

  public static likeCreateFormConfig(): LikeCreateFormConfig {
    const formGroup: FormGroup = LikeFormUtilsService.likeCreateFormGroup()
    return {
      type: LikeCreateFormFieldEnum.CONTENT,
      formGroup,
      fields:[
        LikeFormUtilsService.getContentField(formGroup) ]
    }
  }

  public static getContentField(formGroup: FormGroup): LikeCreateField {
    return {
      inputType: 'text',
      placeHolder: 'Any thoughts ?',
      control: LikeFormUtilsService.getFormControl(formGroup, LikeCreateFormFieldEnum.CONTENT)
    }
  }

  public static getFormControl(formGroup: FormGroup, controlName: string): FormControl {
    return formGroup.get(controlName) as FormControl
  }


}
