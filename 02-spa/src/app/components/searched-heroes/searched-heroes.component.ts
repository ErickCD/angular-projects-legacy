import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-serched-heroes',
  templateUrl: './searched-heroes.component.html',
  styles: [
  ]
})
export class SearchedHeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private heroeService: HeroesService
  ) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.activatedRouter.params.subscribe(params => {
      this.termino = params.termino;
      this.heroes = this.heroeService.buscarHeroe(params.termino);
      console.log(this.heroes);
    });
  }

  // verHeroe(idx: number): any {
  //   this.router.navigate( ['/heroe', idx] );
  // }

}
