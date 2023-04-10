import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
// finalProduct: any;
// productList:any;
// searchFor:any;
// constructor(private service:UserService, private route:ActivatedRoute){}

// onclick(){
//   this.service.gymequipment().subscribe(data=>{
//     this.productList=data;


//     this.route.params.subscribe(paramdata=>{
//       this.searchFor=paramdata['check'];

//       for(let product of this.productList){
//         if(product.title==this.searchFor){
//           this.finalProduct=product;
//           break;
//         }
//       }
//     })
//   });

//   this.service.treadmill().subscribe(data=>{
//     this.productList=data;

//     this.route.params.subscribe(paramdata=>{
//       this.searchFor=paramdata['check'];

//       for(let product of this.productList){
//         if(product.title==this.searchFor){
//           this.finalProduct=product;
//           break;
//         }
//       }
//     })
//   });

//   this.service.armexercise().subscribe(data=>{
//     this.productList=data;

//     this.route.params.subscribe(paramdata=>{
//       this.searchFor=paramdata['check'];

//       for(let product of this.productList){
//         if(product.title==this.searchFor){
//           this.finalProduct=product;
//           break;
//         }
//       }
//     })
//   });

//   this.service.shoulder().subscribe(data=>{
//     this.productList=data;

//     this.route.params.subscribe(paramdata=>{
//       this.searchFor=paramdata['check'];

//       for(let product of this.productList){
//         if(product.title==this.searchFor){
//           this.finalProduct=product;
//           break;
//         }
//       }
//     })
//   });
// }


}
