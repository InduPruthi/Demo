import { Pipe, PipeTransform } from '@angular/core';
import{Irestaurant} from './irestaurant'
@Pipe({
  name: 'resturantFilter'
})
export class ResturantFilterPipe implements PipeTransform {

  transform(value: Irestaurant[], args?: string): Irestaurant[] {
   args=args? args.toLowerCase():null;
   return args?value.filter(
     (rest: Irestaurant)=>
   rest.restaurantTitle.toLowerCase().indexOf(args)!==-1 ||rest.restaurantTitle.toLowerCase().indexOf(args)!==-1 )
   :value;
  }

}
