// ============================================
// This service is responsible for CRUD actions 
// to the group APIs
// ============================================

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private api:string = 'http://localhost:3000/api/';

  constructor(private http:HttpClient) {}

  crudCreate(){
    return this.http.post(this.api + 'crud/create',  httpOptions);
  }
  
  crudAdd(product){
    return this.http.post(this.api + 'crud/add', {product}, httpOptions);
  }


  crudRemove(_id){
    
    return this.http.post(this.api + 'crud/remove', {_id}, httpOptions);
  }

  crudUpdate(product, _id){
    return this.http.post(this.api + 'crud/update', {product, _id}, httpOptions);
  }

  crudRead(){
    return this.http.post(this.api + 'crud/read', httpOptions);
  }

  searchProduct(searchProduct){
    return this.http.post(this.api + 'crud/search', {searchProduct}, httpOptions);
  }
}
