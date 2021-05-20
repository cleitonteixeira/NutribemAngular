import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';
import { Equipamento } from './equipamento'
import { Unidade } from './unidade';

@Injectable({
    providedIn: 'root'
})

export class EquipamentoService{

    constructor(private httpClient:HttpClient) {}

    private equipamentoUrl: string = 'http://localhost:3000/equipamento';
    private unidadeUrl: string = 'http://localhost:3000/unidade/select';
    private categoriaUrl: string = 'http://localhost:3000/categoria/select';

    retornaUnidades (): Observable<Unidade[]>{
        return this.httpClient.get<Unidade[]>(this.unidadeUrl);
    }
    retornaCategorias (): Observable<Categoria[]>{
        return this.httpClient.get<Categoria[]>(this.categoriaUrl);
    }

    retornaSequencial(id: number):Observable<Number>{
        return this.httpClient.get<Number>(`${this.equipamentoUrl+'/sequencial'}/${id}`);
    }

    retornoById (id: number): Observable<Equipamento>{
        return this.httpClient.get<Equipamento>(`${this.equipamentoUrl}/${id}`);
    }

    save (equipamento: Equipamento): Observable<Equipamento>{
        if(equipamento.idEquipamento){
            return this.httpClient.put<Equipamento>(`${this.equipamentoUrl}/${equipamento.idEquipamento}`, equipamento);
        }else{
            return this.httpClient.post<Equipamento>(`${this.equipamentoUrl+'/cadastro'}`, equipamento);
        }
    }

    deleteById(id: number): Observable<any>{
        return this.httpClient.delete<any>(`${this.equipamentoUrl}/${id}`);
    }
}