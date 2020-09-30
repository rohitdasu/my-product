import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing.module';
import { StoreInitComponent } from './store-init/store-init.component';
import { StoreComponent } from './store-items/store.component';
import { CommonMaterialModule } from "../../shared/common-material/common-material.module";
import { StoreDetailsComponent } from './store-details/store-details.component';

@NgModule({
  declarations: [StoreInitComponent, StoreComponent, StoreDetailsComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    CommonMaterialModule

  ]
})
export class StoreModule { }
