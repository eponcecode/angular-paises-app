import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CapitalComponent } from './pages/capital/capital.component';
import { PaisComponent } from './pages/pais/pais.component';
import { RegionComponent } from './pages/region/region.component';
import { VerComponent } from './pages/ver/ver.component';
import { CodigoComponent } from './pages/codigo/codigo.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';
import { RegionTablaComponent } from './components/region-tabla/region-tabla.component';



@NgModule({
  declarations: [
    CapitalComponent,
    PaisComponent,
    RegionComponent,
    CodigoComponent,
    VerComponent,
    PaisTablaComponent,
    RegionTablaComponent,
    PaisInputComponent
  ],
  exports: [
    CapitalComponent,
    PaisComponent,
    RegionComponent,
    CodigoComponent,
    VerComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule
  ]
})
export class PaisModule { }
