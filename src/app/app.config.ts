import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { TodoReducer } from './todos/state/todo.reducer';
import { provideEffects } from '@ngrx/effects';
import { TodoEffects } from './todos/state/todo.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore({
        todos: TodoReducer
    }), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), provideEffects([TodoEffects])],
};
