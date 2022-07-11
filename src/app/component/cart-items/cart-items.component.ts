import { Component, OnInit } from '@angular/core';
import {CommonserviceService} from '../../service/commonservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {
  orderedFood:any
  MenuItem:any
  grantTotal:any = 0;
  selectedqty:any
  CartShow:boolean=false;
  constructor(private foodservice:CommonserviceService,public router:Router) { }

  ngOnInit(): void {

    this.foodservice.getOrder().subscribe((e)=>{
      this.orderedFood =  e;

      if(this.orderedFood !='')
        this.CartShow = true;
      else
        this.CartShow = false;
    })


    this.foodservice.getMenu().subscribe((items)=>{
      this.MenuItem =items;
    })

    this.foodservice.getTotal().subscribe((items)=>{
      this.grantTotal =items;
    })

    //console.log("orderedFood============>",this.orderedFood)
  }

  goToback(){
    this.router.navigate(['/'])
  }


  addItems(event:any,index:any,menu:any){
    // console.log("Menu =======>",menu)
    let productAvailable = this.MenuItem.indexOf(menu)
    if(productAvailable !=-1){
      menu.qty++;
      menu.orderDate = new Date()
    }
    //console.log("order items check======>",this.orderedItems.includes(menu))
    if(this.orderedFood.includes(menu) == false){
      this.orderedFood.push(menu) 
    }

    /* Total Caluckation */
    this.grantTotal =  this.sumofTotal(this.orderedFood)
    /* Total qty */
    this.selectedqty = this.sumofQty(this.orderedFood)

    /*orderItems setting*/ 
    this.foodservice.setOrder(this.orderedFood);


    console.log("===========>grantTotal",this.grantTotal)

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
    let orderItemindex = this.orderedFood.indexOf(menu)

    if(menu.qty==0){
      this.orderedFood.splice(orderItemindex,1)
    }

     /* Total Caluckation */
     this.grantTotal =  Math.abs(this.reduceofTotal(this.orderedFood))
     /* Total qty */
     this.selectedqty = Math.abs(this.reduceofQty(this.orderedFood))

     /*orderItems setting*/ 
    this.foodservice.setOrder(this.orderedFood);
    

    //  console.log("Grant total=====>",Math.abs(this.grantTotal),"selectedqty=====>",Math.abs(this.selectedqty))

  }
  paymentType:any
  orderEnable:boolean =false;
  orderId:any;
  successDiv:boolean =false
  paymentShow = true;
  paymentTypesetting(event:any){
    //console.log("event======>",event.target.value)
    this.paymentType = event.target.value
    this.orderEnable = true;
  }

  placeOrder(){
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var result = "zoho"
    var charactersLength = characters.length;

    for ( var i = 0; i < 5 ; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    this.orderId = result;
    this.successDiv =true
    //this.orderEnable = false;
    this.paymentShow =false
    //console.log("Zoho======>",result)

  }

  


}
