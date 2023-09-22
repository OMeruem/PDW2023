import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';
import {ApiResponse} from '@common/api/data';
import {ApiCodeResponse} from '@common/api/data/enum/api-code.response';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getHello(): ApiResponse {
        return {result:true , code: ApiCodeResponse.TEST, data:null};
    }
}
