import { Component, OnInit, Input } from '@angular/core';
import { HeroeService, Heroe} from './../shared/heroe.service';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  @Input() heroe: Heroe;
  constructor(public servicio: HeroeService, public activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this.servicio.getHeroe(params['id']);
    });
   }

  ngOnInit(): void {
  }

}
