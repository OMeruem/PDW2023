export interface CredentialDto {
  username: string;
}

export interface PublicationDto{
  credential_id: CredentialDto;
  idPublication: string;
  content: string;
  publicationType: string;
  created: Date;
}

export interface CommentDto{
  credential_id: CredentialDto;
  idPublication: string;
  comment_id: string;
  content: string;
  created: Date;
}

export interface UpdateProfileDto{
  idProfile: string;
  lastName: string;
  firstName: string;
  description: string;
  profilePic: string;
  mail: string;
  status: string;
  credential_id:CredentialDto
}
