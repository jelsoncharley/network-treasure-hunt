import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlEndComponent } from './html-end.component';

describe('HtmlEndComponent', () => {
  let component: HtmlEndComponent;
  let fixture: ComponentFixture<HtmlEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
