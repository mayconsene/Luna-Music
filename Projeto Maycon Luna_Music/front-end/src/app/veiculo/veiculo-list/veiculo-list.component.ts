import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.scss']
})
export class VeiculoListComponent implements OnInit {

  public veiculos: any = []; // Vetor vazio
  public displayedColumns: string[] = ['marca', 'modelo', 'ano', 'cor', 'placa', 'preco_minimo', 'editar', 'excluir'];

  constructor(
    private veiculoSrv: VeiculoService,
    private snackBar: MatSnackBar
  ) { }

  // Função de execução assíncrona
  async ngOnInit() {

    try {
      this.veiculos = await this.veiculoSrv.listar();
    } catch (erro) {
      console.error(erro);
    }
  }

  async excluir(id: string) {

    try {
      if (confirm('Deseja realmente excluir este veículo?')) {
        await this.veiculoSrv.excluir(id).toPromise();
        this.snackBar.open('Veículo excluído com sucesso', 'Entendi',
          { duration: 2000 });
        this.ngOnInit(); // Recarregar a lista
      }
    } catch (erro) {
      console.error(erro);
    }

  }
}
