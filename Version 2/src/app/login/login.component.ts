import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  retUrl: any = 'home';
  useremail: any = '';
  userpassword: any = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private slogin: ServiceService,
    private link: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.link.queryParamMap.subscribe((parama) => {
      this.retUrl = parama.get('retUrl');
    });
  }

  // validation
  loginForm = this.fb.group({
    email: ['',[Validators.required, Validators.pattern('^([a-zA-Z0-9-_.]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,10})(.[a-zA-Z]{2,8})?$')]],
    password: ['',[Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$')]]
  });

  login() {
    if (this.loginForm.value.email == 'admin@gmail.com' && this.loginForm.value.password == 'admin@123') {
      alert('Loggedin as admin');
      this.router.navigate(['admin']);
      this.slogin.load(true);
      localStorage.setItem('userdata', 'true');
    }
    else {
      this.http.get<any>('http://localhost:3000/users').subscribe((res) => {

        const user = res.find((result: any) => {
          if (result.email === this.loginForm.value.email) {
            console.log(JSON.stringify(result));
            return result;
          }

        });

        if(user == null){
          alert("No user Found");
        }
        else if (user.password == this.loginForm.value.password) {
          alert('User Login Sucessfull');
          localStorage.setItem('userdata', JSON.stringify(user));
          this.slogin.load(user);

          if (this.retUrl != null) {
            location.replace(this.retUrl);
          }
          else {
            location.replace("home");
          }
        }
        else {
          alert('Email or password is wrong');
        }
      });
    }
  }
}
