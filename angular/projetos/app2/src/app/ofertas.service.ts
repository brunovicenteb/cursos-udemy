import { Oferta } from "./shared/oferta.model"
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class OfertasService {

    constructor(private hppt: HttpClient) {
    }

    public getOfertas(): Promise<Oferta[]> {
        return new Promise<Oferta[]>((resolve, reject) => {

            let ofertas = this.hppt.get<Oferta[]>("http://localhost:3000/ofertas")
            resolve( ofertas);
            let deuCerto = true
            if (deuCerto) {
                setTimeout(() => resolve(this.ofertas), 3000);
            } else {
                reject({ codigoErro: 404, mensagemErro: "Servidor não encontrado." })
            }
        })
    }