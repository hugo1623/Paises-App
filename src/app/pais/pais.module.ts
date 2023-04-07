import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Componentes
import { PorCapialComponent } from './pages/por-capial/por-capial.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';




@NgModule({
  declarations: [
    PorCapialComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  exports:[
    PorCapialComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaisModule { }
