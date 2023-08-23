import { Component } from '@angular/core';
import Swal from 'sweetalert2';

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



validar(){
  if(this.name == '' || this.lastName == '' || this.number == '' || this.addres == ''  ){
  this.alert=true;
    return
  }
  this.alert=false;
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

