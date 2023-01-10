import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { }

  itemsPage:any[]=[];
  getPage(pageNum:number){
    this._MoviesService.getPageItemsPopular('person',pageNum).subscribe({
      next:(result)=>{
        this.itemsPage=result.results;
        //console.log(this.itemsPage)
      }
    })
  }
  ngOnInit(): void {
    this.getPage(1)
  }
}
