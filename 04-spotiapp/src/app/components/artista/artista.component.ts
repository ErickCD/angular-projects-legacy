import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {
  artistaInfo : any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {
    this.loading = true;
    let Id:string;

    this.activatedRoute.params.subscribe(params => {
      Id = params['id'];
      
      this.getArtista(Id);
      this.getTopTrack(Id);
    })
  }

  getArtista(id: string){
    this.loading = true;

    this.spotifyService.getArtit(id).subscribe((data: any) => {
      console.log(data);
      this.artistaInfo = data;
      this.loading = false;
    });
  }

  getTopTrack(id:string){
    this.spotifyService.getArtitTopTracks(id)
    .subscribe((topTracks: any) => {
      this.topTracks = topTracks;
      console.log(topTracks);
    })
  }
}
