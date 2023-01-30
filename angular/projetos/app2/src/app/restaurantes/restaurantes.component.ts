import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {

  constructor(private ofertaService: OfertasService) {
  }

  public ofertas: Oferta[] | undefined

  ngOnInit(): void {
    this.ofertaService.getOfertasPorCategoria('restaurante')
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas
      })
  }
}