import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  
  private OrderItems = new BehaviorSubject([]);

  constructor() { }


  setOrder(items:any){
    this.OrderItems.next(items)
  }

  
  getOrder(){
    return this.OrderItems;
  }


}
