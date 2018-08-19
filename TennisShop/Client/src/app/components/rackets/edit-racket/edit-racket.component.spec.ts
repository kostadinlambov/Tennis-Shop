import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRacketComponent } from './edit-racket.component';

describe('EditRacketComponent', () => {
  let component: EditRacketComponent;
  let fixture: ComponentFixture<EditRacketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRacketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRacketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
