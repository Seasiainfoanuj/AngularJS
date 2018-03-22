import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormchildComponent } from './formchild.component';

describe('FormchildComponent', () => {
  let component: FormchildComponent;
  let fixture: ComponentFixture<FormchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
