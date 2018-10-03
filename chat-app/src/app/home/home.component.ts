import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { GroupService } from '../group.service';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user;
  public selectedGroup;
  public selectedChannel;
  public groups = [];
  public channels = [];
  public newGroupName:String
  public searchProduct:String

  constructor(private router: Router, private _groupService:GroupService, private _crudService:CrudService) { }

  ngOnInit() {

  }


  crudCreate(event){
    event.preventDefault();
    this._crudService.crudCreate().subscribe(
      data=>{
        this.crudRead(event);
      }, 
      error => {
        console.error(error);
      }
    );
  }

  crudAdd(event){
    event.preventDefault();
    /*
    this._crudService.crudAdd().subscribe(
      data=>{
        this.crudRead(event);
      }, 
      error => {
        console.error(error);
      }
    );
    */
  }

  crudRemove(event){
   
   /*
    event.preventDefault();
    this._crudService.crudRemove().subscribe(
      data=>{
        this.crudRead(event);
      }, 
      error => {
        console.error(error);
      }
    );

    */
  }

  crudUpdate(event, prodId){

    /*
    event.preventDefault();
    this._crudService.crudUpdate(prodId).subscribe(
      data=>{
        this.crudRead(event);
      }, 
      error => {
        console.error(error);
      }
    );
    */
  }

  crudRead(event){
    event.preventDefault();

    let d ="";
    this._crudService.crudRead().subscribe(
      data=>{
        console.log(data);
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
        console.log(data);
      }, 
      error => {
        console.error(error);
      }
    );

    
  }







  ///////////////////////////

  createGroup(event){
    console.log("////group create ////");
    event.preventDefault();
    let data = {'newGroupName': this.newGroupName};
    this._groupService.createGroup(data).subscribe(
      data => { 
        console.log(data);
        this.getGroups();
      },
      error => {
        console.error(error);
      }
    )
  }

  deleteGroup(groupName){
    this._groupService.deleteGroup(groupName, this.user.username).subscribe(
      data=>{
        this.getGroups();
      }, error =>{
        console.error(error)
      }
    )
  }

  getGroups(){
    let data = {
      'username': JSON.parse(sessionStorage.getItem('user')).username
    }
    this._groupService.getGroups(data).subscribe(
      d=>{
        console.log('getGroups()');
        console.log(d);
        this.groups = d['groups'];
      }, 
      error => {
        console.error(error);
      }
    )
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  // Determine which group is currently selected and pass onto the child panel
  openGroup(name){
    console.log(name);
    for(let i = 0; i < this.groups.length; i++){
      if(this.groups[i].name == name){
        this.selectedGroup = this.groups[i];
      }
    }
    this.channels = this.selectedGroup.channels;
  }


  // Responsible for handling the event call by the child component
  channelChangedHandler(name){
    let found:boolean = false;
    for(let i = 0; i < this.channels.length; i++){
      if(this.channels[i].name == name){
        this.selectedChannel = this.channels[i];
        found = true;
      }
    }
    return found;
  }
  getChannels(groupName){
    let channels = [];
    return channels;
  }
}
