import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
import { ICategory, IProduct, IProductNew } from 'src/app/ViewModels/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-cart-parent',
  templateUrl: './cart-parent.component.html',
  styleUrls: ['./cart-parent.component.css']
})
export class CartParentComponent implements OnInit {
  ClientName: string = "";
  Categories = [] as Array<ICategory>;
  OrderTotalPrice:number=0;
  selectedCatID:number=0;
  doneFlag:boolean=false;
  items=[]as Array<IProductNew>;
  private httpHeaders;
  constructor(private httpClient: HttpClient,
                catServ:CategoryService) {
    this.httpHeaders={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
   
      this.items=[];
    // this.Categories =
    //   [{ id: 1, Name: "Smart Watches" },
    //   { id: 2, Name: "IPads" }];
  catServ.getAllCategories().subscribe((c=>this.Categories=c))

     
  }

  ngOnInit(): void {
  }

  // onTotalPriceChanged(totalPrice:number)
  // {
  //     this.OrderTotalPrice=totalPrice
  // }

  onItemsChanged(selecteditems =[]as Array<IProductNew>)
  {
    this.items=selecteditems;
  } 

  Remove(ID:number,count:any,price:any){
    let ind=this.items.findIndex(p=>p.id==ID)
    this.items.splice(ind,1);
    this.OrderTotalPrice-=(Number(price))*(Number(count));
    console.log(this.OrderTotalPrice)
  }
  Done(){
    
    for(let i=0;i<this.items.length;i++){
      this.OrderTotalPrice+=(Number(this.items[i].Price))*(this.items[i].count);
    }
    this.doneFlag=!this.doneFlag;
    console.log(this.doneFlag)
  }

  // checkCount(){
  //  for (let i = 0; i < this.items.length; i++) {
  //     if(this.items[i].ID==this.items[i+1].ID){
  //       this.items[i].count++;
  //       this.items[i+1].count=0;
  //     }
     
  //  }
    
  // }
}
