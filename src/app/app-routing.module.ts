import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertasBarrasProgresoComponent } from './alertas-barras-progreso/alertas-barras-progreso.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { EspacidosMargenesComponent } from './espacidos-margenes/espacidos-margenes.component';
import { EstilosAlineacionComponent } from './estilos-alineacion/estilos-alineacion.component';
import { EstilosPosicionesColoresComponent } from './estilos-posiciones-colores/estilos-posiciones-colores.component';
import { ListasContadorBtnComponent } from './listas-contador-btn/listas-contador-btn.component';
import { TemasSigComponent } from './temas-sig/temas-sig.component';


const routes: Routes = [
  {path: 'calculadora', component: CalculadoraComponent},
  {path: 'temas-sig', component: TemasSigComponent},
  {path: 'estilo-alileacion', component: EstilosAlineacionComponent},
  {path: 'estilo-posiciones-colores', component: EstilosPosicionesColoresComponent},
  {path: 'espaciados-margenes', component: EspacidosMargenesComponent},
  {path: 'listas-contador-btn', component: ListasContadorBtnComponent},
  {path: 'alertas-barras-progreso', component: AlertasBarrasProgresoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
