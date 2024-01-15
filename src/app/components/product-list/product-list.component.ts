import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/Service/product-service.service';




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  p: number = 1;
  productArray: any;
  categoryName: any;


  selectedCategoryId: string = 'ALL';
  categoryId: string = '';

  filteredProduct: any[] = [];



  constructor(private service: ProductServiceService) { }

  ngOnInit(): void {
    this.getProduct()
    this.getCategory()

  }


  getProduct() {
    this.service.getData().subscribe((res: any) => {
      this.productArray = res.data;
      this.filteredProduct = this.productArray; // Initialize with all products
    });
  }


  getCategory() {
    this.service.getCategoryData().subscribe((response: any) => {

      this.categoryName = response.data;
      console.log("category data:", this.categoryName);
    });
  }





  FilterCategoryId(categoryId: string) {

    if (categoryId === 'ALL') { 
      this.filteredProduct = this.productArray; 
    }
    else {
      this.service.getCategoryId(categoryId).subscribe((resp: any) => {
        this.selectedCategoryId = resp.data;
        console.log(this.selectedCategoryId);
        this.filteredProduct = resp.data



      });
    }
  }






}
