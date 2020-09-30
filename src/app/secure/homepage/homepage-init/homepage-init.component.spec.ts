import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageInitComponent } from './homepage-init.component';

describe('HomepageInitComponent', () => {
  let component: HomepageInitComponent;
  let fixture: ComponentFixture<HomepageInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
