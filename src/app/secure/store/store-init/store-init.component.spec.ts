import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreInitComponent } from './store-init.component';

describe('StoreInitComponent', () => {
  let component: StoreInitComponent;
  let fixture: ComponentFixture<StoreInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
