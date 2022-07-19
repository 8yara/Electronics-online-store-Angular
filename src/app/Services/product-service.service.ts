import { Injectable } from '@angular/core';
import { IProductNew } from '../ViewModels/store';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  ProductList = [] as Array<IProductNew>;
  
  constructor() {
    this.ProductList = [{
      id: 1,
      Name: "Apple Watch series 7 ",
      Quantity: 3,
      Price: 10000,
      img: "../../../assets/aaapple.jpg",
      CateogryID: 1,
      count: 0
    },
    {
      id: 9,
      Name: "Apple Watch SE ",
      Quantity: 1,
      Price: 10000,
      img: "../../../assets/aaapple.jpg",
      CateogryID: 1,
      count: 0
    },
    {
      id: 6,
      Name: "Apple Watch series 6 ",
      Quantity: 0,
      Price: 10000,
      img: "../../../assets/aaapple.jpg",
      CateogryID: 1,
      count: 0
    },
    {
      id: 2,
      Name: "IPad Pro",
      Quantity: 10,
      Price: 25000,
      img: "../../../assets/ipad-pro-12-11-select-202104_GEO_SG.jfif",
      CateogryID: 2,
      count: 0
    },
    {
      id: 3,
      Name: "IPad series 7",
      Quantity: 10,
      Price: 25000,
      img: "../../../assets/ipad-pro-12-11-select-202104_GEO_SG.jfif",
      CateogryID: 2,
      count: 0
    }];

    
   }
  getAll():IProductNew[]{
    return this.ProductList;
  }
  getByCatID(catID:number):IProductNew[]{
    return(catID!=0)?
    this.ProductList.filter(p=>p.CateogryID==catID)
    :this.ProductList;
  }
  getByID(prdID: number): IProductNew | null
   {
     let foundPrd=this.ProductList.find(prd=>prd.id==prdID);
     return (foundPrd)? foundPrd : null;
   }
   
   getPrevPrdID(currPrdID: number): number
   {
     let currIndex= this.ProductList.findIndex(prd=>prd.id==currPrdID);
     if (currIndex<=0)
     {
       return 0;
     }
     else
     {
        return this.ProductList[currIndex-1].id;
     }
   }

   getNextPrdID(currPrdID: number): number
   {
     let currIndex= this.ProductList.findIndex(prd=>prd.id==currPrdID);
     if (currIndex==this.ProductList.length-1)
     {
       return 0;
     }
     else
     {
        return this.ProductList[currIndex+1].id;
     }
   }

}
