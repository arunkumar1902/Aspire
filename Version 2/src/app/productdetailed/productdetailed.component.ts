import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productdetailed',
  templateUrl: './productdetailed.component.html',
  styleUrls: ['./productdetailed.component.css']
})
export class ProductdetailedComponent implements OnInit {

  productList:any="";
  searchFor:any="";
  finalProduct:any="";

  constructor(private service:UserService, private route:ActivatedRoute, private http:HttpClient){

  }
  ngOnInit() {

    this.service.gymequipment().subscribe(data=>{
      this.productList=data;


      this.route.params.subscribe(paramdata=>{
        this.searchFor=paramdata['check'];

        for(let product of this.productList){
          if(product.title==this.searchFor){
            this.finalProduct=product;
            break;
          }
        }
      })
    });

    this.service.treadmill().subscribe(data=>{
      this.productList=data;

      this.route.params.subscribe(paramdata=>{
        this.searchFor=paramdata['check'];

        for(let product of this.productList){
          if(product.title==this.searchFor){
            this.finalProduct=product;
            break;
          }
        }
      })
    });

    this.service.armexercise().subscribe(data=>{
      this.productList=data;

      this.route.params.subscribe(paramdata=>{
        this.searchFor=paramdata['check'];

        for(let product of this.productList){
          if(product.title==this.searchFor){
            this.finalProduct=product;
            break;
          }
        }
      })
    });

    this.service.shoulder().subscribe(data=>{
      this.productList=data;

      this.route.params.subscribe(paramdata=>{
        this.searchFor=paramdata['check'];

        for(let product of this.productList){
          if(product.title==this.searchFor){
            this.finalProduct=product;
            break;
          }
        }
      })
    });


    // this.http.post<any>("http://localhost:3000/addtocart",this.productList).subscribe((data)=>{
    // });

  }




}
