import { Component, OnInit } from '@angular/core';
import{Irestaurant} from'../shared-folder/irestaurant';
import{RestaurentService} from '../shared-folder/restaurent.service'
@Component({
  selector: 'cs-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
  providers:[RestaurentService]
})
export class RestaurantListComponent implements OnInit {
pageTitle:string ='Restaurment Management System';
ShowImage:Boolean=true
listFile: string;
_rest :RestaurentService;
resturant: Irestaurant[];
  constructor( private rest:RestaurentService) {
    
    this._rest=rest;
   }

  ngOnInit() {
     console.log("init");
     this.resturant=this._rest.getRestaurent();
  }
  ToggleImage(): void 
  {
    this.ShowImage=!this.ShowImage
  }

}
