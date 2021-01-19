import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstilosPosicionesColoresComponent } from './estilos-posiciones-colores.component';

describe('EstilosPosicionesColoresComponent', () => {
  let component: EstilosPosicionesColoresComponent;
  let fixture: ComponentFixture<EstilosPosicionesColoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstilosPosicionesColoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstilosPosicionesColoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
