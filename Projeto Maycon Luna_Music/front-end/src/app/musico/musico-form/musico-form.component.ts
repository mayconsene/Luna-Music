import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MusicoService } from '../musico.service';
import { MatSnackBar } from '@angular/material';
import { CategoriaService } from '../../categoria/categoria.service';
import { EstiloService } from '../../estilo/estilo.service';
import { InstrumentoService } from '../../instrumento/instrumento.service';

@Component({
  selector: 'app-musico-form',
  templateUrl: './musico-form.component.html',
  styleUrls: ['./musico-form.component.scss']
})
export class MusicoFormComponent implements OnInit {

  public titulo = 'Novo músico';
  public musico: any = {}; // Objeto vazio

  // Variáveis para conter as listas que preencherão os comboboxes
  public categorias: any = [];
  public estilos: any = [];
  public instrumentos: any = [];


  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private musicoSrv: MusicoService,
    private snackBar: MatSnackBar,
    private categoriaSrv: CategoriaService,
    private estiloSrv: EstiloService,
    private instrumentoSrv: InstrumentoService
  ) { }

  async ngOnInit() {
    if (this.actRoute.snapshot.params.id) {
      this.titulo = 'Editar músico';
      const id = this.actRoute.snapshot.params.id;
      try {
        this.musico = await this.musicoSrv.obterUm(id).toPromise();
      } catch (erro) {
        console.error(erro);
      }
    }
    this.obterListas();
  }

  async obterListas() {
    try {
      this.categorias = await this.categoriaSrv.listar().toPromise();
      this.estilos = await this.estiloSrv.listar().toPromise();
      this.instrumentos = await this.instrumentoSrv.listar().toPromise();
    } catch (erro) {
      console.error(erro);
    }
  }

  async salvar() {
    try {
      if (this.musico._id) {
        // Atualização de item
        await this.musicoSrv.atualizar(this.musico).toPromise();
        this.snackBar.open('Músico alterado com sucesso', 'Entendi',
          {duration: 3000});
      } else {
        // Novo item
        await this.musicoSrv.novo(this.musico).toPromise();
        this.snackBar.open('Músico criado com sucesso', 'Entendi',
          {duration: 3000});
      }
      this.router.navigate(['musico']); // Volta para a listagem
    } catch (erro) {
      console.log(erro);
    }
  }

  voltar(form: any) {
    if (form.dirty && !confirm('Há alterações não salvas. Deseja realmente voltar?')) {
      return; // Permanece no formulário
    }
    this.router.navigate(['musico']); // Volta para a listagem
  }

}