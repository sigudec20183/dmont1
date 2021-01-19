import { Component, OnInit } from '@angular/core';
import { dataTemasSIG } from '../data-temasSIG';

@Component({
  selector: 'app-temas-sig',
  templateUrl: './temas-sig.component.html',
  styleUrls: ['./temas-sig.component.css']
})
export class TemasSigComponent implements OnInit {

  tituloTematicasSIG = 'Listado de Tematicas';
  tematicasSIG = dataTemasSIG;

  constructor() { }

  ngOnInit() {
  }

}
