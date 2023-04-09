import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccasionpageComponent } from './occasionpage.component';

describe('OccasionpageComponent', () => {
  let component: OccasionpageComponent;
  let fixture: ComponentFixture<OccasionpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccasionpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccasionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
