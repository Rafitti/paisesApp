import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino        : string = '';
  hayError       : boolean = false;
  paisesSugeridos: Country[] = [];
  paises         : Country[]=[];
  mostrarSugs    : boolean = false;

  constructor(private PaisService: PaisService) { }

  buscar(termino: string){

    this.hayError = false;
    this.termino=termino;
    
    this.PaisService.buscarPais( termino )
    .subscribe( (paises) => {
      console.log(paises);
      this.paises = paises;
    
    },
    (err) => {
      this.hayError = true;
      this.paises = [];
    });
  
  }

  sugerencias( termino: string ) {
    this.hayError    = false;
    this.termino     = termino;
    this.mostrarSugs = true;
    this.PaisService.buscarPais( termino )
      .subscribe( paises=>{ this.paisesSugeridos = paises.splice(0,5);
      console.log(paises);},
      (err)=> this.paisesSugeridos=[]
      );

  }

   BuscarSugerido( termino:string ) {
    this.buscar( termino );
    
   }

}
