import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
  ]
})
export class RegionComponent{
  hayError: boolean= false;
  paises: Country[] = [];
  //regiones: string[] = ['africa', 'americas','asia','europe','oceania']
  regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC']
  
  regionActiva: string='';
  constructor(private paisService:PaisService) { }


  getClaseCSS(region: string): string{
    return (region === this.regionActiva) ? 'btn btn-danger' : 'btn btn-outline-danger';
  }

  activarRegion(region: string){
    if(region === this.regionActiva) return;
    this.regionActiva=region;
    this.paisService.buscarRegion(this.regionActiva)
    .subscribe( (paises)=>{
      this.paises=paises
      },(err) =>{
        this.hayError=true;
        this.paises=[]
      });
  }

  buscar(termino: string){
    this.regionActiva=termino
    this.hayError=false
    if(this.regionActiva==""){
      this.paises=[]
      return;
  }
    this.paisService.buscarRegion(this.regionActiva)
    .subscribe( (paises)=>{
      this.paises=paises
      this.regionActiva=this.paises[0].region;
      console.log(this.paises[0])
      },(err) =>{
        this.hayError=true;
        this.paises=[]
      });
  }

}
