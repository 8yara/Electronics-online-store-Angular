import { Component, OnInit } from '@angular/core';
import { UserauthService } from 'src/app/Services/userauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isLogged=false;
  constructor(private usrAuthServ:UserauthService) { }

  ngOnInit(): void {
    this.usrAuthServ.isUsrLogged().subscribe((loginStatus)=>{
      this.isLogged=loginStatus;
    })
  }

}
