import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from '../confirm.validator';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb:FormBuilder, private router:Router, private http:HttpClient){
  }

// validation
  registerForm=this.fb.group({
    name:["",[Validators.required,Validators.pattern("([a-zA-Z ]{2,20})")]],
    email:["",[Validators.required,Validators.pattern("^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$")]],
    phone:["",[Validators.required,Validators.pattern("([6-9])([0-9]{9,9})")]],
    address:["",[Validators.required]],
    password:["",[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$")]],
    cpassword:["",[Validators.required]],
  },
  {
    validator:ConfirmedValidator('password','cpassword')
  });



  submitForm(){
    this.http.get<any>('http://localhost:3000/users').subscribe(res=>{
      const user=res.find((result:any)=>{
        return result.email === this.registerForm.value.email;

      });
      if(user){
        alert("Email already exists");
      }
      else{
        this.http.post<any>("http://localhost:3000/users", this.registerForm.value).subscribe((data) => {
          alert("Form submitted Successfully, Now Login please");
          this.router.navigateByUrl('/login');
        });
      }
    });


  }


}

