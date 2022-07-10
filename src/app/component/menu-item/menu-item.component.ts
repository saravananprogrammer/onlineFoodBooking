import { Component, OnInit,HostListener } from '@angular/core';
import {CommonserviceService} from '../../service/commonservice.service'

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  MenuItem: any
  selectedqty:any = 0;
  selectedPrice = 0;
  orderedItems:any = []
  cartboolean:any = false
  currentIndex:any = 1;
  grantTotal:any = 0;

  cartofproduct:any = []

  constructor(private foodService:CommonserviceService) { }

  ngOnInit(): void {
    this.MenuItem = [
      {
        NAME: 'Dosa',
        TYPE: 'Veg',
        CUISINE: 'South Indian',
        AVAILABILITY: ['BREAKFAST', 'LUNCH'],
        PRICE: '50',
        image: 'Dosa',
        qty : 0
      },

      {
        NAME: 'Chapathi',
        TYPE: 'Veg',
        CUISINE: 'North Indian',
        AVAILABILITY: ['BREAKFAST', 'LUNCH'],
        PRICE: '40',
        qty : 0,
      },
      {
        NAME: 'Chicken',
        TYPE: 'Non Veg',
        CUISINE: 'North Indian',
        AVAILABILITY: ['BREAKFAST', 'LUNCH','DINNER'],
        PRICE: '100',
        qty : 0
      },

    ]

    this.foodService.setMenu(this.MenuItem);

    
  }

 
  
  addItems(event:any,index:any,menu:any){
    // console.log("Menu =======>",menu)
    let productAvailable = this.MenuItem.indexOf(menu)
    if(productAvailable !=-1){
      menu.qty++;
      menu.orderDate = new Date()
    }
    //console.log("order items check======>",this.orderedItems.includes(menu))
    if(this.orderedItems.includes(menu) == false){
      this.orderedItems.push(menu) 
    }

    /* Total Caluckation */
    this.grantTotal =  this.sumofTotal(this.orderedItems)
    this.foodService.setTotal(this.grantTotal);
    /* Total qty */
    this.selectedqty = this.sumofQty(this.orderedItems)

    /*orderItems setting*/ 
    this.foodService.setOrder(this.orderedItems);

  }

  sumofTotal(obj: any) {
    var sum = 0;
    for (var el in obj) {
      if (obj.hasOwnProperty(el))
        sum += obj[el].qty * obj[el].PRICE;
    }
    return sum;
  } 
  
  sumofQty(obj :any){
    var qty = 0;
    for (var el in obj) {
      if (obj.hasOwnProperty(el))
          qty += obj[el].qty;
    }
    return qty;
  }


  reduceofTotal(obj: any) {
    var sum = 0;
    for (var el in obj) {
      if (obj.hasOwnProperty(el))
        sum -= obj[el].qty * obj[el].PRICE;
    }
    return sum;
  } 
  
  reduceofQty(obj :any){
    var qty = 0;
    for (var el in obj) {
      if (obj.hasOwnProperty(el))
          qty -= obj[el].qty;
    }
    return qty;
  }

  
  removeItems(event:any,index:any,menu:any){
    let productAvailable = this.MenuItem.indexOf(menu)
    if(productAvailable !=-1){
      menu.qty--;
    }
    let orderItemindex = this.orderedItems.indexOf(menu)

    if(menu.qty==0){
      this.orderedItems.splice(orderItemindex,1)
    }

     /* Total Caluckation */
     this.grantTotal =  Math.abs(this.reduceofTotal(this.orderedItems))
     this.foodService.setTotal(this.grantTotal)
     /* Total qty */
     this.selectedqty = Math.abs(this.reduceofQty(this.orderedItems))

     /*orderItems setting*/ 
    this.foodService.setOrder(this.orderedItems);
    

    //  console.log("Grant total=====>",Math.abs(this.grantTotal),"selectedqty=====>",Math.abs(this.selectedqty))

  }

}
