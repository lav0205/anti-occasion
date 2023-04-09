import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathsComponent } from './maths.component';

describe('MathsComponent', () => {
  let component: MathsComponent;
  let fixture: ComponentFixture<MathsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
