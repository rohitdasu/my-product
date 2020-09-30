import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageInitComponent } from './homepage-init/homepage-init.component';
import { SharedModule } from 'src/app/shared/common-components/shared-components.module';
import { CommonMaterialModule } from "../../shared/common-material/common-material.module";


@NgModule({
  declarations: [HomepageComponent, HomepageInitComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule,
    CommonMaterialModule

  ]
})
export class HomeModule { }
