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

  public atualizaResposta(resposta: Event): void {
    let inputResposta = <HTMLInputElement>(resposta.target)
    console.log(inputResposta.value)
  }
}