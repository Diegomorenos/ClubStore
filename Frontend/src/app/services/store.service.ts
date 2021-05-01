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

createStore(store: Store){
  return this.http.post(this.URL_API, store);
}

updateStore(store: Store){
  return this.http.put(`${this.URL_API}/${store._id}`, store);

}

deleteStore(_id: string){
  return this.http.delete(`${this.URL_API}/${_id}`);
}
}