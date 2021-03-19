import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {path: 'category', component:CategoryComponent},
  {path: 'item', component:ItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
