import { isPromise } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { DiscountOffers,Store,ICategory,IProduct } from 'src/app/ViewModels/store';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  Discount:DiscountOffers;
  Store:Store;
  ClientName:string;
  ProductList=[] as Array<IProduct>;
  Categories=[] as Array<ICategory>;
  selecteditem=[]as Array<IProduct>;
  bought:boolean;
  shoppingcart=[]as Array<IProduct>;
  orderDate: Date = new Date();
  totalPurchase:number;
  NationalID:string;
  CreditCard:string;
  donedata:boolean;

  constructor() {
    this.Discount=DiscountOffers['15%']
    this.Store=new Store("Tradeline",
    "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png",
    ["Cairo","Alex"]);
    this.ClientName="";
    this.ProductList=[{  ID:1,
                          Name:"Apple Watch series 7 ",
                          Quantity:3,
                          Price:10000,
                          img:"../../../assets/aaapple.jpg",
                          CateogryID:1},
                          {  ID:9,
                            Name:"Apple Watch SE ",
                            Quantity:1,
                            Price:10000,
                            img:"../../../assets/aaapple.jpg",
                            CateogryID:1},
                          {
                          ID:6,
                          Name:"Apple Watch series 6 ",
                          Quantity:0,
                          Price:10000,
                          img:"../../../assets/aaapple.jpg",
                          CateogryID:1},
                          {  ID:2,
                            Name:"IPad Pro",
                            Quantity:10,
                            Price:25000,
                            img:"../../../assets/ipad-pro-12-11-select-202104_GEO_SG.jfif",
                            CateogryID:2},
                            {  ID:3,
                              Name:"IPad series 7",
                              Quantity:10,
                              Price:25000,
                              img:"../../../assets/ipad-pro-12-11-select-202104_GEO_SG.jfif",
                              CateogryID:2}];
                          
  this.Categories=[{id:1,Name:"Smart Watches"},
                  {id:2,Name:"IPads"}],
  this.selecteditem=[];
  this.bought=false;
  this.shoppingcart=[];
  this.totalPurchase=0;
  this.NationalID="";
  this.donedata=false;
  this.CreditCard="";            
   };
   
  selected(e:any):void{
    var x=this.Categories.filter(c=>c.Name==e.target.value)
    console.log(x[0].id);
    this.selecteditem=this.ProductList.filter(m=>m.CateogryID==x[0].id);
  }
  toggleCheckOut()
  {
    this.bought=!this.bought;
    this.shoppingcart.forEach(element => {
    this.totalPurchase+=element.Price;
      
     });

  }
  Done()
  {
    this.donedata=!this.donedata;

  }
  buyFun(ID:number){
    this.ProductList.filter(p=>p.ID==ID)[0].Quantity--;
    this.shoppingcart.push(this.ProductList.filter(p=>p.ID==ID)[0]) 
  }

  ngOnInit(): void {
  }

}
