import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]  
})
export class OndeFicaComponent implements OnInit {
  constructor(private route: ActivatedRoute, private ofertaService: OfertasService) {
  }

  public ondeFica: string | undefined

  ngOnInit() {
    this.ofertaService.getOndeFicaPorId(this.route.parent?.snapshot.params['id'] as number)
      .then((resposta: string) => {
        this.ondeFica = resposta
      })
  }
}