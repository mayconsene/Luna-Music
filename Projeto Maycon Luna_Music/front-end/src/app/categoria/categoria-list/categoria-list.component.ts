import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss']
})
export class CategoriaListComponent implements OnInit {

  public categorias: any = []; // Vetor vazio
  public displayedColumns: string[] = ['descricao', 'editar', 'excluir'];
  // Injetando o serviço da categoria
  constructor(
    private categoriaSrv: CategoriaService,
    private snackBar: MatSnackBar
  ) { }

  // Função de execução assíncrona
  async ngOnInit() {
    try {
      this.categorias = await this.categoriaSrv.listar();
    } catch (erro) {
      console.error(erro);
    }
  }

  async excluir(id: string) {

    try {
      if (confirm('Deseja realmente excluir esta categoria?')) {
        await this.categoriaSrv.excluir(id).toPromise();
        this.snackBar.open('Categoria excluído com sucesso', 'Entendi',
          {duration: 2000});
        this.ngOnInit(); // Recarregar a lista
      }
    } catch (erro) {
      console.error(erro);
    }
  }


  /* async exibirDlg() {
    const dialogRef = this.dialog.open(ExcluirDlgComponent, {
      data: 'Deseja realmente excluir este categoria?'
    });
    try {
      const result = await dialogRef.afterClosed().toPromise();
      alert(result);
    } catch (erro) {
      console.log(erro);
    }
  } */

}
