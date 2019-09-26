import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpDecemberComponent } from './ip-december.component';

describe('IpDecemberComponent', () => {
  let component: IpDecemberComponent;
  let fixture: ComponentFixture<IpDecemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpDecemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpDecemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
