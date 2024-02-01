import {HttpException} from '@nestjs/common';
import {ApiCodeResponse} from '@common/api/data/enum';
import {ApiException} from '@common/api';
export class TestException extends ApiException {
    constructor() {
        super(ApiCodeResponse.TEST, 200);
    }
}