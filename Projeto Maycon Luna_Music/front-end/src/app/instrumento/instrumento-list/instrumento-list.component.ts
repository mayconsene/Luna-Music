import { Component, OnInit } from '@angular/core';
import { InstrumentoService } from '../instrumento.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-instrumento-list',
  templateUrl: './instrumento-list.component.html',
  styleUrls: ['./instrumento-list.component.scss']
})
export class InstrumentoListComponent implements OnInit {

  public instrumentos: any = []; // Vetor vazio
  public displayedColumns: string[] = ['descricao', 'editar', 'excluir'];
  // Injetando o serviço do instrumento
  constructor(
    private instrumentoSrv: InstrumentoService,
    private snackBar: MatSnackBar
  ) { }

  // Função de execução assíncrona
  async ngOnInit() {
    try {
      this.instrumentos = await this.instrumentoSrv.listar();
    } catch (erro) {
      console.error(erro);
    }
  }

  async excluir(id: string) {

    try {
      if (confirm('Deseja realmente excluir este instrumento?')) {
        await this.instrumentoSrv.excluir(id).toPromise();
        this.snackBar.open('Instrumento excluído com sucesso', 'Entendi',
          {duration: 2000});
        this.ngOnInit(); // Recarregar a lista
      }
    } catch (erro) {
      console.error(erro);
    }
  }


  /* async exibirDlg() {
    const dialogRef = this.dialog.open(ExcluirDlgComponent, {
      data: 'Deseja realmente excluir este instrumento?'
    });
    try {
      const result = await dialogRef.afterClosed().toPromise();
      alert(result);
    } catch (erro) {
      console.log(erro);
    }
  } */

}
