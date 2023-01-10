import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService:AuthService, private _Router:Router) { }


  message:string='';
  isLoading:boolean = false;

  //Angular Form
  registerForm:FormGroup = new FormGroup({
    first_name:new FormControl(null, [Validators.minLength(3), Validators.maxLength(8), Validators.required]),
    last_name:new FormControl(null,  [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
    email:new FormControl(null, [Validators.email, Validators.required]),
    age:new FormControl(null, [Validators.min(14), Validators.max(60), Validators.required]),
    password:new FormControl(null , [Validators.minLength(6), Validators.maxLength(14), Validators.required]),
  })

  submitRegisterForm(registerForm:FormGroup){
    this.isLoading = true;
    this._AuthService.signup(registerForm.value).subscribe({
      next:(response)=>{
        this.isLoading = false;
        if(response.message === 'success')
        {
          this.message = response.message;
          this._Router.navigate(['/login'])
        }
        else
        {
          this.message = response.message;
        }
      }
    })
  }

  ngOnInit(): void {
  }

}
