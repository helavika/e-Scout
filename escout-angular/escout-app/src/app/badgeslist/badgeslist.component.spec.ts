import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeslistComponent } from './badgeslist.component';

describe('BadgeslistComponent', () => {
  let component: BadgeslistComponent;
  let fixture: ComponentFixture<BadgeslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
