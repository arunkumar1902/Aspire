import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  newarrivals:any="";
  gymequipment:any="";
  treadmill:any="";
  armexercise:any="";
  shoulder:any="";

  constructor(private service:UserService){}

  ngOnInit(){
    this.service.homeproduct().subscribe(data=>{
      this.newarrivals=data;
    });
    this.service.gymequipment().subscribe(data=>{
      this.gymequipment=data;
    });
    this.service.treadmill().subscribe(data=>{
      this.treadmill=data;
    });
    this.service.armexercise().subscribe(data=>{
      this.armexercise=data;
    });this.service.shoulder().subscribe(data=>{
      this.shoulder=data;
    });
  }

  deleteproduct(id:any){
    this.service.delgymequipment(id).subscribe(data=>{
      alert("Deleted");
    });
    this.service.deltreadmill(id).subscribe(data=>{
      alert("Deleted");
    });
    this.service.delarmexercise(id).subscribe(data=>{
      alert("Deleted");
    });
    this.service.delshoulder(id).subscribe(data=>{
      alert("Deleted");
    });
  }

}
