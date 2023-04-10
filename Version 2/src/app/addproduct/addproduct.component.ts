import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  constructor(private userservice:UserService, private route:Router, private fb:FormBuilder, private http:HttpClient){
  }


  addproduct=this.fb.group({
    category:["",Validators.required],
    title:["",Validators.required],
    description:["",Validators.required],
    price:["",Validators.required],
    discountprice:["",Validators.required],
    rating:["",Validators.required],
    image:["",Validators.required],
    th1:["",Validators.required],
    th2:["",Validators.required],
    th3:["",Validators.required],
    th4:["",Validators.required],
    td1:["",Validators.required],
    td2:["",Validators.required],
    td3:["",Validators.required],
    td4:["",Validators.required],
  });

  submitForm(){

    if(this.addproduct.value.category === "gymequipment"){
      this.http.post<any>("http://localhost:3000/gymequipment", this.addproduct.value).subscribe((data) => {
        alert("Product added successfully");
        this.route.navigateByUrl('/admin');
      });
    }
    else if(this.addproduct.value.category === "treadmill"){
      this.http.post<any>("http://localhost:3000/treadmill", this.addproduct.value).subscribe((data) => {
        alert("Product added successfully");
        this.route.navigateByUrl('/admin');
      });
    }
    else if(this.addproduct.value.category === "armexercise"){
      this.http.post<any>("http://localhost:3000/armexercise", this.addproduct.value).subscribe((data) => {
        alert("Product added successfully");
        this.route.navigateByUrl('/admin');
      });
    }
    else if(this.addproduct.value.category === "shoulder"){
      this.http.post<any>("http://localhost:3000/shoulder", this.addproduct.value).subscribe((data) => {
        alert("Product added successfully");
        this.route.navigateByUrl('/admin');
      });
    }


  }
}
