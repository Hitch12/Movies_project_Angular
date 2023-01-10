import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendingMovie:any[]=[]
  trendingTV:any[]=[]
  trendingPeople:any[]=[]
  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.getTrending('movie').subscribe({
      next:(result)=>{
        this.trendingMovie=result.results
        //console.log(this.trendingMovie)
      }
    })
    this._MoviesService.getTrending('tv').subscribe({
      next:(result)=>{
        this.trendingTV=result.results
        //console.log(this.trendingTV)
      }
    })
    this._MoviesService.getTrending('person').subscribe({
      next:(result)=>{
        this.trendingPeople=result.results.filter((item:any)=>item.profile_path != null)
        //console.log(this.trendingPeople)
      }
    })
  }

}

