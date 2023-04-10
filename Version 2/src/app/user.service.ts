import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private client:HttpClient) { }

  homeproduct(){
    return this.client.get("http://localhost:3000/home");
  }

  gymequipment(){
    return this.client.get("http://localhost:3000/gymequipment");
  }

  treadmill(){
    return this.client.get(" http://localhost:3000/treadmill");
  }

  armexercise(){
    return this.client.get(" http://localhost:3000/armexercise");
  }

  shoulder(){
    return this.client.get(" http://localhost:3000/shoulder");
  }

  //delete as admin

  delgymequipment(id:any){
    return this.client.delete("http://localhost:3000/gymequipment/"+id);
  }

  deltreadmill(id:any){
    return this.client.delete(" http://localhost:3000/treadmill/"+id);
  }

  delarmexercise(id:any){
    return this.client.delete(" http://localhost:3000/armexercise/"+id);
  }

  delshoulder(id:any){
    return this.client.delete(" http://localhost:3000/shoulder/"+id);
  }

}
