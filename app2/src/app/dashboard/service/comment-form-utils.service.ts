import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CommentCreateField, CommentCreateFormConfig, CommentCreateFormFieldEnum} from '../../security/data';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentFormUtilsService {

  public static commentCreateFormGroup(): FormGroup {
    return new FormGroup<any>({
      [CommentCreateFormFieldEnum.CONTENT]: new FormControl<string>('', [Validators.required]),
    })
  }

  public static commentCreateFormConfig(): CommentCreateFormConfig {
    const formGroup: FormGroup = CommentFormUtilsService.commentCreateFormGroup()
    return {
      type: CommentCreateFormFieldEnum.CONTENT,
      formGroup,
      fields:[
        CommentFormUtilsService.getContentField(formGroup) ]
    }
  }

  public static getContentField(formGroup: FormGroup): CommentCreateField {
    return {
      inputType: 'text',
      placeHolder: 'Any thoughts ?',
      control: CommentFormUtilsService.getFormControl(formGroup, CommentCreateFormFieldEnum.CONTENT)
    }
  }

  public static getFormControl(formGroup: FormGroup, controlName: string): FormControl {
    return formGroup.get(controlName) as FormControl
  }


}
