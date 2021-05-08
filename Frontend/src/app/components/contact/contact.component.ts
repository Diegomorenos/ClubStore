import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

send(){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Solicitud Enviada',
    text: 'Pronto estaremos en contacto contigo',
    showConfirmButton: false,
    timer: 2000
  })
}
}
