import { Component, EventEmitter, Output } from "@angular/core"
import { Frase } from "../shared/frase.model"
import { FRASES } from "./frases-mock"

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {
  public frases: Frase[] = FRASES
  public instrucao: string = "Traduza a frase:"
  public resposta: string = ""
  public rodada: number = 0
  public rodadaFrase: Frase = FRASES[this.rodada]
  public progresso: number = 0
  public tentativas: number = 3
    @Output() public encerrarJogo: EventEmitter<boolean> = new EventEmitter()

  public atualizaResposta(resposta: Event): void {
    let inputResposta = <HTMLInputElement>(resposta.target)
    this.resposta = inputResposta.value
  }

  public verificarResposta(): void {
    if (this.resposta.toLocaleLowerCase() !== this.rodadaFrase.frasePtBr.toLocaleLowerCase()) {
      this.tentativas--
      if (this.tentativas == -1) {
        this.encerrarJogo.emit(false);
      }
    } else {
      if (this.rodada == FRASES.length) {
        this.encerrarJogo.emit(true);
      } else {

        this.rodada++;
        this.resposta = ""
        this.progresso += (100 / FRASES.length);
        this.rodadaFrase = this.progresso === 100 ? {} as Frase : FRASES[this.rodada]
      }
    }
  }

  private reiniciarJogo(): void {
    this.rodada = 0
    this.tentativas = 3
    this.resposta = ""
    this.progresso = 0
    this.rodadaFrase = this.progresso === 100 ? {} as Frase : FRASES[this.rodada]
  }
}