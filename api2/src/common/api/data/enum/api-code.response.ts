export enum ApiCodeResponse {
    TEST = 'api.result.test',
    NO_TOKEN_FOUNDED = 'api.security.error.no-token-found',
    USER_NOT_FOUND = 'api.security.error.user-not-found',
    TOKEN_EXPIRED = 'api.security.error.token-expired',
    SIGNUP_ERROR = 'api.security.error.signup',
    CREDENTIAL_DELETE_ERROR = 'api.security.error.credential-delete',
    USER_ALREADY_EXIST = 'api.security.error.user-already-exist',
    TOKEN_GEN_ERROR = 'api.security.error.token-gen',
    PAYLOAD_IS_NOT_VALID = 'api.payload-is-not-valid',
    PAYLOAD_PARAM_IS_MISSING = 'api.payload-param-is-missing',
    COMMON_SUCCESS = 'api-common-success',
    PROFILE_CREATE_EXCEPTION= 'api-profile-create-exception',
    COMMENT_NOT_FOUND_EXCEPTION = 'api-comment-not-found-exception',
    COMMENT_LIST_EXCEPTION = 'api-comment-list-exception',
    LIKE_CREATE_EXCEPTION = 'api-like-create-exception',
    LIKE_NOT_FOUND_EXCEPTION = 'api-like-not-found-exception',
    LIKE_LIST_EXCEPTION = 'api-like-list-exception',
    PROFILE_NOT_FOUND_EXCEPTION = 'api-profile-not-found-exception',
    PROFILE_LIST_EXCEPTION = 'api-profile-list-exception',
    PUBLICATION_CREATE_EXCEPTION = 'api-publication-create-exception',
    PUBLICATION_DELETE_EXCEPTION = 'api-publication-delete-exception',
    PUBLICATION_NOT_FOUND_EXCEPTION = 'api-publication-not-found-exception',
    PUBLICATION_LIST_BY_CREDENTIAL_EXCEPTION = 'api-publication-list-by-credential-id-exception',
    PUBLICATION_LIST_EXCEPTION = 'api-publication-list-exception',
    COMMENT_CREATE_EXCEPTION = 'api-comment-create-exception',

}