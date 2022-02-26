import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CapitalComponent } from "./pais/pages/capital/capital.component";
import { CodigoComponent } from "./pais/pages/codigo/codigo.component";
import { PaisComponent } from "./pais/pages/pais/pais.component";
import { RegionComponent } from "./pais/pages/region/region.component";
import { VerComponent } from "./pais/pages/ver/ver.component";

const routes: Routes = [
    {
        path: '',
        component: PaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'pais',
        component: PaisComponent,
        pathMatch: 'prefix'
    },
    {
        path: 'region',
        component: RegionComponent,
        pathMatch: 'full'
    },
    {
        path: 'capital',
        component: CapitalComponent,
        pathMatch: 'full'
    },
    {
        path: 'codigo',
        component: CodigoComponent,
        pathMatch: 'full'
    },
    {
        path: 'ver/:codigo',
        component: VerComponent,
        pathMatch: 'prefix'
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{


}