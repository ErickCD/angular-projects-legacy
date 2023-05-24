import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent{
  artists: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { }
  
  search(termino: string = "") {
    if(termino == "" || termino == null) {
      this.loading = false;
      this.artists = [];
      
      return;
    }

    this.loading = true;
    
    this.spotify.getArtistas(termino)
                .subscribe((data: any) => {
                  // console.log(data);
                  this.artists = data;
                  this.loading = false;
                });

    // console.log(termino);
  }
}
