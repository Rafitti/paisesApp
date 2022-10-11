import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
  ]
})
export class CapitalComponent {

  termino : string = 'Mexico';
  hayError: boolean = false;
  paises: Country[]=[];

  constructor(private PaisService: PaisService) { }

  buscar(termino: string){

    this.hayError = false;
    this.termino=termino;
    
    this.PaisService.buscarCapital( termino )
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
    this.hayError= false;
    // TODO: crear sugerencias
  }

}

