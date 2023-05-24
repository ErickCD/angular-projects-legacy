import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor(private activstedRouter: ActivatedRoute,
              // tslint:disable-next-line: variable-name
              private _heroeService: HeroesService
    ) {
    // tslint:disable-next-line: deprecation
    this.activstedRouter.params.subscribe( params => {
      // console.log(params['id']);
      this.heroe = this._heroeService.getheroe(params.id);
    });
  }


}
