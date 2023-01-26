import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnChanges {

  public coracoes: Coracao[] = [new Coracao(true), new Coracao(true), new Coracao(true)]

  @Input()
  public tentativas: number = 0

  ngOnChanges() {
    if (this.tentativas === this.coracoes.length)
      return
    let indice = this.coracoes.length - this.tentativas;
    this.coracoes[indice - 1].cheio = false;
  }
}