import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import {MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Sort} from '@angular/material/sort';


@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})





export class OrderItemComponent implements OnInit {

  dummyOrderdata:any;

  
  displayedColumns: string[] = ['ItemNo', 'ItemName', 'ItemType','OrderDate', 'ItemPrice'];
  dataSource = new MatTableDataSource<FoodItems>(ELEMENT_DATA);
 
  //@ViewChild(MatPaginator) paginator: MatPaginator;
 
  constructor() { }


  ngOnInit(): void {

    this.dummyOrderdata = [
      {

        'orderId':'zohox123',
        'orderItems' : 'Dosa,Idly,poori',
        'orderType' : 'veg',
        'frequentOrder':'5',
        'orderDate':'05/07/2020 13:25',
        'totalAmt':800

    },
    {

      'orderId':'zohoy124',
      'orderItems' : 'Chicken,Dosai',
      'orderType' : 'veg / Nonveg',
      'frequentOrder':'5',
      'orderDate':'05/07/2020 13:25',
      'totalAmt':1000

    }

  
  
  ]
  }
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

}
export interface FoodItems {
  itemName: string;
  itemNo: number;
  ItemType: string;
  ItemPrice: number;
  orderDate:any;
}

const ELEMENT_DATA: FoodItems[] = [
  {itemNo: 1, itemName: 'Dosai', ItemType: 'Veg',orderDate:'22/10/2020', ItemPrice: 40},
  {itemNo: 2, itemName: 'Chicken', ItemType: 'Non-Veg',orderDate:'22/10/2020', ItemPrice: 100},
  {itemNo: 3, itemName: 'Chapathi', ItemType: 'Veg',orderDate:'22/10/2020', ItemPrice: 80},
  {itemNo: 4, itemName: 'Biriyani', ItemType: 'Veg',orderDate:'22/10/2020', ItemPrice: 200},
  {itemNo: 5, itemName: 'Fried Rice', ItemType: 'Veg',orderDate:'22/10/2020', ItemPrice: 80},
  {itemNo: 6, itemName: 'Dessert', ItemType: 'Veg',orderDate:'22/10/2020', ItemPrice: 75},
  {itemNo: 7, itemName: 'Dosai', ItemType: 'Veg',orderDate:'22/10/2020', ItemPrice: 40},
   {itemNo: 8, itemName: 'Parotta', ItemType: 'Veg',orderDate:'22/10/2020', ItemPrice: 85},
   {itemNo: 9, itemName: 'Naan', ItemType: 'Veg',orderDate:'22/10/2020', ItemPrice: 45},
   {itemNo: 10, itemName: 'Rooti', ItemType: 'Veg',orderDate:'22/10/2020', ItemPrice: 65},
   {itemNo: 11, itemName: 'Idly', ItemType: 'Veg',orderDate:'22/10/2020', ItemPrice: 150},
   {itemNo: 12, itemName: 'Poori', ItemType: 'Veg',orderDate:'22/10/2020', ItemPrice: 25},
   {itemNo: 13, itemName: 'Pongal', ItemType: 'Veg',orderDate:'22/10/2020', ItemPrice: 150},
   {itemNo: 14, itemName: 'Dosai', ItemType: 'Veg',orderDate:'22/10/2020', ItemPrice: 200},

];