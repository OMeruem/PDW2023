import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {HttpExceptionFilter} from '@common/config';
import {swaggerConfiguration} from '@common/documentation';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalFilters(new HttpExceptionFilter());
    swaggerConfiguration.config(app);

    await app.listen(3000);
}

bootstrap().then();
