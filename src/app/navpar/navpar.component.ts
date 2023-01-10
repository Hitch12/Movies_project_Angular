import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navpar',
  templateUrl: './navpar.component.html',
  styleUrls: ['./navpar.component.css']
})
export class NavparComponent implements OnInit {

  constructor(private _AuthService:AuthService) { }
  isLoading:boolean = false;

  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next:()=>{
        if(this._AuthService.userData.getValue() != null)
        {
          this.isLoading = true;
        }
        else
        {
          this.isLoading = false;
        }
      }
    })
  }

  logOut(){
    this._AuthService.sigout()
  }

}
