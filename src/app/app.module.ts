import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DummyComponent } from './dummy/dummy.component';
import { CifradoCesarComponent } from './pages/cifrado-cesar/cifrado-cesar.component';
import { CifradoEscitalaComponent } from './pages/cifrado-escitala/cifrado-escitala.component';
import { GuiaComponent } from './pages/guia/guia.component';
import { DocumentacionComponent } from './pages/documentacion/documentacion.component';
import { Footer1Component } from './pages/footer1/footer1.component';
import { MatMenuModule } from '@angular/material/menu';
import { CifradoasimetricoComponent } from './pages/cifradoasimetrico/cifradoasimetrico.component';
import { Documentacion2Component } from './pages/documentacion2/documentacion2.component';
import { Guia2Component } from './pages/guia2/guia2.component';
import { HomeComponent } from './pages/home/home.component';
import { ComparacionComponent } from './pages/comparacion/comparacion.component'; // Importación añadida
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DummyComponent,
    CifradoCesarComponent,
    CifradoEscitalaComponent,
    GuiaComponent,
    DocumentacionComponent,
    Footer1Component,
    CifradoasimetricoComponent,
    Documentacion2Component,
    Guia2Component,
    HomeComponent,
    ComparacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatMenuModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
