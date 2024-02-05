import {Payload} from '../../../shared/core/type';
export interface PublicationCreatePayload extends Payload{
  content: string;
  publicationType: string;
  user: string;
}
