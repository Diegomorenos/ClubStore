import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
// import { NgForm } from '@angular/forms';
// import Swal from 'sweetalert2'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public storeService: StoreService) { }

  ngOnInit(): void {
    this.executeStore()
  }

  executeStore(){
    this.storeService.getStore().subscribe(
      res => {
        this.storeService.store = res
        console.log(res)
        return this.storeService.store
      },
      err => {
        this.storeService.store = err
        return this.storeService.store
      }
    )
  }
}
