import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  newReleases: any[] = [];
  loading: boolean = true;

  constructor(private spotify: SpotifyService) {
    this.loading = true;

    this.spotify.getNewRealeases()
    .subscribe((data: any) => {
      console.log(data);
      
      // this.newReleases = data.albums.items;
      this.newReleases = data;

      this.loading = false;
    });

    console.log('Constructor del Home hecho');
   }
}
