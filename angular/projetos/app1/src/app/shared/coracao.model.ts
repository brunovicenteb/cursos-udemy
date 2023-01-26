export class Coracao {
    constructor(
        public cheio: boolean,
        public urlCoracaoCheio = "assets/coracao_cheio.png",
        public urlCoracaoVazio = "assets/coracao_vazio.png") {
    }

    public exibeCoracao(): string {
        return this.cheio ? this.urlCoracaoCheio : this.urlCoracaoVazio
    }
}