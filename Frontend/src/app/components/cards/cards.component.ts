import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  constructor(public storeService: StoreService) {}

  ngOnInit(): void {
    this.executeStore();
  }

  executeStore() {
    this.storeService.getStore().subscribe(
      (res) => {
        this.storeService.store = res;
        console.log(res);
        return this.storeService.store;
      },
      (err) => {
        this.storeService.store = err;
        return this.storeService.store;
      }
    );
  }
  visit(){
    Swal.fire({
      title:'¡Proximamente!',
      text:'Ahora estas en la versión beta',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
}
