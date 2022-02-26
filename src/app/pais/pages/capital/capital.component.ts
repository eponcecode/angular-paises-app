import { Component, Output } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html'
})
export class CapitalComponent {

  termino: string = ""
  hayError: boolean= false;
  paises: Country[] = [];
  sugerencias: Country[] = [];
  mostrarSugerencias: boolean=false;
  constructor(private paisService:PaisService) { }
  buscar(termino: string){
    this.hayError=false
    this.termino=termino
    this.mostrarSugerencias=false
    if(this.termino==""){
      this.paises=[]
      return;
  }
    this.paisService.buscarCapital(this.termino)
    .subscribe( (paises)=>{
      this.paises=paises
      },(err) =>{
        this.hayError=true;
        this.paises=[]
      });
  }
  sugerencia(termino:string){
    this.hayError=false;
    this.mostrarSugerencias=true
    this.termino=termino
    this.paisService.buscarCapital(termino)
    .subscribe((paises)=> {
      this.sugerencias=paises.splice(0,5)}
    ,(err) =>{
      this.mostrarSugerencias=false
      this.hayError=true;
      this.sugerencias=[]
    });
  }

}
