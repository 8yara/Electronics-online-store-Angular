import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './Components/error/error.component';
import { CartChildComponent } from './Components/shopping-cart/cart-child/cart-child.component';
import { ProductDetailsComponent } from './Components/shopping-cart/product-details/product-details.component';
import { CartParentComponent } from './Components/shopping-cart/cart-parent/cart-parent.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { AuthenticationGuard } from './authentication.guard';
import { NewProductComponent } from './Components/admin/new-product/new-product.component';
import { UserRegComponent } from './Components/user-reg/user-reg.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { AllUsersComponent } from './Components/all-users/all-users.component';
import { UpdateProductComponent } from './Components/update-product/update-product.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:"Register",component:UserRegComponent},
  {path:"Login", component:UserLoginComponent},
  {path:'',component:MainLayoutComponent,children:[
      
  {path:"Home", component:HomeComponent},
  {path:"Product", component:CartParentComponent,canActivate:[AuthenticationGuard]},
  {path:'Product/:pid', component:ProductDetailsComponent},
  {path:"Aboutus", component:AboutUsComponent},
  {path:"Contactus", component:ContactusComponent},
  {path:"users",component:AllUsersComponent},
  {path:"Product/update/:pid",component:UpdateProductComponent},

  {path:"admin/insertproduct" ,component:NewProductComponent},

  ]},
  {path:'User',
  loadChildren: () => import('src/app/Components/user/user.module')
                      .then(m => m.UserModule)
},
  {path:"**", component:ErrorComponent},
  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
