import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProductNew } from '../ViewModels/store';
import { pipe } from 'rxjs';
import { fromEvent } from 'rxjs';
import { findIndex } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
   private httpHeaders;
  constructor(private httpClient: HttpClient) {
    this.httpHeaders={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
   }
  getAllProducts(): Observable<IProductNew[]> {
    return this.httpClient.get<IProductNew[]>(`${environment.API_Base_URL}/Products`);
  }
  getProductsByCategoryID(catID:number):Observable<IProductNew[]>{
    return this.httpClient.get<IProductNew[]>(`${environment.API_Base_URL}/Products?CateogryID=${catID}`);
  }
  getProductByID(pID:number):Observable<IProductNew>{
    return this.httpClient.get<IProductNew>(`${environment.API_Base_URL}/Products/${pID}`);
  } 
  addProduct(product:IProductNew):Observable<IProductNew>{
    return this.httpClient.post<IProductNew>(`${environment.API_Base_URL}/Products`,JSON.stringify(product), this.httpHeaders);
  }

  putProduct(pID:number,newPrd:IProductNew):Observable<IProductNew>{
    return this.httpClient.put<IProductNew>(`${environment.API_Base_URL}/Products/${pID}`,JSON.stringify(newPrd), this.httpHeaders);
  }
  deleteProduct(pID:number):Observable<IProductNew>{
    return this.httpClient.delete<IProductNew>(`${environment.API_Base_URL}/Products/${pID}`);
  }

  getPrevPrdID(currPrdID: number,list:IProductNew[])
   {    // let currIndex= this.ProductList.findIndex(prd=>prd.ID==currPrdID);
     console.log("inside function in service")
     let currIndex= list.findIndex(prd=>prd.id==currPrdID);
     console.log( list)
    //  console.log(currIndex)
     console.log("list[0]"+list[0])
    //this.getAllProducts().pipe(findIndex((prd=>(prd.ID)==currPrdID))

     if (currIndex<=0)
     {
      return new Observable(subscriber => {
        subscriber.next(1)})
        //return 0
     }
     else
     {
       let x =list[currIndex-1].id
       return  new Observable(subscriber => {
        subscriber.next(x)})
        // return list[currIndex-1].ID;
     }
   }

   getNextPrdID(currPrdID: number,list:IProductNew[]): number
   {
     let currIndex= list.findIndex(prd=>prd.id==currPrdID);
     if (currIndex==list.length-1)
     {
       return 0;
     }
     else
     {
        return list[currIndex+1].id;
     }
   } 
}

