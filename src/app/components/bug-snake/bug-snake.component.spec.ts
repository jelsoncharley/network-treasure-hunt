import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugSnakeComponent } from './bug-snake.component';

describe('BugSnakeComponent', () => {
  let component: BugSnakeComponent;
  let fixture: ComponentFixture<BugSnakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugSnakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugSnakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
