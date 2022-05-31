import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstrumentoService {

  // Injeção de dependência de uma instância
  // da classe HttpClient
  constructor(private http: HttpClient) { }

  novo(instrumento: any) {
    return this.http.post('http://localhost:3000/instrumento', instrumento);
  }

  listar() {
    return this.http.get('http://localhost:3000/instrumento');
  }

  obterUm(id: string) {
    return this.http.get(`http://localhost:3000/instrumento/${id}`);
  }

  atualizar(instrumento: any) {
    return this.http.patch('http://localhost:3000/instrumento', instrumento);
  }

  excluir(id: string) {
    return this.http.delete(`http://localhost:3000/instrumento/${id}`);
  }

}
