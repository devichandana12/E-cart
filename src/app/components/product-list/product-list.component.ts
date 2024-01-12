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
  

  selectedCategory: string = ''; 
  categoryId: string = ''; 



  constructor(private service: ProductServiceService) { }

  ngOnInit(): void {
    this.getProduct()
    this.getCategory()
    
  }


  getProduct() {
    this.service.getData().subscribe((res:any) => {
      this.productArray = res.data;
      console.log("full data is:", this.productArray);

    })
  }


  getCategory() {
    this.service.getCategoryData().subscribe((response:any) => {
      
      this.categoryName = response.data;
      console.log("category data:", this.categoryName);
    });
  }
 
 
  filterImages(){
  //   if(this.selectedCategory==='ALL'){
  //     this.categoryId='';
  //   }
  //   else{
  //     this.categoryId=this.selectedCategory
  //   }
  //   this.service.getCategoryId(this.categoryId).subscribe((response:any)=>{
  //     this.productArray=response.data

  //   })
  }

}
