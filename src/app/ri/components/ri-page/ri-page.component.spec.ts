import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiPageComponent } from './ri-page.component';

describe('RiPageComponent', () => {
  let component: RiPageComponent;
  let fixture: ComponentFixture<RiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
