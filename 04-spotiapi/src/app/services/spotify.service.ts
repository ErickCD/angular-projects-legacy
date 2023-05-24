import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotify service ready!');
  }

  getQuery(query: string){
    const url: string = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDZ8JzalmUE3LlAGSzDyX_Z784toM75ffdkzRsQtGeq1znvgXNYp2afzVvNjG93t9_D-hU_h8p4Pq-VirNdCgWHVVIYK8256gqyi717bFwvbCPjT1x_'
    });

    return this.http.get(url, {headers})
  }

  getNewRealeases() {
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQD8UzWuzTHYCruvqd0EpVzBYZgJCsgWAELo4SP3IoFQyQYXQ9jiTozwVuDxf_4yS-W52CMgHadT93aiR0POCKiD8s9wEOZlEsY7gZYopeiG160PiTA'
    // });

    return this.getQuery('browse/new-releases')
                .pipe(map(data => {
                  return data['albums'].items;
                }));

    // retunr this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    // .pipe(map(data => {
    //   return data['albums'].items;
    // }));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?query=${termino}&type=artist&locale=es-419%2Ces%3Bq%3D0.9&offset=0&limit=15`) 
                .pipe(map( data => data['artists'].items ));
    
    // this.http.get(`https://api.spotify.com/v1/search?query=${termino}&type=artist&locale=es-419%2Ces%3Bq%3D0.9&offset=0&limit=15`, {headers})
    // .pipe(map( data => data['artists'].items ));
  }

  getArtista(id: string){
    return this.getQuery(`artists/${id}`);
              // .pipe(map(data => data[]))
  }

  getTopTracks(authorId: string){
    return this.getQuery(`artists/${authorId}/top-tracks?country=us`)
              .pipe(map(data => data['tracks']));
  }
}
