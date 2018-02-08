import { Component,Input,OnChanges } from '@angular/core';

@Component({
  selector: 'cs-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {
@Input() rating :number;
starwidth:number;
  constructor() { }

 
  ngOnChanges()
  {
    this.starwidth=this.rating * (86/5);
  }

}
