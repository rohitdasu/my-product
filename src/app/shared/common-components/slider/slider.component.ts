import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  public config: SwiperConfigInterface = {
    slidesPerView: 1,
    loop:true,
    centeredSlides: true,
    mousewheel: false,
    scrollbar: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      hideOnClick: false,
    },
    autoplay:true,
    watchOverflow: true,
    navigation: true,
  };
  index = 0;
  constructor() {}

  ngOnInit(): void {}
}
