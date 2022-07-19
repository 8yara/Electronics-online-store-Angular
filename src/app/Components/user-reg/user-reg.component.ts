import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/Models/iuser';
import { UserauthService } from 'src/app/Services/userauth.service';
import { passwordMatchValidator } from 'src/app/CustomValidators/passwordMatch.validator';
import { passwordUsrnameMatchValidator } from 'src/app/CustomValidators/passwordUsrnameMatch.validator';
import { forbiddenNameValidator } from 'src/app/CustomValidators/forbiddenName.validator';
import { UserService } from 'src/app/Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {
registerFormGroup:FormGroup;

  constructor(private fb:FormBuilder,
            private usrSer:UserService,private activatedRoute: ActivatedRoute
            , private router:Router) {
    this.registerFormGroup=fb.group({
      fullName: ['',[Validators.required, Validators.minLength(3),forbiddenNameValidator(/usr/)]],
      email:  ['',[Validators.required]],
      mobileNumbers:  fb.array([""],Validators.maxLength(11)),
      address: fb.group({
        city: [''],
        zipCode:  [0],
        street:  [''],
      }),
      password:  ['',[Validators.required]],
      confirmPassword:  ['',[Validators.required]],
      DeleviryOptions:[false],
      DeleviryOptionsExp:['']
    }, { validator: passwordMatchValidator,passwordUsrnameMatchValidator})
   }

  ngOnInit(): void {
  }
  register(){
    let userModel: IUser= this.registerFormGroup.value as IUser;
    this.usrSer.PostUser(userModel).subscribe((data)=>{})
    setTimeout(() => {
      this.router.navigate(['/users']);
    }, 1000);
  
  }

  get fullName()
  {
    return this.registerFormGroup.get('fullName');
  }
  get email()
  {
    return this.registerFormGroup.get('email');
  }
  get password()
  {
    return this.registerFormGroup.get('password');
  }
  get mobileNumbers()
  {
    const mobileNoArr: FormArray= this.registerFormGroup.get('mobileNumbers') as FormArray;
     return mobileNoArr;
  }
  get DeleviryOptions()
  {
    return this.registerFormGroup.get('DeleviryOptions');
  }
  updateValidation()
  {
    if (this.DeleviryOptions?.value=="1")
    {
      this.registerFormGroup.get('DeleviryOptionsExp')?.addValidators([Validators.required]);
    }
    else
    {
      this.registerFormGroup.get('DeleviryOptionsExp')?.clearValidators();
    }
    this.registerFormGroup.get('DeleviryOptionsExp')?.updateValueAndValidity()

  }
  addMobileNoInput()
  {
    const mobileNoArr=this.registerFormGroup.get('mobileNumbers') as FormArray;
    mobileNoArr.push(new FormControl(''));
  }
  RemoveMobileNoInput()
  {
    const mobileNoArr=this.registerFormGroup.get('mobileNumbers') as FormArray;
    if(mobileNoArr.length>1){
      mobileNoArr.removeAt(mobileNoArr.length-1)
    }
    
  }
}



