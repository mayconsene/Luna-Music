import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../categoria.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent implements OnInit {

  public titulo = 'Nova categoria';
  public categoria: any = {}; // Objeto vazio

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private categoriaSrv: CategoriaService,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    if (this.actRoute.snapshot.params.id) {
      this.titulo = 'Editar categoria';
      const id = this.actRoute.snapshot.params.id;
      try {
        this.categoria = await this.categoriaSrv.obterUm(id).toPromise();
      } catch (erro) {
        console.error(erro);
      }
    }
  }

  async salvar() {
    try {
      if (this.categoria._id) {
        // Atualização de item
        await this.categoriaSrv.atualizar(this.categoria).toPromise();
        this.snackBar.open('Categoria alterado com sucesso', 'Entendi',
          {duration: 3000});
      } else {
        // Novo item
        await this.categoriaSrv.novo(this.categoria).toPromise();
        this.snackBar.open('Categoria criado com sucesso', 'Entendi',
          {duration: 3000});
      }
      this.router.navigate(['categoria']); // Volta para a listagem
    } catch (erro) {
      console.log(erro);
    }
  }

  voltar(form: any) {
    if (form.dirty && !confirm('Há alterações não salvas. Deseja realmente voltar?')) {
      return; // Permanece no formulário
    }
    this.router.navigate(['categoria']); // Volta para a listagem
  }

}
