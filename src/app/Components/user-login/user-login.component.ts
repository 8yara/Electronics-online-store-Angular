import { Component, OnInit } from '@angular/core';
import { UserauthService } from 'src/app/Services/userauth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  isLogged:boolean;
  name="";
  pass="";
  constructor(private usrAuth:UserauthService,
    private activatedRoute: ActivatedRoute
    , private router:Router) {
    this.isLogged=false
   }

  ngOnInit(): void {
    this.isLogged=false;
  }
  login(){
      this.usrAuth.login(this.name,this.pass)
      console.log("inside login in user-login")
      this.isLogged=true;
      setTimeout(() => {
        this.router.navigate(['/Product']);
      }, 2000);
      
  }
  logout(){
    this.usrAuth.logOut();
    this.isLogged=false;
  }

}
