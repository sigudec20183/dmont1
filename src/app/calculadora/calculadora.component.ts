import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  tituloSIG: string = '20211';

  imagenSIG = 'assets/sig_av.png';

  contadorTotal=0;
  suma=0;
  resta=0;
  texto: string;

  constructor() { }

  ngOnInit() {
    this.contadorTotal = 10;
    this.texto = '10';
  }

  sumar() {
    this.contadorTotal++;
    this.suma++;
  }

  restar() {
    this.contadorTotal--;
    this.resta++;
  }

  reset() {
    this.contadorTotal = +this.texto;
    this.resta = 0;
    this.suma = 0;
  }

}
