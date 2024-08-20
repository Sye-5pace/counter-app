import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { reducer } from './store/counter.reducer'

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({ count: reducer}),
    provideStoreDevtools()
  ]
};
