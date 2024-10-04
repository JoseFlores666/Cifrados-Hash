import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuiaComponent } from './pages/guia/guia.component';
import { CifradoCesarComponent } from './pages/cifrado-cesar/cifrado-cesar.component';
import { CifradoEscitalaComponent } from './pages/cifrado-escitala/cifrado-escitala.component';
import { DocumentacionComponent } from './pages/documentacion/documentacion.component';
import { Guia2Component } from './pages/guia2/guia2.component';
import { CifradoasimetricoComponent } from './pages/cifradoasimetrico/cifradoasimetrico.component';
import { Documentacion2Component } from './pages/documentacion2/documentacion2.component';
import { ComparacionComponent } from './pages/comparacion/comparacion.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Comparacion', component:ComparacionComponent},
  {path:'Guia', component:GuiaComponent},
  {path:'Guia2', component:Guia2Component},
  {path:'CifradoCesar', component:CifradoCesarComponent},
  {path:'CifradoEscitala', component:CifradoEscitalaComponent},
  {path:'CifradoAsimetrico', component:CifradoasimetricoComponent},
  {path:'Documentacion', component:DocumentacionComponent},
  {path:'Documentacion2', component:Documentacion2Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
