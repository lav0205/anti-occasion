import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuepageComponent } from './venuepage.component';

describe('VenuepageComponent', () => {
  let component: VenuepageComponent;
  let fixture: ComponentFixture<VenuepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenuepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenuepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
