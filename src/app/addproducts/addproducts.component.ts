import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent {
  prodId:any;
  prodname:any;
  prodimage:any;
  proddesc:any;
  prodprice:any;
  productobj:any;
  constructor(private service:ProductService,private route:Router){}
  addproduct(){
    this.productobj={
      productId:this.prodId,
      productName:this.prodname,
      productImage:this.prodimage,
      productDesc:this.proddesc,
      productPrice:this.prodprice
    }
    this.service.addproducts(this.productobj);
    this.route.navigateByUrl("/user/products")
  }


}
