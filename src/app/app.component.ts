import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-data';

  constructor(public userService:UserService,
    private router:Router){
      if(localStorage.getItem('showNavbar')){
        this.userService.navbarVisible = true;
      }
  }

  logout(){
    console.log("logout")
    this.userService.logout();
    this.router.navigate(['/login'])
  }
}
