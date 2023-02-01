import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { of } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  public oferta!: Oferta

  constructor(private ofertaService: OfertasService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.ofertaService.getOfertaPorId(this.route.snapshot.params['id'] as number)
      .then((oferta: Oferta) => {
        this.oferta = oferta
      })

    this.route.params.subscribe({
      next: (v) => console.log('next: ', v),
      error: (e) => console.error('next: ',e),
      complete: () => console.info('Complete')
    })
  }
}