import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { HeroesService } from '../../../servicios/heroes.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino: string){
    this.router.navigate(['/searchedHeroes', termino]);
  }

}
