import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:any;
  constructor(private service:ProductService ,private route:Router){}
  ngOnInit(){ 
    this.service.viewproducts().subscribe((res)=>{
      this.products=res;
      console.log(this.products)
    })

  }
  edit(product:any){
    product.isEdit=true;
  }
  delete(product:any)
  {
    this.service.deleteproduct(product);
  }
  update(product:any){
    product.isEdit=false;
    this.service.updateproduct(product);
  }
  ticket(product:any){
    this.service.addtoticket(product);
    this.route.navigateByUrl("/user/ticket")
  }

}
