import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { CrudService } from '../crud.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {


  
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
  public _id: string="";


  constructor(private router: Router,  private _crudService:CrudService, private route: ActivatedRoute) {

    this.route.params.subscribe( params => this._id = params._id
    );
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
  updateProduct(event){
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


        event.preventDefault();
        this._crudService.crudUpdate(product, this._id).subscribe(
          data=>{
            this.router.navigate(['/products']);
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








