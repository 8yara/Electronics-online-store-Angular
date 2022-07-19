import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { ICategory, IProduct, IProductNew } from 'src/app/ViewModels/store';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
addedProduct:IProductNew={} as IProductNew;
categories:ICategory[]=[];
  constructor(private prdServ:ProductApiService,
    private catServ:CategoryService,
    private router: Router) {
    this.catServ.getAllCategories().subscribe((catList)=>{this.categories=catList})
  
   }

  ngOnInit(): void {
  }

  insertProduct() {
    this.prdServ.addProduct(this.addedProduct).subscribe({
        next: (prd => {
          this.router.navigate(['/Product'])
        }),
        error: (err) => {
          console.log(err);
        }
      });
  }
}
