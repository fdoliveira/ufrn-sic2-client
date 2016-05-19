import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

// Our main component
import { OrwebappAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(OrwebappAppComponent, [HTTP_PROVIDERS]);