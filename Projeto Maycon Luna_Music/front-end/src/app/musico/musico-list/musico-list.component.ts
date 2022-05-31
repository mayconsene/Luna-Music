import { Component, OnInit } from '@angular/core';
import { MusicoService } from '../musico.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-musico-list',
  templateUrl: './musico-list.component.html',
  styleUrls: ['./musico-list.component.scss']
})
export class MusicoListComponent implements OnInit {

  public musicos: any = []; // Vetor vazio
  public displayedColumns: string[] = ['nome', 'email', 'usuario', 'senha', 'data_nascimento',
  'categoria', 'instrumento', 'estilo', 'outras_habilidades', 'telefone', 'celular',
   'outros_contatos', 'foto_perfil', 'observacoes'];

  constructor(
    private musicoSrv: MusicoService,
    private snackBar: MatSnackBar
  ) { }

  // Função de execução assíncrona
  async ngOnInit() {

    try {
      this.musicos = await this.musicoSrv.listar();
    } catch (erro) {
      console.error(erro);
    }
  }

  async excluir(id: string) {

    try {
      if (confirm('Deseja realmente excluir este músico?')) {
        await this.musicoSrv.excluir(id).toPromise();
        this.snackBar.open('Músico excluído com sucesso', 'Entendi',
          { duration: 2000 });
        this.ngOnInit(); // Recarregar a lista
      }
    } catch (erro) {
      console.error(erro);
    }

  }
}
