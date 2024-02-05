import {FormControl, FormGroup} from '@angular/forms';
import {
  CommentCreateFormFieldEnum,
  LikeCreateFormFieldEnum,
  MyProfileformType,
  PublicationCreateType,
  SignInUpFormType
} from '../enum';

export interface SignInUpFormConfig{
  formGroup:FormGroup;
  type: SignInUpFormType
  fields:SignInUpField[];
}

export interface SignInUpField{
  label:string;
  placeHolder:string;
  inputType:string;
  control:FormControl;
}

export interface MyProfileFormConfig {
  type: MyProfileformType,
  formGroup: FormGroup;
  fields: MyProfileField[];
}

export interface MyProfileField {
  label:string
  placeHolder: string;
  inputType: string;
  control: FormControl;
}

export interface PublicationCreateFormConfig {
  formGroup: FormGroup;
  type: PublicationCreateType,
  fields: PublicationCreateField[];
}

export interface PublicationCreateField {
  placeHolder: string;
  inputType: string;
  control: FormControl;
}

export interface CommentCreateFormConfig {
  type: CommentCreateFormFieldEnum,
  formGroup: FormGroup;
  fields: CommentCreateField[];
}

export interface CommentCreateField {
  placeHolder: string;
  inputType: string;
  control: FormControl;
}

export interface LikeCreateFormConfig {
  type: LikeCreateFormFieldEnum,
  formGroup: FormGroup;
  fields: LikeCreateField[];
}

export interface LikeCreateField {
  placeHolder: string;
  inputType: string;
  control: FormControl;
}




