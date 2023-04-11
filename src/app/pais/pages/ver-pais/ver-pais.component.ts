import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap,tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent {
  pais!: Country;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) {
      activatedRoute.params.subscribe(data => {
        // console.log('Este es el ID:' + data['cca2']);
      this.getPaisPorAlpha(data['cca2']);
      })
     }
      getPaisPorAlpha(cca2: string){
        this.paisService.getPaisPorAlpha(cca2).subscribe(data=>{
          console.log(data);
          this.pais= data;
        });

      }
  // ngOnInit(): void {
  //   this.activatedRoute.params
  //     .pipe(
  //       switchMap(({id}) => this.paisService.getPaisPorAlpha(id)),
  //       tap(console.log)
  //     )
  //     .subscribe(pais => this.pais = pais );
    // this.activatedRoute.params
    //   .subscribe(({id}) =>{
    //     console.log(id);

    //     this.paisService.getPaisPorAlpha(id)
    //       .subscribe(pais =>{
    //         console.log(pais);
            
    //       });

    //   });
    
  // }

}
