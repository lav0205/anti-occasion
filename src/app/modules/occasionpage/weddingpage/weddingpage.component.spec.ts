import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingpageComponent } from './weddingpage.component';

describe('WeddingpageComponent', () => {
  let component: WeddingpageComponent;
  let fixture: ComponentFixture<WeddingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
