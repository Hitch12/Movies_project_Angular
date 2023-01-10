import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { }

  itemsPage:any[]=[];
  getPage(pageNum:number){
    this._MoviesService.getPageItems('movie',pageNum).subscribe({
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
