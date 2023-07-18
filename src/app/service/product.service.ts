import { Injectable } from '@angular/core';
import { products } from './products';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productslist:products[]=[
    
    {
      productId:1,
      productName:"Adipurush",
      productImage:"https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/10/2022_10$largeimg_1323794357.jpg",
      productDesc:"indian mythological film",
      productPrice:"Rs.350",
      isEdit:false
    },
    {
      productId:2,
      productName:"Bhola shankar",
      productImage:"https://th.bing.com/th/id/OIP.v198aNUQcB0LX62fVcnwEgHaJQ?pid=ImgDet&rs=1",
      productDesc:"family entertainer",
      productPrice:"Rs.150",
      isEdit:false
    },
    {
      productId:3,
      productName:"Hari Hara Veeramallu",
      productImage:"https://images.news18.com/ibnlive/uploads/2022/09/pawan-kalyan-hari-hara-veeramallu-poster-d-1.jpg",
      productDesc:"historic film",
      productPrice:"Rs.200",
      isEdit:false
    },
    {
      productId:4,
      productName:"BRO",
      productImage:"https://m.media-amazon.com/images/M/MV5BN2M2ZTM2MzMtZGMzMy00Yzc2LWEwNTUtNTI4OGJiNzYwZTUxXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg",
      productDesc:"social drama",
      productPrice:"Rs.200",
      isEdit:false
    },
    {
      productId:5,
      productName:"baby",
      productImage:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-250,h-390/et00363274-przvkmxkzj-portrait.jpg",
      productDesc:"romantic film",
      productPrice:"Rs.150",
      isEdit:false
    },
    {
      productId:6,
      productName:"Kushi",
      productImage:"https://m.media-amazon.com/images/M/MV5BOWJkY2RkM2UtODQzMy00YzUxLThmNjAtMzI2ZmY1ZmJmOThkXkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg",
      productDesc:"love story",
      productPrice:"Rs.200",
      isEdit:false
    },
    {
      productId:7,
      productName:"bhagavath kesari",
      productImage:"https://static.toiimg.com/thumb/imgsize-23456,msid-100837675,width-600,resizemode-4/100837675.jpg",
      productDesc:"Mass film",
      productPrice:"Rs.200",
      isEdit:false
    },
    {
      productId:8,
      productName:"Ustaad Bhagat Singh",
      productImage:"https://m.media-amazon.com/images/M/MV5BY2NmYmJmNDAtYzY5ZC00YmRmLWI2MGQtOGEzZDY2MjNlOWVjXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_FMjpg_UX1000_.jpg",
      productDesc:"action film",
      productPrice:"Rs.250",
      isEdit:false
    },
    {
      productId:9,
      productName:"Miss Shetty Mr Polishetty",
      productImage:"https://m.media-amazon.com/images/M/MV5BNWE5NGZkOWYtODlkZS00Mzk5LWIzZjgtMjk4NzAxNzFmODA3XkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_FMjpg_UX1000_.jpg",
      productDesc:"Comedy Film",
      productPrice:"Rs.200",
      isEdit:false
    },
    {
      productId:10,
      productName:"Tiger Nageswara Rao",
      productImage:"https://m.media-amazon.com/images/M/MV5BNTM0NTA2NDktNjQ3My00MWNjLTkxZDEtMTE0NmNmYWRkMjkyXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg",
      productDesc:"Action Film",
      productPrice:"Rs.200",
      isEdit:false
    },
    {
      productId:11,
      productName:"Bedurulanka",
      productImage:"https://static.toiimg.com/thumb/msid-95831839,width-400,resizemode-4/95831839.jpg",
      productDesc:"comedy film",
      productPrice:"Rs.200",
      isEdit:false
    },
    {
      productId:12,
      productName:"LEO",
      productImage:"https://assets.gadgets360cdn.com/pricee/assets/product/202303/Leo_1678967552.jpg",
      productDesc:"Action Film",
      productPrice:"Rs.200",
      isEdit:false
    }   

  ]
  isEdit:any;

  viewproducts(){
    return of (this.productslist);
  }

  addproducts(p1:any){
    this.productslist.push(p1)
  }

  updateproduct(product:any){
    this.productslist.forEach((vishal,ind)=>{
      if(vishal.productId==product.productId){
        this.productslist.splice(ind,1,product)
      }
    })
  }
  deleteproduct(product:any){
    this.productslist.forEach((vishal,id)=>{
      if(vishal.productId==product.productId){
        this.productslist.splice(id,1)
      }

    }
    
    )
  }

  ticket:products[]=[];
  addtoticket(p1:any){
    this.ticket.push(p1);

  }
  viewticket(){
    return of (this.ticket); 
  }
  deleteticket(product:any){
    this.ticket.forEach((vishal,ind)=>{
      if(vishal.productId==product.productId){
        this.ticket.splice(ind,1)
      }
    }
    )
  }
      

    
  





  constructor() { }
}
