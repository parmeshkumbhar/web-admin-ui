import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "./login.service";
import { User } from '../model/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  role: string;
  errorMessage = "Invalid Credentials";
  invalidLogin: boolean = false;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onLogin() {
    const user = new User();
    user.userName = this.userName;
    user.password = this.password;
    user.role = this.role;
    console.log(this.userName);
    console.log(this.password);
    console.log(this.role);
    this.loginService.isValidUser(user)
      .subscribe(data =>{
        console.log('login service return data : '+data);
        if (data) {
          if (user.role === 'admin') {
            this.router.navigate(['/admin']);
          } else if (user.role === 'help-desk') {
            this.router.navigate(['/help-desk']);
          }  else if (user.role === 'user') {
            this.router.navigate(['/user']);
          }
        }else{
          this.invalidLogin = true;
        }
      },
      error =>{
        console.log(error);
        this.invalidLogin = true;
      })
  }
}
