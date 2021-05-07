import { Component, OnInit } from '@angular/core';
import { HeroeService, Heroe} from '../shared/heroe.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[];
  constructor( public servicio: HeroeService, public router: Router) { }

  ngOnInit(): void {
    this.heroes = this.servicio.getHeroes();
  }

}
