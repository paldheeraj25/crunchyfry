import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrunchDetailsComponent } from './crunch-details.component';

describe('CrunchDetailsComponent', () => {
  let component: CrunchDetailsComponent;
  let fixture: ComponentFixture<CrunchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrunchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrunchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
