import {Payload} from '../../../shared/core/type';

export interface updateProfilePayload extends Payload{
  idProfile: string;
  lastName: string;
  firstName: string;
  description: string;
  profilePic: string;
  mail: string;
  status: string;
  credential_id:string
}
