import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorCapialComponent } from './pais/pages/por-capial/por-capial.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
  {path: '', component: PorPaisComponent, pathMatch:'full'},
  {path: 'region', component: PorRegionComponent},
  {path: 'capital', component: PorCapialComponent},
  {path: 'pais/:cca2', component: VerPaisComponent},
  {path: '**', redirectTo:''},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
