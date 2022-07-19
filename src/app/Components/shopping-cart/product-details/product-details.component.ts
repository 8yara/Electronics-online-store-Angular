import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { IProductNew } from 'src/app/ViewModels/store';
import {Location} from '@angular/common'
import { ProductApiService } from 'src/app/Services/product-api.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  isFirst:boolean=false;
  isLast:boolean=false;
  private prdID: number=0;
  prd:IProductNew | null=null;
  producsOfCat:IProductNew[]=[];
  last:number=0;
  first:number=0;

  constructor(private prodServ: ProductApiService,
    private prodserv2:ProductServiceService,
    private activatedRoute: ActivatedRoute
      , private router:Router
      , private location: Location
      ) { 

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      this.prdID=Number(paramMap.get("pid"));
      // this.prd=this.prodServ.getByID(this.prdID);
      this.prodServ.getProductByID(this.prdID).subscribe((prod)=>{this.prd=prod})
      this.prodServ.getProductsByCategoryID(this.prd?.CateogryID).subscribe((prods)=>{this.producsOfCat=prods})
      this.first=this.producsOfCat[0].id;
      this.last=this.producsOfCat[this.producsOfCat.length-1].id;
      if(this.prdID==this.first){
        this.isFirst=true;
      }
      if(this.prdID==this.last){
        this.isLast=true;
      }

      // this.isFirst=(!this.prodServ.getPrevPrdID(this.prdID)?true:false);
      // this.isLast=(!this.prodServ.getNextPrdID(this.prdID)?true:false);
    });
  }
 
  goBack()
  {
    this.location.back();
  }

  prevProduct()
  {let PrevPrdID=this.prodserv2.getPrevPrdID(this.prdID);
    if(PrevPrdID!=0)
    {
      this.router.navigate(['/Product', PrevPrdID]);
      this.isFirst=false;
      this.isLast=false;
    }
    else
      this.isFirst=true;
   
  }

  nextProduct()
  {
    let nextPrdID=this.prodserv2.getNextPrdID(this.prdID);
    if(nextPrdID!=0){
      this.router.navigate(['/Product', nextPrdID]);
      this.isLast=false;
      this.isFirst=false;
    }
    else
      this.isLast=true;
      
  }
  


  // prevProduct()
  // {let PrevPrdID;
  //   this.prodServ.getPrevPrdID(this.prdID,this.producsOfCat).subscribe((prevPID)=>{PrevPrdID=prevPID})
  //   if(PrevPrdID!=0)
  //   {
  //     this.router.navigate(['/Product', PrevPrdID]);
  //     this.isFirst=false;
  //     this.isLast=false;
  //   }
  //   else
  //     this.isFirst=true;
   
  // }

  // nextProduct()
  // {
  // //   let nextPrdID=this.prodServ.getNextPrdID(this.prdID);
  // //   if(nextPrdID!=0){
  // //     this.router.navigate(['/Product', nextPrdID]);
  // //     this.isLast=false;
  // //     this.isFirst=false;
  // //   }
  // //   else
  // //     this.isLast=true;
      
  // }
}
