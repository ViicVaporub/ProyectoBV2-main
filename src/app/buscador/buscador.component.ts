import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroeService, Heroe} from './../shared/heroe.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  nombre: string;
  index: number;
  heroe: Heroe;
  constructor(private heroeService: HeroeService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.nombre = params['nombre'];
      this.index = heroeService.buscarHeroe(this.nombre);
      console.log(this.index);
      if(this.index !== -1){
        this.heroe = this.heroeService.getHeroe(this.index);
      }
    });
   }

  ngOnInit(): void {
  }

}
