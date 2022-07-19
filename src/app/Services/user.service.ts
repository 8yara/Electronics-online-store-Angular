import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../Models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {  private httpHeaders;
  constructor(private httpClient: HttpClient) {
    this.httpHeaders={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }
  getAllUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(`${environment.API_Base_URL}/Users`);
  }
  getUserByID(uID:number):Observable<IUser>{
    return this.httpClient.get<IUser>(`${environment.API_Base_URL}/Users/${uID}`);
  } 
  deleteUser(uID:number):Observable<IUser>{
    return this.httpClient.delete<IUser>(`${environment.API_Base_URL}/Users/${uID}`);
  }
  PostUser(user:IUser):Observable<IUser>{
    return this.httpClient.post<IUser>(`${environment.API_Base_URL}/Users`,JSON.stringify(user),this.httpHeaders)
  }
  putUser(uID:number,newusr:IUser):Observable<IUser>{
    return this.httpClient.put<IUser>(`${environment.API_Base_URL}/Users/${uID}`,JSON.stringify(newusr), this.httpHeaders);
  }



}