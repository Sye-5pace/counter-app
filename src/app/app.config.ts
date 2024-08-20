import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { storeReducer } from './store/counter.reducer'

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({ count: storeReducer}),
    provideStoreDevtools()
  ]
};
