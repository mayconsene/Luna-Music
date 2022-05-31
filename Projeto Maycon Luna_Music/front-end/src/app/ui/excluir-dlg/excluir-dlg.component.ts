import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-excluir-dlg',
  templateUrl: './excluir-dlg.component.html',
  styleUrls: ['./excluir-dlg.component.scss']
})
export class ExcluirDlgComponent {

  constructor(
    public dialogRef: MatDialogRef<ExcluirDlgComponent>,
    @Inject(MAT_DIALOG_DATA) public pergunta: string
  ) { }

}
