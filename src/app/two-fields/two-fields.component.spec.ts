import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFieldsComponent } from './two-fields.component';

describe('TwoFieldsComponent', () => {
  let component: TwoFieldsComponent;
  let fixture: ComponentFixture<TwoFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
