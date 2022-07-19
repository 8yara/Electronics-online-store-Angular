import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardDirective } from './Directives/product-card.directive';
import { IdpipePipe } from './Pipes/idpipe.pipe';
import { CreditpipePipe } from './Pipes/creditpipe.pipe';
import { CartParentComponent } from './Components/shopping-cart/cart-parent/cart-parent.component';
import { CartChildComponent } from './Components/shopping-cart/cart-child/cart-child.component';
import { ProductDetailsComponent } from './Components/shopping-cart/product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { ErrorComponent } from './Components/error/error.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './Components/admin/admin.component';
import { NewProductComponent } from './Components/admin/new-product/new-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSliderModule } from '@angular/material/slider';
import { UserRegComponent } from './Components/user-reg/user-reg.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { PlainHeaderComponent } from './Components/plain-header/plain-header.component';
import { AllUsersComponent } from './Components/all-users/all-users.component';
import { UpdateProductComponent } from './Components/update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    SideMenuComponent,
    ProductCardDirective,
    IdpipePipe,
    CreditpipePipe,
    CartParentComponent,
    CartChildComponent,
    ProductDetailsComponent,
    HomeComponent,
    AboutUsComponent,
    ContactusComponent,
    ErrorComponent,
    UserLoginComponent,
    AdminComponent,
    NewProductComponent,
    UserRegComponent,
    MainLayoutComponent,
    PlainHeaderComponent,
    AllUsersComponent,
    UpdateProductComponent

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatSliderModule,
    ReactiveFormsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
