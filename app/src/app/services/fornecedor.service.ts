import { Injectable } from '@angular/core';
import {Fornecedor} from '../interfaces/Fornecedor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  private fornecedorUrl = "http://localhost:3000/Fornecedor";
  constructor(private http: HttpClient) {}

  //Esta lista virá da API
  Fornecedores:Fornecedor[] = [];

  listar(): Observable <any>{

    return this.http.get<any>(this.fornecedorUrl) as Observable<any>;

  }

  remover(id:string){


    return this.http.delete(`${this.fornecedorUrl}/${id}`)
  }

  httpHeader = {
    headers:{
    "Content-Type":"application/json"
    }
  };

  atualizar(fornecedor:Fornecedor){

    return this.http.put(`${this.fornecedorUrl}/${fornecedor.id}`, fornecedor, this.httpHeader)
    
  }

  

  adicionar(fornecedor:Fornecedor){
  

    return this.http.post(this.fornecedorUrl, fornecedor, this.httpHeader)

  }

  getById(id:string) : Observable<Fornecedor> {

    return this.http.get(`${this.fornecedorUrl}/${id}`) as Observable<Fornecedor>



  }

}
