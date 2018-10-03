import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  
  public products;
  public user;
  public selectedGroup;
  public selectedChannel;
  public groups = [];
  public channels = [];
  public newGroupName:String
  public searchProduct:String
  public name: string = "";
  public type: string = "";
  public desc: string = "";
  public prodId: string="";


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



  
  //create and store user object
  addProduct(event){
    event.preventDefault();

  
      //ensure that username, password, and email were not left out
      if (this.name !== "" && this.type !== "" && this.desc !== ""&& this.prodId !== ""){
        
        var product =
            {
                prodId: this.prodId,
                name: this.name,
                type: this.type,
                desc: this.desc
            };

        this._crudService.crudAdd(product).subscribe(
          data=>{
            this.crudRead(event);
            this.router.navigate(['/products']);
            console.log(product);
          }, 
          error => {
            console.error(error);
          }
        );
          
      }
      else{
        alert("Please fill all fields.");
      }
    

  }

}
