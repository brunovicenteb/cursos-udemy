import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { interval, Observable, Observer, Subscription } from 'rxjs';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta!: Oferta
  private tempoObservableSubscription!: Subscription
  private meuObservableTesteSubscription!: Subscription

  constructor(private ofertaService: OfertasService, private route: ActivatedRoute) {
  }

  ngOnDestroy() {
    this.tempoObservableSubscription?.unsubscribe()
    this.meuObservableTesteSubscription?.unsubscribe()
  }

  ngOnInit() {
    this.ofertaService.getOfertaPorId(this.route.snapshot.params['id'] as number)
      .then((oferta: Oferta) => {
        this.oferta = oferta
      })

    /*
    this.route.params.subscribe({
      next: (v) => console.log('next: ', v),
      error: (e) => console.error('next: ',e),
      complete: () => console.info('Complete')
    })
    */

    let tempo = interval(2000)
    this.tempoObservableSubscription = tempo.subscribe(interval => console.log('Next: ', interval));

    let meuObservableTeste = new Observable((observer: Observer<number>) => {
      observer.next(1)
      observer.next(2)
      observer.complete()
    })

    this.meuObservableTesteSubscription = meuObservableTeste.subscribe({
      next: (resultado: number) => console.log(resultado + 10),
      error: (erro) => console.log(erro),
      complete: () => console.log('Stream de eventos foi finalizada')
    })
  }
}