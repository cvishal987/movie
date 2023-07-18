import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  products:any;
  constructor(private service:ProductService,private route:Router){}
  delete(product:any){
    this.service.deleteticket(product)

  }
  check(){
    this.route.navigateByUrl("/checkout")
  }
  ngOnInit(){
    this.service.viewticket().subscribe((res)=>{
      this.products=res;

    })
  }

}
