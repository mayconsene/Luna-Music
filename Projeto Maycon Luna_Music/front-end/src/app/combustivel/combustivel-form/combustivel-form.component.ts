import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CombustivelService } from '../combustivel.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-combustivel-form',
  templateUrl: './combustivel-form.component.html',
  styleUrls: ['./combustivel-form.component.scss']
})
export class CombustivelFormComponent implements OnInit {

  public titulo = 'Novo combustível';
  public combustivel: any = {}; // Objeto vazio

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private combustivelSrv: CombustivelService,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    if (this.actRoute.snapshot.params.id) {
      this.titulo = 'Editar combustível';
      const id = this.actRoute.snapshot.params.id;
      try {
        this.combustivel = await this.combustivelSrv.obterUm(id).toPromise();
      } catch (erro) {
        console.error(erro);
      }
    }
  }

  async salvar() {
    try {
      if (this.combustivel._id) {
        // Atualização de item
        await this.combustivelSrv.atualizar(this.combustivel).toPromise();
        this.snackBar.open('Combustível alterado com sucesso', 'Entendi',
          {duration: 3000});
      } else {
        // Novo item
        await this.combustivelSrv.novo(this.combustivel).toPromise();
        this.snackBar.open('Combustível criado com sucesso', 'Entendi',
          {duration: 3000});
      }
      this.router.navigate(['combustivel']); // Volta para a listagem
    } catch (erro) {
      console.log(erro);
    }
  }

  voltar(form: any) {
    if (form.dirty && !confirm('Há alterações não salvas. Deseja realmente voltar?')) {
      return; // Permanece no formulário
    }
    this.router.navigate(['combustivel']); // Volta para a listagem
  }

}
