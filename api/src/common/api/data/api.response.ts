import {ApiCodeResponse} from '@common/api/data/enum';

export interface ApiResponse {
    result: boolean;
    code: ApiCodeResponse;
    data: any;
}