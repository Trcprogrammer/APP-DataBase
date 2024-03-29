import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { UsarComponent } from './components/inicio/usar/usar.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { FormCrearComponent } from './components/agregar/form-crear/form-crear.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './components/lista/lista.component';
import { UsuariosComponent } from './components/lista/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UsarComponent,
    AgregarComponent,
    FormCrearComponent,
    ListaComponent,
    UsuariosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
