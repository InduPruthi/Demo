import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router'
@Component({
  selector: 'cs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Name:string;
  constructor( private _activeRoute :ActivatedRoute) { 

  }

  ngOnInit() {
     this.Name=this._activeRoute.snapshot.params['Name'];
  }

}
