import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

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
  isLoading:boolean = true;

  ngOnInit(): void {
    let {id, media_type} = this._ActivatedRoute.snapshot.params;
    this.mediaType = media_type
    this._MoviesService.getItemDetails(media_type, id).subscribe({
      next:(data)=>this.itemDetails = data
    })
    this._MoviesService.getMoviesForPearson(id).subscribe({
      next:(data)=>{
        this.itemMovies = data.cast.filter((item:any)=>item.poster_path != null)
        console.log(this.itemMovies)
        this.isLoading = false

      }
    })

  }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    nav: true,
    navText:['<i class="fa-solid fa-arrow-left text-black"></i>','<i class="fa-solid fa-arrow-right text-black"></i>'],

    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 4
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    autoplay:true,
    lazyLoad:true
  }


}
