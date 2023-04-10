import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArmexerciseComponent } from './armexercise/armexercise.component';
import { AuthGuard } from './auth.guard';
import { BuyComponent } from './buy/buy.component';
import { CartComponent } from './cart/cart.component';
import { GymequipmentComponent } from './gymequipment/gymequipment.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { ShoulderComponent } from './shoulder/shoulder.component';
import { TreadmillComponent } from './treadmill/treadmill.component';
import { ProductdetailedComponent } from './productdetailed/productdetailed.component';
import { AdminComponent } from './admin/admin.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'admin',
    component:AdminComponent,
    canActivate:[AdminGuard]
  },
  {
    path:'addproduct',
    component:AddproductComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'product/:check',
    component:ProductdetailedComponent
  },
  {
    path:'cart',
    component:CartComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'buy',
    component:BuyComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'gymequipment',
    component:GymequipmentComponent
  },
  {
    path:'treadmill',
    component:TreadmillComponent
  },
  {
    path:'armexrecise',
    component:ArmexerciseComponent
  },
  {
    path:'shoulder',
    component:ShoulderComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
