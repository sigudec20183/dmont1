import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasContadorBtnComponent } from './listas-contador-btn.component';

describe('ListasContadorBtnComponent', () => {
  let component: ListasContadorBtnComponent;
  let fixture: ComponentFixture<ListasContadorBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasContadorBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasContadorBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
