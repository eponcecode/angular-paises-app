import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.component.html'
})
export class CodigoComponent {
  constructor(private paisService:PaisService) { }
  termino: string = ""
  pais!:Country;
  hayError: boolean=false
  buscar(termino: string){
    if(termino=== ""){
      this.pais!=undefined
      this.hayError=false;
      this.termino=""
      return
    }
    this.termino=termino
    this.hayError=false;
    this.paisService.buscarCodigo(this.termino)
    .subscribe( (paises)=>{
      this.pais=paises[0]
      if(this.pais!==undefined){
        window.location.href = `/ver/${termino}`;
      }
      },(err) =>{
        this.hayError=true;
        this.pais!=undefined
      });
      
  }
}
