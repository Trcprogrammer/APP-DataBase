import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { empleados} from  'src/app/components/models/models';
import { UsuariosService } from 'src/app/servicio/usuarios.service';

@Component({
  selector: 'app-form-crear',
  templateUrl: './form-crear.component.html',
  styleUrls: ['./form-crear.component.css']
})
export class FormCrearComponent {
alert:boolean=false;
name:string=''
lastName:string=''
number:any;
addres:string=''

constructor(  private servicio:UsuariosService){



}



validar(){
  if(this.name == '' || this.lastName == '' || this.number == '' || this.addres == ''  ){
  this.alert=true;
    return
  }
  this.alert=false;
    
   const datos:empleados={
    name:this.name,
    lastName:this.lastName,
     number:this.number,
     address:this.addres

   }

   console.log(datos);

    this.servicio.datos.push(datos)
   

  
  Swal.fire({
    position: 'top-end',
    width:300,
    
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 2000
  })

}
}

