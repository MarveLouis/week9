import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})



export class ProductsComponent implements OnInit {

  public products;
  public user;
  public selectedGroup;
  public selectedChannel;
  public groups = [];
  public channels = [];
  public newGroupName:String
  public searchProduct:String



  constructor(private router: Router,  private _crudService:CrudService) {

   

  }

  ngOnInit() {

      this.products = this.crudRead(null);

  }

  crudRead(event){
    //event.preventDefault();

    this._crudService.crudRead().subscribe(
      data=>{
        this.products = data;
      }, 
      error => {
        console.error(error);
      }
    );
  }

  search(event){
    event.preventDefault();

    this._crudService.searchProduct(this.searchProduct).subscribe(
      data=>{
        this.products = data;
        
      }, 
      error => {
        console.error(error);
      }
    );

  }

  crudRemove(event, _id){
    
    event.preventDefault();
    
    this._crudService.crudRemove(_id).subscribe(
      data=>{
        this.crudRead(event);
      }, 
      error => {
        console.error(error);
      }
    );
  }

  crudUpdate(event, _id){
    this.router.navigate(['/updateproduct/'+_id]);
  }

  

}
