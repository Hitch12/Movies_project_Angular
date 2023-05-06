import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService, private _Router:Router) { }


  message:string='';
  isLoading:boolean = false;

  //Angular Form
  loginForm:FormGroup = new FormGroup({
    email:new FormControl('a34s5@gmail.com', [Validators.email, Validators.required]),
    password:new FormControl('123456' , [Validators.minLength(6), Validators.maxLength(14), Validators.required]),
  })

  submitLoginForm(loginForm:FormGroup){
    this.isLoading = true;
    this._AuthService.signin(loginForm.value).subscribe({
      next:(response)=>{
        this.isLoading = false;
        if(response.message === 'success')
        {
          localStorage.setItem('userToken',response.token);
          this._AuthService.saveUserData();
          this.message = response.message;
          this._Router.navigate(['/home']);
        }
        else
        {
          this.message = response.message;
        }
      }
    })
  }
  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next:()=>{
        if(this._AuthService.userData.getValue() != null)
        {
          this._Router.navigate(['/home'])
        }

      }
    })
  }



}

