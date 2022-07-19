import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { IProductNew } from 'src/app/ViewModels/store';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  private prdID: number=0;
  prd:IProductNew | null=null;
  products:IProductNew[]=[];

  constructor(private prodServ: ProductApiService,
    private prodserv2:ProductServiceService,
    private activatedRoute: ActivatedRoute
      , private router:Router
      , private location: Location) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      this.prdID=Number(paramMap.get("pid"));
    })
    this.prodServ.getProductByID(this.prdID).subscribe((prod)=>{this.prd=prod})

}
update(){
  
}
}
