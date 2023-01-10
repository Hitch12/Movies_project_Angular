import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { }

  itemsPage:any[]=[];
  getPage(pageNum:number){
    this._MoviesService.getPageItems('tv',pageNum).subscribe({
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
