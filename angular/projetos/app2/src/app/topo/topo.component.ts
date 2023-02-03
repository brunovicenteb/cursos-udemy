import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  private ofertas!: Observable<Oferta[]>
  private subjectPequisa: Subject<string> = new Subject<string>()

  ngOnInit(): void {
    this.ofertas = this.subjectPequisa.pipe(
      debounceTime(1000),
      switchMap((termoDaBusca: string) => {
        console.log('requisição http para api com o termo:', termoDaBusca)
        return this.ofertasService.pesquisaOfertas(termoDaBusca)
      }))

    this.ofertas.subscribe((ofertas: Oferta[]) => {
      console.log(ofertas)
    })
  }

  public pesquisa(termoDaBusca: string): void {
    console.log('keyup caracter:', termoDaBusca)
    this.subjectPequisa.next(termoDaBusca);
  }
}