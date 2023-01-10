import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-peopledeteils',
  templateUrl: './peopledeteils.component.html',
  styleUrls: ['./peopledeteils.component.css']
})
export class PeopledeteilsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService) { }

  itemDetails:any;
  itemMovies:any;
  mediaType:string = '';

  ngOnInit(): void {
    let {id, media_type} = this._ActivatedRoute.snapshot.params;
    this.mediaType = media_type
    this._MoviesService.getItemDetails(media_type, id).subscribe({
      next:(data)=>this.itemDetails = data
    })
    this._MoviesService.getMoviesForPearson(id).subscribe({
      next:(data)=>{
        this.itemMovies = data.cast.filter((item:any)=>item.poster_path != null).slice(0,4)
        console.log(this.itemMovies)
      }
    })

  }


}
