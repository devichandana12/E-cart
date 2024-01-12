import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {


  BASE_URL = "https://shansapp.danatfix.com:3004"

  constructor(private http: HttpClient) { }


  getData() {
    let url = `${this.BASE_URL}/viewProducts/product_list/product_dropdown`
    return this.http.get<any[]>(url)
  }



  getCategoryData() {
    let url = `${this.BASE_URL}/viewCategories/category_list/category_dropdown/?category_name=`
    return this.http.get<any[]>(url)
  }


  // getCategoryId(categoryId:string){
  //   let url=`${this.BASE_URL}/viewProducts?product_name=&category_id=${categoryId}`
  //   return this.http.get<any[]>(url)
  // }

 

}








// /category_list/category_dropdown

// https://shansapp.danatfix.com:3004/viewProducts/product_list/product_dropdown
// /product_list/product_dropdown

// category":{
//   "category_id":"651579256cbdf4c12d966f1e",
//   "category_name":"DESKTOP POWER SUPPLY"
//   }
