import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkNetComponent } from './work-net.component';

describe('WorkNetComponent', () => {
  let component: WorkNetComponent;
  let fixture: ComponentFixture<WorkNetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkNetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
