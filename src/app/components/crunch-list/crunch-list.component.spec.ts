import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrunchListComponent } from './crunch-list.component';

describe('CrunchListComponent', () => {
  let component: CrunchListComponent;
  let fixture: ComponentFixture<CrunchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrunchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrunchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
