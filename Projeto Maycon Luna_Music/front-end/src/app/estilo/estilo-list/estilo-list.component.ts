import { Component, OnInit } from '@angular/core';
import { EstiloService } from '../estilo.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-estilo-list',
  templateUrl: './estilo-list.component.html',
  styleUrls: ['./estilo-list.component.scss']
})
export class EstiloListComponent implements OnInit {

  public estilos: any = []; // Vetor vazio
  public displayedColumns: string[] = ['descricao', 'editar', 'excluir'];
  // Injetando o serviço do estilo
  constructor(
    private estiloSrv: EstiloService,
    private snackBar: MatSnackBar
  ) { }

  // Função de execução assíncrona
  async ngOnInit() {
    try {
      this.estilos = await this.estiloSrv.listar();
    } catch (erro) {
      console.error(erro);
    }
  }

  async excluir(id: string) {

    try {
      if (confirm('Deseja realmente excluir este estilo?')) {
        await this.estiloSrv.excluir(id).toPromise();
        this.snackBar.open('Estilo excluído com sucesso', 'Entendi',
          {duration: 2000});
        this.ngOnInit(); // Recarregar a lista
      }
    } catch (erro) {
      console.error(erro);
    }
  }


  /* async exibirDlg() {
    const dialogRef = this.dialog.open(ExcluirDlgComponent, {
      data: 'Deseja realmente excluir este estilo?'
    });
    try {
      const result = await dialogRef.afterClosed().toPromise();
      alert(result);
    } catch (erro) {
      console.log(erro);
    }
  } */

}
