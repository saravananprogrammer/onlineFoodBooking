import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuItemComponent} from './component/menu-item/menu-item.component'
import {CartItemsComponent} from './component/cart-items/cart-items.component'

const routes: Routes = [
  {path:'', component:MenuItemComponent},
  {path:'viewcart', component:CartItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
