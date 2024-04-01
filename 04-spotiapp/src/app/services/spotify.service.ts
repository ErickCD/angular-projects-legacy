import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http: HttpClient) { }

  getQuery(query: string){
    const headers = new HttpHeaders({
      'Authorization': "Bearer QAd6kKFv1sGaMe00U9nO5iuvAscLS9P2BnpXw8sPJdtD5bGNW5gQjdWe-OPQ9GqAg0grZ2haK1cNsAtCSfvPY5Q4h1DGD4bTZkqjqevutzDg90lhYo"
    });
    
    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url, {headers});
  }


  getNewReleases(){
    return this.getQuery("browse/new-releases?limit=20")
            .pipe(map( (data:any) => data.albums.items));
  }

  getArtits(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15&include_external=audio`)
          .pipe(map((data : any) => data.artists.items ));
  }

  getArtit(id: string){
    return this.getQuery(`artists/${id}`);
  }

  getArtitTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks`)
    .pipe(map((data: any) => {
      return data['tracks']
    }));
  }
}
