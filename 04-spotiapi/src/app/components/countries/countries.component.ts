import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styles: [
  ]
})
export class CountriesComponent implements OnInit {

  paises: any[] = [];

  constructor(http: HttpClient) {
    http.get('https://restcountries.com/v3.1/lang/spanish')
    .subscribe((resp: any) => {
      this.paises = resp;
      
      console.log(resp);
      console.log('El contructor terminó');
      
    })

   }

  ngOnInit(): void {
  }

}
