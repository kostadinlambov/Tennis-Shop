import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRacketComponent } from './create-racket.component';

describe('CreateRacketComponent', () => {
  let component: CreateRacketComponent;
  let fixture: ComponentFixture<CreateRacketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRacketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRacketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
