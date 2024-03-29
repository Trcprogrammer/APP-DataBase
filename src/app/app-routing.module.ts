import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { UsarComponent } from './components/inicio/usar/usar.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ListaComponent } from './components/lista/lista.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'agregar', component: AgregarComponent },
  {path:'lista', component: ListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
