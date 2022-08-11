import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'imperative',
    loadComponent: () =>
      import('./imperative/imperative.component').then(
        (mod) => mod.ImperativeComponent
      ),
  },
  {
    path: 'reactive',
    loadComponent: () =>
      import('./reactive/reactive.component').then(
        (mod) => mod.ReactiveComponent
      ),
  },
  {
    path: 'reactive-store',
    loadComponent: () =>
      import('./reactive-store/reactive-store.component').then(
        (mod) => mod.ReactiveStoreComponent
      ),
  },
];
