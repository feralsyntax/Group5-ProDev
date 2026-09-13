import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderprofileComponent } from './readerprofile.component';

describe('ReaderprofileComponent', () => {
  let component: ReaderprofileComponent;
  let fixture: ComponentFixture<ReaderprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
