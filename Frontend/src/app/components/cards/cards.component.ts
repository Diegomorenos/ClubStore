import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

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

