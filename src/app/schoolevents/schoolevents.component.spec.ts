import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchooleventsComponent } from './schoolevents.component';

describe('SchooleventsComponent', () => {
  let component: SchooleventsComponent;
  let fixture: ComponentFixture<SchooleventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchooleventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchooleventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
