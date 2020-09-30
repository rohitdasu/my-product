import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageInitComponent } from './homepage-init/homepage-init.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageInitComponent,
    children: [
      {
        path: '',
        component: HomepageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
