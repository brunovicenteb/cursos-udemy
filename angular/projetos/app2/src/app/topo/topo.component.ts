import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnDestroy {

  constructor(private ofertasService: OfertasService) { }

  private ofertas!: Observable<Oferta[]>
  private subscription!: Subscription

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }

  public pesquisa(termoDaBusca: string): void {
    this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca)
    this.subscription = this.ofertas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas)
    )
  }
}