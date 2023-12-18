import {Payload} from '../../../shared/core/type';

export interface SignUpPayload extends Payload{

  username: string

  password: string

  mail: string


  googleHash: string

  facebookHash: string
}
