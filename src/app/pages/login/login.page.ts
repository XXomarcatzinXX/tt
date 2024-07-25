import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string | any;
  password: string | any;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.email, this.password).then(() => {
      this.router.navigate(['/']);
    }).catch(error => {
      console.error('Login error:', error);
    });
  }

}
