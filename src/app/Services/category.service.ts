import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{ICategory,IProductNew} from '../ViewModels/store'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // private httpHeaders;
  constructor(private httpClient:HttpClient) { 
   }
  getAllCategories():Observable<ICategory[]>{
    return this.httpClient.get<ICategory[]>(`${environment.API_Base_URL}/Categories`);
  }
}
