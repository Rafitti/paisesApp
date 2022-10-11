import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country ;

  constructor(
    private RutaActiva: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {
    

    this.RutaActiva.params
    .pipe(
      switchMap( ( params ) => this.paisService.getPaisPorAlpha( params['id'] ) ),
      tap(console.log)
    )
    .subscribe( pais => this.pais = pais[0] );
    // this.RutaActiva.params
    //   .subscribe( ({id}) => {
    //     console.log(id);
    //     this.paisService.getPaisPorAlpha(id).subscribe(
    //       pais => {
    //         console.log(pais);
    //       });

    //   });

  }

}
