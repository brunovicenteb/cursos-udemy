import { Component } from "@angular/core"
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

  public atualizaResposta(resposta: Event): void {
    let inputResposta = <HTMLInputElement>(resposta.target)
    this.resposta = inputResposta.value
  }

  public verificarResposta(): void {
    if (this.resposta.toLocaleLowerCase() === this.rodadaFrase.frasePtBr.toLocaleLowerCase()) {
      this.rodada++;
      this.resposta = ""
      this.progresso += (100 / FRASES.length);
      this.rodadaFrase = this.progresso === 100 ? {} as Frase : FRASES[this.rodada]
    }
  }
}