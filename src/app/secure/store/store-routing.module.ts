import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreInitComponent } from './store-init/store-init.component';
const routes: Routes = [
  {
    path: '',
    component: StoreInitComponent,
    children: [
      {
        path: '',
        component: StoreInitComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
