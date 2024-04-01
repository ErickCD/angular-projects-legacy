import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {
  artistas: any[] = [];
  loading: boolean = false;

  constructor(private spotifyService : SpotifyService){
    this.loading = false;
  }

  buscar(termino:string){
    if(termino && termino.length <= 2 ){
      this.loading = false;
      return;
    }

    this.loading = true;
    console.log(termino);

    this.spotifyService.getArtits(termino).subscribe((data: any) => {
      console.log(data);
      this.artistas = data;
      this.loading = false;
    });
  }
}
