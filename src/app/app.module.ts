import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { Menu1Component } from './menu1/menu1.component';
import { TemasSigComponent } from './temas-sig/temas-sig.component';
import { EstilosAlineacionComponent } from './estilos-alineacion/estilos-alineacion.component';
import { EstilosPosicionesColoresComponent } from './estilos-posiciones-colores/estilos-posiciones-colores.component';
import { EspacidosMargenesComponent } from './espacidos-margenes/espacidos-margenes.component';
import { ListasContadorBtnComponent } from './listas-contador-btn/listas-contador-btn.component';
import { AlertasBarrasProgresoComponent } from './alertas-barras-progreso/alertas-barras-progreso.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    CalculadoraComponent,
    Menu1Component,
    TemasSigComponent,
    EstilosAlineacionComponent,
    EstilosPosicionesColoresComponent,
    EspacidosMargenesComponent,
    ListasContadorBtnComponent,
    AlertasBarrasProgresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
