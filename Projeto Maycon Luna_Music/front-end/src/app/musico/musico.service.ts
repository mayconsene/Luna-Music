import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicoService {

  // Injeção de dependência de uma instância
  // da classe HttpClient
  constructor(private http: HttpClient) { }

  novo(musico: any) {
    return this.http.post('http://localhost:3000/musico', musico);
  }

  listar() {
    return this.http.get('http://localhost:3000/musico');
  }

  obterUm(id: string) {
    return this.http.get(`http://localhost:3000/musico/${id}`);
  }

  atualizar(musico: any) {
    return this.http.patch('http://localhost:3000/musico', musico);
  }

  excluir(id: string) {
    return this.http.delete(`http://localhost:3000/musico/${id}`);
  }

}
