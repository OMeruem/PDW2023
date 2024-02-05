import {Payload} from '../../../shared/core/type';

export interface CommentCreatePayload extends Payload{
  content: string;
  idPublication: string;
  credential_id: string;
}
