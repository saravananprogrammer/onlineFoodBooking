import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import {MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';

export interface FoodItems {
  itemName: string;
  itemNo: number;
  ItemType: string;
  ItemPrice: number;
  orderDate:any;
  Cuisine:any
}

const ELEMENT_DATA: FoodItems[] = [
  {itemNo: 1, itemName: 'Dosai', ItemType: 'veg',Cuisine:'North Indian',orderDate:'2022-06-09', ItemPrice: 40},
  {itemNo: 2, itemName: 'Chicken', ItemType: 'NV',Cuisine:'Italian',orderDate:'2022-06-01', ItemPrice: 100},
  {itemNo: 3, itemName: 'Chapathi', ItemType: 'veg',Cuisine:'South Indian',orderDate:'2022-06-13', ItemPrice: 80},
  {itemNo: 4, itemName: 'Biriyani', ItemType: 'veg',Cuisine:'Italian',orderDate:'2022-05-10', ItemPrice: 200},
  {itemNo: 5, itemName: 'Fried Rice', ItemType: 'veg',Cuisine:'North Indian',orderDate:'2022-04-12', ItemPrice: 80},
  {itemNo: 6, itemName: 'Dessert', ItemType: 'veg',Cuisine:'Italian',orderDate:'2022-07-04', ItemPrice: 75},
  {itemNo: 7, itemName: 'Dosai', ItemType: 'veg',Cuisine:'South Indian',orderDate:'2022-02-11', ItemPrice: 40},
   {itemNo: 8, itemName: 'Parotta', ItemType: 'veg',Cuisine:'Italian',orderDate:'2022-02-06', ItemPrice: 85},
   {itemNo: 9, itemName: 'Naan', ItemType: 'veg',Cuisine:'Italian',orderDate:'2022-05-08', ItemPrice: 45},
   {itemNo: 10, itemName: 'Rooti', ItemType: 'veg',Cuisine:'South Indian',orderDate:'2022-06-11', ItemPrice: 65},
   {itemNo: 11, itemName: 'Idly', ItemType: 'veg',Cuisine:'Italian',orderDate:'2022-07-07', ItemPrice: 150},
   {itemNo: 12, itemName: 'Poori', ItemType: 'veg',Cuisine:'Italian',orderDate:'2022-01-11', ItemPrice: 25},
   {itemNo: 13, itemName: 'Pongal', ItemType: 'veg',Cuisine:'South Indian',orderDate:'2022-03-11', ItemPrice: 150},
   {itemNo: 14, itemName: 'Dosai', ItemType: 'veg',Cuisine:'Italian',orderDate:'2022-07-11', ItemPrice: 200},
   {itemNo: 15, itemName: 'Biriyani', ItemType: 'NV',Cuisine:'North Indian',orderDate:'2022-07-11', ItemPrice: 200},

];
/* Past 30 Days Record computation */
const currentDate = new Date();
const currentDateTime = currentDate.getTime();
const last30DaysDate = new Date(currentDate.setDate(currentDate.getDate() - 30));
const last30DaysDateTime = last30DaysDate.getTime();

const last30DaysList = ELEMENT_DATA.filter(x => {
  const elementDateTime = new Date(x.orderDate).getTime();
  if (elementDateTime <= currentDateTime && elementDateTime > last30DaysDateTime) {
    return true;
  }
  return false
})



@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})

export class OrderItemComponent implements OnInit {
  dummyOrderdata:any;
  displayedColumns: string[] = ['ItemNo', 'ItemName', 'ItemType','Cuisine','OrderDate', 'ItemPrice'];
  dataSource = new MatTableDataSource<FoodItems>(last30DaysList);
 
  //@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  //@ViewChild(MatSort, { static: true }) sort: MatSort;
 
  constructor(private _liveAnnouncer: LiveAnnouncer) { }


  ngOnInit(): void {

  }
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

   /** Announce the change in sort state for assistive technology. */
   announceSortChange(sortState: Sort) {
    
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  applyFilter(filterValue: any) {
    filterValue = filterValue.target.value.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}



