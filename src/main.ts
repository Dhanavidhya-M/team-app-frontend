import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import 'zone.js'; // ✅ Add this at the top

bootstrapApplication(App, {
  
  ...appConfig,
  providers: [
    ...appConfig.providers || [],
    importProvidersFrom(HttpClientModule)  // ✅ Add this line
  ]
  
})
  .catch((err) => console.error(err));

  