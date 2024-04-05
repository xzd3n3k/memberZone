import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {ApiService} from "./api.service";
import {HttpClientModule} from "@angular/common/http";
import {ActiveTabService} from "./active-tab.service";
import {LoadingService} from "./loading.service";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    {provide: ApiService, useClass: ApiService},
    {provide: ActiveTabService, useClass: ActiveTabService},
    {provide: LoadingService, useClass: LoadingService},
    importProvidersFrom(HttpClientModule),
  ],
};
