import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:any
  password:any
  user:any
  constructor(private route:Router){}
  dologin(){
    if(this.password=='123123'){
    this.user={
      "username":this.username,
      "password":this.password

  }
   
   localStorage.setItem('loggedin',JSON.stringify(this.user))
   this.route.navigateByUrl('/user/home')
}

}

}
