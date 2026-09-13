import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingfeatureComponent } from './ratingfeature.component';

describe('RatingfeatureComponent', () => {
  let component: RatingfeatureComponent;
  let fixture: ComponentFixture<RatingfeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingfeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
