import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gestao } from './gestao'

@Injectable({
    providedIn: 'root'
})

export class GestaoService{

    constructor(private httpClient:HttpClient) {}

    private gestaoUrl: string = 'http://localhost:3100/api/gestao';

    retornaTudo (): Observable<Gestao[]>{
        return this.httpClient.get<Gestao[]>(this.gestaoUrl);
    }

    retornoById (id: number): Observable<Gestao>{
        return this.httpClient.get<Gestao>(`${this.gestaoUrl}/${id}`);
    }

    save (contrato: Gestao): Observable<Gestao>{
        if(contrato.id){
            return this.httpClient.put<Gestao>(`${this.gestaoUrl}/${contrato.id}`, contrato);
        }else{
            return this.httpClient.post<Gestao>(`${this.gestaoUrl}`, contrato);
        }
    }

    deleteById(id: number): Observable<any>{
        return this.httpClient.delete<any>(`${this.gestaoUrl}/${id}`);
    }
}