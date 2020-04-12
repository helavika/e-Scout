import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutslistComponent } from './scoutslist.component';

describe('ScoutslistComponent', () => {
  let component: ScoutslistComponent;
  let fixture: ComponentFixture<ScoutslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoutslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoutslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
