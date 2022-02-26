import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country, Translations } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styles: [
  ]
})
export class VerComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private paisService:PaisService) { }
  datos!:Country;
  translations!: Translations;
  hayError: boolean= false;
  ngOnInit(): void {
    this.activateRoute.params
    .pipe(//({}) destructuración
      switchMap( ({codigo})=>  this.paisService.buscarCodigo(codigo)),
      tap(console.log)
    )
    .subscribe(pais =>{
      this.translations=pais[0].translations;
      return this.datos=pais[0]
    },(err) =>{
        this.hayError=true;
      }
      
    )
    
    /* this.activateRoute.params
    .subscribe( ({codigo}) => {
      this.paisService.findbyCode(codigo)
      .subscribe(pais=>{
        console.log(pais)
      })
    }) */
  }

}
