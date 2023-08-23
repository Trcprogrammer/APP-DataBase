import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/servicio/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent {
  users: any;

  constructor(private servicio: UsuariosService) {
    this.users = this.servicio.datos;
    console.log(this.users);
  }

  borrar(index: number) {
    this.servicio.datos.splice(index, 1);
  }
}
