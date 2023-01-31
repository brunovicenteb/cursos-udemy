import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ofertaService: OfertasService) {
  }

  public comoUsar: string | undefined

  ngOnInit() {
    this.ofertaService.getComoUsarOfertaPorId(this.route.parent?.snapshot.params['id'] as number)
      .then((resposta: string) => {
        this.comoUsar = resposta
      })
  }
}