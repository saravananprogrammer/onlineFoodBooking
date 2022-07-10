import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuItemComponent} from './component/menu-item/menu-item.component'
import {CartItemsComponent} from './component/cart-items/cart-items.component'
import {OrderItemComponent} from './component/order-item/order-item.component'

const routes: Routes = [
  {path:'', component:MenuItemComponent},
  {path:'menu', component:MenuItemComponent},
  {path:'viewcart', component:CartItemsComponent},
  {path:'order', component:OrderItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
