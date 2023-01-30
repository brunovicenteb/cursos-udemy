import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {

  constructor(private ofertaService: OfertasService) {
  }

  public ofertas!: Oferta[];

  ngOnInit(): void {
    this.ofertaService.getOfertasPorCategira('diversao')
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas
      })
  }
}
