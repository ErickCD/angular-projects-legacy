import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  loadin = true;
  error: boolean;
  messageError: string = '';

  constructor(private spotyService: SpotifyService) {
    this.error = false;

    this.spotyService.getNewReleases().subscribe((data: any) => {
      console.log(data);
      this.nuevasCanciones = data;
      this.loadin = false;
    }, (errorService) => {
      this.error = true;
      this.loadin = false;
      console.log(errorService);
      this.messageError = errorService.error.error.message;
    });
  }
}

// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styles: [
//   ]
// })
// export class HomeComponent {
//   paises: any[] = [];

//   constructor(private http: HttpClient){
//     console.log("Constructor de home");

//     this.http.get("https://restcountries.com/v3.1/lang/spanish")
//     .subscribe((data : any) => {
//       this.paises = data;
//     })
//   }
// }
