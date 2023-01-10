import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-media-detils',
  templateUrl: './media-detils.component.html',
  styleUrls: ['./media-detils.component.css']
})
export class MediaDetilsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService) { }

  itemDetails:any;
  itemSimilar:any;
  mediaType:string = '';
  mediaCrew:any;

  ngOnInit(): void {
    let {id, media_type} = this._ActivatedRoute.snapshot.params;
    this.mediaType = media_type
    this._MoviesService.getItemDetails(media_type, id).subscribe({
      next:(data)=>{
        this.itemDetails = data
        //console.log(this.itemDetails)
      }
    })

    this._MoviesService.getItemSimilar(media_type, id).subscribe({
      next:(data)=>this.itemSimilar = data.results.slice(0,4)
    })

    this._MoviesService.getItemCrew(media_type, id).subscribe({
      next:(data)=>{
        this.mediaCrew = data.cast.slice(0,6).filter((item:any)=>item.profile_path != null)
        console.log(this.mediaCrew)

      }
    })
  }
  getSimilar(id:string, media_type:string){
    this._MoviesService.getItemDetails(media_type, id).subscribe({
      next:(data)=>this.itemDetails = data
    })
    this._MoviesService.getItemSimilar(media_type, id).subscribe({
      next:(data)=>this.itemSimilar = data.results.slice(0,4)
    })
  }

}
