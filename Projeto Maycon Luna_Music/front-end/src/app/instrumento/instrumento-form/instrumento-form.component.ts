import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InstrumentoService } from '../instrumento.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-instrumento-form',
  templateUrl: './instrumento-form.component.html',
  styleUrls: ['./instrumento-form.component.scss']
})
export class InstrumentoFormComponent implements OnInit {

  public titulo = 'Novo instrumento';
  public instrumento: any = {}; // Objeto vazio

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private instrumentoSrv: InstrumentoService,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    if (this.actRoute.snapshot.params.id) {
      this.titulo = 'Editar instrumento';
      const id = this.actRoute.snapshot.params.id;
      try {
        this.instrumento = await this.instrumentoSrv.obterUm(id).toPromise();
      } catch (erro) {
        console.error(erro);
      }
    }
  }

  async salvar() {
    try {
      if (this.instrumento._id) {
        // Atualização de item
        await this.instrumentoSrv.atualizar(this.instrumento).toPromise();
        this.snackBar.open('Instrumento alterado com sucesso', 'Entendi',
          {duration: 3000});
      } else {
        // Novo item
        await this.instrumentoSrv.novo(this.instrumento).toPromise();
        this.snackBar.open('Instrumento criado com sucesso', 'Entendi',
          {duration: 3000});
      }
      this.router.navigate(['instrumento']); // Volta para a listagem
    } catch (erro) {
      console.log(erro);
    }
  }

  voltar(form: any) {
    if (form.dirty && !confirm('Há alterações não salvas. Deseja realmente voltar?')) {
      return; // Permanece no formulário
    }
    this.router.navigate(['instrumento']); // Volta para a listagem
  }

}
