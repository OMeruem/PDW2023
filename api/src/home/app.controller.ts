import {Controller, Get} from '@nestjs/common';
import {ApiOperation, ApiTags} from '@nestjs/swagger';
import {AppService} from './app.service';
import {TestException} from './app.exception';

@ApiTags('Route de base')
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }
    @ApiOperation({summary: 'getHello()', description: 'Throws an exception'})
    @Get()
    getHello(): string {
        throw new TestException();
    }
}