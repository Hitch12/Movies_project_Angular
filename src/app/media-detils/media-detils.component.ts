import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-media-detils',
  templateUrl: './media-detils.component.html',
  styleUrls: ['./media-detils.component.css']
})
export class MediaDetilsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService) { }

  itemDetails:any;
  itemSimilar:any[]=[];
  mediaType:string = '';
  mediaCrew:any;
  isLoading:boolean = true;

  ngOnInit(): void {
    let {id, media_type} = this._ActivatedRoute.snapshot.params;
    this.mediaType = media_type
    this._MoviesService.getItemDetails(media_type, id).subscribe({
      next:(data)=>{
        this.itemDetails = data
        this.isLoading = false
        //console.log(this.itemDetails)
      }
    })

    this._MoviesService.getItemSimilar(media_type, id).subscribe({
      next:(data)=>{
        this.itemSimilar = data.results.filter((item:any)=>item.poster_path != null)
        //console.log(this.itemSimilar)
      }
    })

    this._MoviesService.getItemCrew(media_type, id).subscribe({
      next:(data)=>{
        this.mediaCrew = data.cast.slice(0,6).filter((item:any)=>item.profile_path != null)
        //console.log(this.mediaCrew)

      }
    })
  }
  getSimilar(id:string, media_type:string){
    this._MoviesService.getItemDetails(media_type, id).subscribe({
      next:(data)=>this.itemDetails = data
    })
    this._MoviesService.getItemSimilar(media_type, id).subscribe({
      next:(data)=>this.itemSimilar = data.results
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
        items: 2
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
