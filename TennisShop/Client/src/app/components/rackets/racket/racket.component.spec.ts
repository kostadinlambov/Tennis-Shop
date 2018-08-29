import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacketComponent } from './racket.component';

describe('RacketComponent', () => {
  let component: RacketComponent;
  let fixture: ComponentFixture<RacketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
