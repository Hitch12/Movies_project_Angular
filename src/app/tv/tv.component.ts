import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { }
  isLoading:boolean = true;

  itemsPage:any[]=[];
  totalPages:number = 0;
  page:number = 0;
  first: number = 1;
  rows: number = 10;
  getPage(pageNum:number){
    this._MoviesService.getPageItems('tv',pageNum).subscribe({
      next:(result)=>{
        this.itemsPage = result.results;
        this.page = result.page;
        this.totalPages = result.total_pages;
        //console.log(result);
        this.isLoading = false;
      }
    })
  }

  onPageChange(event:any) {
    this.first = event.first;
    this.rows = event.rows;
    //console.log(event.page+1)
    this.getPage(event.page+1)
  }

  ngOnInit(): void {
    this.getPage(1)
  }

}
