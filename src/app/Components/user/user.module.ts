import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'src/app/authentication.guard';

const routes: Routes = [
  {path:'', redirectTo:'/User/Profile', pathMatch: 'full'},
  { path: 'Profile', component: UserProfileComponent},
  { path: 'Edit', component: EditUserProfileComponent}
]

@NgModule({
  declarations: [
    UserProfileComponent,
    EditUserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
