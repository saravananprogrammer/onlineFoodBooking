import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  private OrderItems = new BehaviorSubject([]);
  private menuItems = new BehaviorSubject([]);
  private TotalAmt = new BehaviorSubject([]);
  

  constructor() { }

  setMenu(items: any) {
    this.menuItems.next(items)
  }
  getMenu() {
    return this.menuItems
  }

  setOrder(items: any) {
    this.OrderItems.next(items)
  }
  getOrder() {
    return this.OrderItems;
  }

  setTotal(items: any) {
    this.TotalAmt.next(items)
  }
  getTotal() {
    return this.TotalAmt;
  }



}
