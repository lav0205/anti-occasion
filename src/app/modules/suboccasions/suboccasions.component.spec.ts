import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuboccasionsComponent } from './suboccasions.component';

describe('SuboccasionsComponent', () => {
  let component: SuboccasionsComponent;
  let fixture: ComponentFixture<SuboccasionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuboccasionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuboccasionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
