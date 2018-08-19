import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRacketComponent } from './details-racket.component';

describe('DetailsRacketComponent', () => {
  let component: DetailsRacketComponent;
  let fixture: ComponentFixture<DetailsRacketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsRacketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsRacketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
