import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { CommonMaterialModule } from "../common-material/common-material.module";
import { SliderComponent } from './slider/slider.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {

};

@NgModule({
  declarations: [MainHeaderComponent, MainFooterComponent, SliderComponent],
  imports: [CommonModule,CommonMaterialModule,SwiperModule],
  exports: [MainHeaderComponent, MainFooterComponent,SliderComponent],
  providers:[
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class SharedModule {}
