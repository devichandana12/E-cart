import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/Service/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  p: number = 1;
  productArray:any;
  

  constructor(private service:ProductServiceService) {}

  ngOnInit(): void {
    this.getProduct()
    
  }


  getProduct(){
    this.service.getData().subscribe((data) => {
      this.productArray = data;
      console.log(this.productArray);
      
    })
  }





}
