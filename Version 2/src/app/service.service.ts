import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  // login
  private login:any;

  public islogin(){

    if(this.login==null){
      return false;
    }
    return true;
  }

  public load(data:any){
    this.login = data;
  }

  public getname(){
    if(this.login==null){
      return false;
    }
    return this.login;
  }


}
