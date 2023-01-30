import { Oferta } from "./shared/oferta.model"
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class OfertasService {

    constructor(private hppt: HttpClient) {
    }

    public getOfertas(): Promise<Oferta[]> {
        return this.hppt.get("http://localhost:3000/ofertas?destaque=true")
            .toPromise()
            .then((resposta: any) => resposta)
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.hppt.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => resposta)
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.hppt.get(`http://localhost:3000/ofertas?id=${id}`)
            .toPromise()
            .then((resposta: any) => resposta.shift())
    }
}