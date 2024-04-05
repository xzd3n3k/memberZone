import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {ApiService} from "./api.service";
import {HttpClientModule} from "@angular/common/http";
import {ActiveTabService} from "./active-tab.service";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    {provide: ApiService, useClass: ApiService},
    {provide: ActiveTabService, useClass: ActiveTabService},
    importProvidersFrom(HttpClientModule),
  ],
};
