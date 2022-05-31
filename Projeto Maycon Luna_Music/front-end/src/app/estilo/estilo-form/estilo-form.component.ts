import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EstiloService } from '../estilo.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-estilo-form',
  templateUrl: './estilo-form.component.html',
  styleUrls: ['./estilo-form.component.scss']
})
export class EstiloFormComponent implements OnInit {

  public titulo = 'Novo estilo';
  public estilo: any = {}; // Objeto vazio

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private estiloSrv: EstiloService,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    if (this.actRoute.snapshot.params.id) {
      this.titulo = 'Editar estilo';
      const id = this.actRoute.snapshot.params.id;
      try {
        this.estilo = await this.estiloSrv.obterUm(id).toPromise();
      } catch (erro) {
        console.error(erro);
      }
    }
  }

  async salvar() {
    try {
      if (this.estilo._id) {
        // Atualização de item
        await this.estiloSrv.atualizar(this.estilo).toPromise();
        this.snackBar.open('Estilo alterado com sucesso', 'Entendi',
          {duration: 3000});
      } else {
        // Novo item
        await this.estiloSrv.novo(this.estilo).toPromise();
        this.snackBar.open('Estilo criado com sucesso', 'Entendi',
          {duration: 3000});
      }
      this.router.navigate(['estilo']); // Volta para a listagem
    } catch (erro) {
      console.log(erro);
    }
  }

  voltar(form: any) {
    if (form.dirty && !confirm('Há alterações não salvas. Deseja realmente voltar?')) {
      return; // Permanece no formulário
    }
    this.router.navigate(['estilo']); // Volta para a listagem
  }

}
