import { Component, createNgModuleRef, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { ICategory, IProduct, IProductNew, Store } from 'src/app/ViewModels/store';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart-child',
  templateUrl: './cart-child.component.html',
  styleUrls: ['./cart-child.component.css']
})
export class CartChildComponent implements OnInit, OnChanges {
  Store: Store;
  ClientName: string;
  // ProductList = [] as Array<IProductNew>;
  Categories = [] as Array<ICategory>;
  selecteditems = [] as Array<IProductNew>;
  bought: boolean;
  shoppingcart = [] as Array<IProductNew>;
  orderDate: Date = new Date();
  totalPurchase: number;
  NationalID: string;
  CreditCard: string;
  donedata: boolean;
  private prods:IProductNew[]=[];
  @Input() receivedCatID: number = 0;
  @Output() chosenItemsChanged: EventEmitter<Array<IProductNew>>
  @Output() totalPriceChanged: EventEmitter<number>;

  constructor(
    private prodServ: ProductApiService,
    // private prodServ: ProductServiceService,
    private catServ:CategoryService,
    private _snackBar: MatSnackBar,
    private router:Router) {
    this.totalPriceChanged = new EventEmitter<number>();
    this.chosenItemsChanged = new EventEmitter<Array<IProductNew>>();
    catServ.getAllCategories().subscribe((c=>this.Categories=c))
    
    this.Store = new Store("Tradeline",
      "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png",
      ["Cairo", "Alex"]);
    this.ClientName = "";
    // this.ProductList = [{
    //   ID: 1,
    //   Name: "Apple Watch series 7 ",
    //   Quantity: 3,
    //   Price: 10000,
    //   img: "../../../assets/aaapple.jpg",
    //   CateogryID: 1,
    //   count: 0
    // },
    // {
    //   ID: 9,
    //   Name: "Apple Watch SE ",
    //   Quantity: 1,
    //   Price: 10000,
    //   img: "../../../assets/aaapple.jpg",
    //   CateogryID: 1,
    //   count: 0
    // },
    // {
    //   ID: 6,
    //   Name: "Apple Watch series 6 ",
    //   Quantity: 0,
    //   Price: 10000,
    //   img: "../../../assets/aaapple.jpg",
    //   CateogryID: 1,
    //   count: 0
    // },
    // {
    //   ID: 2,
    //   Name: "IPad Pro",
    //   Quantity: 10,
    //   Price: 25000,
    //   img: "../../../assets/ipad-pro-12-11-select-202104_GEO_SG.jfif",
    //   CateogryID: 2,
    //   count: 0
    // },
    // {
    //   ID: 3,
    //   Name: "IPad series 7",
    //   Quantity: 10,
    //   Price: 25000,
    //   img: "../../../assets/ipad-pro-12-11-select-202104_GEO_SG.jfif",
    //   CateogryID: 2,
    //   count: 0
    // }];

    // this.Categories = [{ id: 1, Name: "Smart Watches" },
    // { id: 2, Name: "IPads" }],
      this.selecteditems = [];
    this.bought = false;
    this.shoppingcart = [];
    this.totalPurchase = 0;
    this.NationalID = "";
    this.donedata = false;
    this.CreditCard = "";
  };

  selected(e: any): void {
    var x = this.Categories.filter(c => c.Name == e.target.value)
    console.log("inside selected"+x[0].id);
    let products=[] as Array<IProductNew>;
    this.prodServ.getAllProducts().subscribe((p)=>{products=p})
    console.log(products)
    this.selecteditems = products.filter(m => m.CateogryID == x[0].id);
    console.log("inside selected")
  }

  // private getProductsByCatID(): void {
  //   this.selecteditems =
  //     (this.receivedCatID != 0) ?
  //       this.ProductList.filter(prd => prd.CateogryID == this.receivedCatID)
  //       : this.ProductList;

  //   //return filterdPrdList;
  // }
  // checkCount(){
  // for (let i = 0; i < this.selecteditems.length; i++) {
  //    if(this.selecteditems[i].ID==this.selecteditems[i+1].ID){
  //      this.selecteditems[i].count++;
  //      this.selecteditems[i+1].count=0;
  //    }
  //   }
  // }
  ngOnInit(): void {
    
    // this.selecteditems=this.prodServ.getByCatID(this.receivedCatID)
    this.prodServ.getAllProducts().subscribe((plist)=>{this.selecteditems=plist})
    
  }
  buyFun(ID: number, count: any, price: number) {
   // // this.ProductList.filter(p=>p.ID==ID)[0].Quantity--;
console.log("id:" +ID)
    // let prods=this.prodServ.getAll();
    this.prodServ.getAllProducts().subscribe((plist)=>{this.prods=plist})
    console.log(this.prods)
    let i = this.prods.filter(p => p.id == ID)[0];
    console.log(i)
    if(this.shoppingcart.find(x=>x.id==i.id)){
       console.log(`found`);
     let ind=this.shoppingcart.findIndex(x=>x.id==i.id);
     let oldCount=Number(this.shoppingcart[ind].count);
     this.shoppingcart[ind].count=oldCount+Number(count)
     console.log(this.shoppingcart[ind].count)
    }
    else{
      i.count=count;
      this.shoppingcart.push(i)
    }
    console.log(this.shoppingcart)
  
    this.totalPurchase += (+price * +count);
    this.totalPriceChanged.emit(this.totalPurchase);
    this.chosenItemsChanged.emit(this.shoppingcart);

  }
  ngOnChanges(): void {
    // this.getProductsByCatID();
    // this.selecteditems=this.prodServ.getByCatID(this.receivedCatID)
    this.prodServ.getProductsByCategoryID(this.receivedCatID).subscribe((plist)=>{this.selecteditems=plist})
    console.log(this.selecteditems)

  }
  openProductDetails(prdID:number)
  {
    this.router.navigate(['/Product',prdID]);
    console.log(prdID)
  }
  deleteProduct(prdID:number){
    this.prodServ.deleteProduct(prdID).subscribe(data=>{})
    this.selecteditems=this.selecteditems.filter((p)=>p.id!=prdID);
    console.log(prdID)
    console.log(this.selecteditems)
    this._snackBar.open('Product Deleted! ',"close");
  }
  UpdateProduct(pid:number){
    console.log(pid)
    this.router.navigate(['/Product/update',pid])
  }

}