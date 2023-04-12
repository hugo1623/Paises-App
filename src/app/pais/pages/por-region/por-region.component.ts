import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  constructor() {}

  getclasCSS(region: string): string{
    return(region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }
  activarRegion(region: string) {
    this.regionActiva = region;
  }
}
