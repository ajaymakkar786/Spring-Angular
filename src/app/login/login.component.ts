import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any={};
  errorMsg:any;
  returnUrl: any;

  constructor(private userService :UserService,
    private router:Router,
    private route: ActivatedRoute,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.userService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(){
    this.userService.loginUser(this.user).subscribe(
      data=>{
        console.log("Response::::",data.token)
        localStorage.setItem('token', data.token);
        localStorage.setItem('showNavbar', JSON.stringify(true));
        this.userService.showNavbar();
        this.router.navigate(['/employees'])
      },
      error=>{
        console.log("obj::",error)
        this.errorMsg = "Bad Credentials";
      }
    );
    
  }
  

  

}
