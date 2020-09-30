import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureRoutingModule } from './secure-routing.module';
import { SecureInitComponent } from './secure-init/secure-init.component';

import { SharedModule } from "../shared/common-components/shared-components.module";


@NgModule({
  declarations: [SecureInitComponent],
  imports: [
    CommonModule,
    SecureRoutingModule,
    SharedModule
  ]
})
export class SecureModule { }
