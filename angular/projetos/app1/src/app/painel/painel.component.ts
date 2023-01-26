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

  public atualizaResposta(resposta: Event): void {
    let inputResposta = <HTMLInputElement>(resposta.target)
    this.resposta = inputResposta.value
    //console.log(this.resposta)
  }

  public verificarResposta(): void {
    console.log("Resposta: ", this.resposta)
  }
}