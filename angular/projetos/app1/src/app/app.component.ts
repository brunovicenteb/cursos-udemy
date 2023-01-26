import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public jogoEmAndamento: boolean = true
  public vitoria: boolean = false

  public encerrarJogo(vitoria: boolean): void {
    this.vitoria = vitoria;
    this.jogoEmAndamento = false
  }

  public reiniciarJogo(): void {
    this.jogoEmAndamento = true
    this.vitoria = false
  }
}