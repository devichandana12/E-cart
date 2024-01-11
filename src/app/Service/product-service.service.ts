import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }
  // https://shansapp.danatfix.com:3004/viewProducts/product_list/product_dropdown 
  // /product_list/product_dropdown 

  getData(){
    let url='https://shansapp.danatfix.com:3004/viewProducts/product_list/product_dropdown'
    return this.http.get<any[]>(url)
  }



}
