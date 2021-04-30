import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../models/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  URL_API:string = "http://localhost:3000/api"

  selectedStore: Store = {
    _id: '',
    name: '',
    category: '',
    information: '',
    phone: '',
    location: '',
    imgUrl: ''
  }

  store: Store[];

  constructor(private http: HttpClient) { }

getStore(){
  return this.http.get<Store[]>(this.URL_API)
}
}
