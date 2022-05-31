import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VeiculoService } from '../veiculo.service';
import { MatSnackBar } from '@angular/material';
import { ModeloService } from '../../modelo/modelo.service';
import { CorService } from '../../cor/cor.service';
import { CombustivelService } from '../../combustivel/combustivel.service';

@Component({
  selector: 'app-veiculo-form',
  templateUrl: './veiculo-form.component.html',
  styleUrls: ['./veiculo-form.component.scss']
})
export class VeiculoFormComponent implements OnInit {

  public titulo = 'Novo veículo';
  public veiculo: any = {}; // Objeto vazio

  // Variáveis para conter as listas que preencherão os comboboxes
  public modelos: any = [];
  public cores: any = [];
  public combustiveis: any = [];
  public anoAtual = new Date().getFullYear();

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private veiculoSrv: VeiculoService,
    private snackBar: MatSnackBar,
    private modeloSrv: ModeloService,
    private corSrv: CorService,
    private combustivelSrv: CombustivelService
  ) { }

  async ngOnInit() {
    if (this.actRoute.snapshot.params.id) {
      this.titulo = 'Editar veículo';
      const id = this.actRoute.snapshot.params.id;
      try {
        this.veiculo = await this.veiculoSrv.obterUm(id).toPromise();
      } catch (erro) {
        console.error(erro);
      }
    }
    this.obterListas();
  }

  async obterListas() {
    try {
      this.modelos = await this.modeloSrv.listar().toPromise();
      this.cores = await this.corSrv.listar().toPromise();
      this.combustiveis = await this.combustivelSrv.listar().toPromise();
    } catch (erro) {
      console.error(erro);
    }
  }

  async salvar() {
    try {
      if (this.veiculo._id) {
        // Atualização de item
        await this.veiculoSrv.atualizar(this.veiculo).toPromise();
        this.snackBar.open('Veículo alterado com sucesso', 'Entendi',
          {duration: 3000});
      } else {
        // Novo item
        await this.veiculoSrv.novo(this.veiculo).toPromise();
        this.snackBar.open('Veículo criado com sucesso', 'Entendi',
          {duration: 3000});
      }
      this.router.navigate(['veiculo']); // Volta para a listagem
    } catch (erro) {
      console.log(erro);
    }
  }

  voltar(form: any) {
    if (form.dirty && !confirm('Há alterações não salvas. Deseja realmente voltar?')) {
      return; // Permanece no formulário
    }
    this.router.navigate(['veiculo']); // Volta para a listagem
  }

}
