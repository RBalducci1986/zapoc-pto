import { SharedService } from './shared.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ShowCatComponent } from './category/show-cat/show-cat.component';
import { AddEditCatComponent } from './category/add-edit-cat/add-edit-cat.component';
import { ItemComponent } from './item/item.component';
import { ShowItemComponent } from './item/show-item/show-item.component';
import { AddEditItemComponent } from './item/add-edit-item/add-edit-item.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ShowCatComponent,
    AddEditCatComponent,
    ItemComponent,
    ShowItemComponent,
    AddEditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
