import {ApiException} from "@common/api";
import {ApiCodeResponse} from "@common/api/data/enum";

export class ProfileCreateException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBER_CREATE_EXCEPTION, 401);
    }
}
export class ProfileNotFoundException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBER_CREATE_EXCEPTION, 401);
    }
}
export class ProfileListException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBER_CREATE_EXCEPTION, 401);
    }
}
export class PublicationCreateException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBER_CREATE_EXCEPTION, 401);
    }
}
export class PublicationNotFoundException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBER_CREATE_EXCEPTION, 401);
    }
}
export class PublicationListException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBER_CREATE_EXCEPTION, 401);
    }
}
export class CommentCreateException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBER_CREATE_EXCEPTION, 401);
    }
}
export class CommentNotFoundException extends ApiException {
    constructor() {
        super(ApiCodeResponse.COMMENT_NOT_FOUND_EXCEPTION, 401);
    }
}
export class CommentListException extends ApiException {
    constructor() {
        super(ApiCodeResponse.COMMENT_LIST_EXCEPTION, 401);
    }
}
export class LikeCreateException extends ApiException {
    constructor() {
        super(ApiCodeResponse.LIKE_EXCEPTION, 401);
    }
}
export class LikeNotFoundException extends ApiException {
    constructor() {
        super(ApiCodeResponse.LIKE_NOT_FOUND_EXCEPTION, 401);
    }
}
export class LikeListException extends ApiException {
    constructor() {
        super(ApiCodeResponse.LIKE_LIST_EXCEPTION, 401);
    }
}