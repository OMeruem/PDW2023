import {ApplicationConfig} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {routes} from '@root';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {HttpInterceptor} from '../../shared/service/http.interceptor';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(
      withInterceptors([HttpInterceptor])
    )
  ]
};
