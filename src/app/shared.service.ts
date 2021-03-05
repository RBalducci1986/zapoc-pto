import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:51034/api";

  constructor(private http:HttpClient) { }

  getCatList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Category')
  }

  addCategory(val:any){
    return this.http.post(this.APIUrl+'/Category',val)
  }

  updateCategory(val:any){
    return this.http.put(this.APIUrl+'/Category',val)
  }

  deleteCategory(val:any){
    return this.http.delete(this.APIUrl+'/Category'+val)
  }


  getItemList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Item')
  }

  addItem(val:any){
    return this.http.post(this.APIUrl+'/Item',val)
  }

  updateItem(val:any){
    return this.http.put(this.APIUrl+'/Item',val)
  }

  deleteItem(val:any){
    return this.http.delete(this.APIUrl+'/Item'+val)
  }


  getAllCategoryNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Item/GetAllCategoryNames')
  }
}
