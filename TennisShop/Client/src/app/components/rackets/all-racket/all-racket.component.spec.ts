import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRacketComponent } from './all-racket.component';

describe('AllRacketComponent', () => {
  let component: AllRacketComponent;
  let fixture: ComponentFixture<AllRacketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRacketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRacketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
