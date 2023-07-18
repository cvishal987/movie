import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trendingmovies',
  templateUrl: './trendingmovies.component.html',
  styleUrls: ['./trendingmovies.component.css']
})
export class TrendingmoviesComponent {
  products:any;
constructor(private service:ProductService,private route:Router){}
ngOnInit(){
  this.service.viewproducts().subscribe((res)=>{
    this.products=res;
    
  })

}
editcontent(product:any){
  product.Edit=true;
}   
  delete(product:any)
  {
    this.service.deleteproduct(product);
  
}
update(product:any){
  product.Edit=false;
  this.service.updateproduct(product);
}
ticket(product:any){
  this.service.addtoticket(product);
  this.route.navigateByUrl("/user/ticket")
  
}


   
}


