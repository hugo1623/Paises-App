import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capial',
  templateUrl: './por-capial.component.html',
  styleUrls: ['./por-capial.component.css']
})
export class PorCapialComponent{
  termino: string = '';
  hayError: boolean = false;
  paises : Country[]= [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(termino)
    .subscribe((paises) => {
        // console.log(paises);
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }

}
