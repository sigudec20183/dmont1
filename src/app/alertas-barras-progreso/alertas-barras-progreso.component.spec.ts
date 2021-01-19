import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertasBarrasProgresoComponent } from './alertas-barras-progreso.component';

describe('AlertasBarrasProgresoComponent', () => {
  let component: AlertasBarrasProgresoComponent;
  let fixture: ComponentFixture<AlertasBarrasProgresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertasBarrasProgresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertasBarrasProgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
