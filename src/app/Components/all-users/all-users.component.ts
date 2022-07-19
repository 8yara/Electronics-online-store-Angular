import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IUser } from 'src/app/Models/iuser';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  UserList=[] as Array<IUser>;
  seluser:IUser;
    
    constructor(private usrServ:UserService,private _snackBar: MatSnackBar,) { 
    this.usrServ.getAllUsers().subscribe((users)=>{this.UserList=users})
    this.seluser={"id":0,"fullName":"","mobileNumber":"","password":"","address":{"city":"","street":"","zipCode":0},"email":""}

  }

  ngOnInit(): void {
  }
  Delete(id:number){
    this.usrServ.deleteUser(id).subscribe((user)=>{})
    this.UserList=this.UserList.filter((p)=>p.id!=id);

    this._snackBar.open('User Deleted! ',"close");

  }

}
