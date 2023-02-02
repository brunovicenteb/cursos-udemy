import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable, Observer } from 'rxjs';


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

    /*
    this.route.params.subscribe({
      next: (v) => console.log('next: ', v),
      error: (e) => console.error('next: ',e),
      complete: () => console.info('Complete')
    })
    /*

    /*
    let tempo = interval(2000)
    tempo.subscribe(interval => console.log('Next: ', interval));
    */

    let meuObservableTeste = new Observable((observer: Observer<number>) => {
      observer.next(1)
      observer.next(3)
      observer.complete()
      observer.next(3)
    })

    meuObservableTeste.subscribe({
      next: (resultado: number) => console.log(resultado + 10),
      error: (erro) => console.log(erro),
      complete: () => console.log('Stream de eventos foi finalizada')
    })
  }
}