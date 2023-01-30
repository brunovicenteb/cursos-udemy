import { Oferta } from "./shared/oferta.model"
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { URL_API } from "./app.api";

@Injectable()
export class OfertasService {

    constructor(private hppt: HttpClient) {
    }

    public getOfertas(): Promise<Oferta[]> {
        return this.hppt.get(`${URL_API}?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta)
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.hppt.get(`${URL_API}?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => resposta)
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.hppt.get(`${URL_API}?id=${id}`)
            .toPromise()
            .then((resposta: any) => resposta.shift())
    }
}