import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Store } from '../../models/store';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
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

  updateStore(store: Store) {
    this.storeService.selectedStore = store;
  }

  createStore(form?: NgForm) {
    if (!form.value._id) {
      this.storeService.createStore(form.value).subscribe(
        (res) => {
          console.log(res);
          Swal.fire(
            'Producto Creado',
            'El Producto se creo correctamente',
            'success'
          );
          this.executeStore();
          return res;
        },
        (err) => {
          console.log('Error', err);
          Swal.fire(
            'Producto No Creado',
            'El Producto no se creo correctamente',
            'error'
          );
          return err;
        }
      );
    } else {
      this.storeService.updateStore(form.value).subscribe(
        (res) => {
          console.log(res);
          Swal.fire(
            'Producto Actualizado',
            'El Producto se Actualizó correctamente',
            'success'
          );
          this.executeStore();
          return res;
        },
        (err) => {
          console.log(err);
          return err;
        }
      );
    }
    this.cleanForm(form);
  }

  cleanForm(form?: NgForm) {
    console.log('limpiar');
    // if
    // (form){
    //   form.reset()
    //   this.storeService.selectedStore = new store()
    //   this.executeStore()
    // }
  }

  deleteStore(_id: string) {
    Swal.fire({
      title: '¿Estas seguro que deseas eliminar el producto?',
      text: 'Recuerda que no puedes revertir esta accion',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!',
      cancelButtonText: 'No!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.storeService.deleteStore(_id).subscribe(
          (res) => {
            console.log(res);
            this.executeStore();
          },
          (err) => {
            console.log(err);
          }
        );
        Swal.fire(
          'Producto Eliminado',
          'El producto se elimino satisfactoriamente',
          'success'
        );
      }
    });
  }
}
