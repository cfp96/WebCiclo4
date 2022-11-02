import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Get01Component } from './get01.component';

describe('Get01Component', () => {
  let component: Get01Component;
  let fixture: ComponentFixture<Get01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Get01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Get01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
