import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostApiComponent } from './lost-api.component';

describe('LostApiComponent', () => {
  let component: LostApiComponent;
  let fixture: ComponentFixture<LostApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
