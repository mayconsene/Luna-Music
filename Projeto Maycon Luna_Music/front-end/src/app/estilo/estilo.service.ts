import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstiloService {

  // Injeção de dependência de uma instância
  // da classe HttpClient
  constructor(private http: HttpClient) { }

  novo(estilo: any) {
    return this.http.post('http://localhost:3000/estilo', estilo);
  }

  listar() {
    return this.http.get('http://localhost:3000/estilo');
  }

  obterUm(id: string) {
    return this.http.get(`http://localhost:3000/estilo/${id}`);
  }

  atualizar(estilo: any) {
    return this.http.patch('http://localhost:3000/estilo', estilo);
  }

  excluir(id: string) {
    return this.http.delete(`http://localhost:3000/estilo/${id}`);
  }

}
