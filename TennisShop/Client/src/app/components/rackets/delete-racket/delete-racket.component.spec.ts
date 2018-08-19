import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRacketComponent } from './delete-racket.component';

describe('DeleteRacketComponent', () => {
  let component: DeleteRacketComponent;
  let fixture: ComponentFixture<DeleteRacketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteRacketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRacketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
