import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureInitComponent } from './secure-init/secure-init.component';

const routes: Routes = [
  {
    path: '',
    component: SecureInitComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./homepage/homepage.module').then((m) => m.HomeModule),
      },
      {
        path: 'store',
        loadChildren: () =>
          import('./store/store.module').then((m) => m.StoreModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecureRoutingModule {}
