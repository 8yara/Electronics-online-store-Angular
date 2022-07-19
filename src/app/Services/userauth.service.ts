import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../Models/iuser';
@Injectable({
  providedIn: 'root'
})
export class UserauthService {
private isLoggedSubject:BehaviorSubject<boolean>;
private httpHeaders;
  constructor(private httpClient: HttpClient) { 
    this.isLoggedSubject=new BehaviorSubject<boolean>(false);
    this.httpHeaders={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

  }
  
// login(usrname:string ,password:string){
//   let fakeToken:string ="17d0cb24-60cb-4e5b-8857-6601e5da7427";
//   localStorage.setItem("Token",fakeToken);
//   console.log("login from service")
//   this.isLoggedSubject.next(true);
//  }
private makeRandom(lengthOfCode: number, possible: string) {
  let text = "";
  for (let i = 0; i < lengthOfCode; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
    return text;
}
login(usrname:string ,password:string){
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let fakeToken=this.makeRandom(32,possible);
  console.log(fakeToken)
  localStorage.setItem("Token",fakeToken);
  console.log("is he loged"+this.isLogged)
  console.log("login from service")
  this.isLoggedSubject.next(true);
 }
 logOut(){
   localStorage.removeItem("Token");
   this.isLoggedSubject.next(false);
   console.log("logout")
 }
 isUsrLogged():Observable<boolean>{
   return this.isLoggedSubject.asObservable();

 }
 get isLogged(){
  return (this.gettoken());
 }
 gettoken(){
  return !!localStorage.getItem('Token');
}

}