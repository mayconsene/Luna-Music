import { CategoriaListComponent } from './categoria/categoria-list/categoria-list.component';
import { EstiloListComponent } from './estilo/estilo-list/estilo-list.component';
import { InstrumentoListComponent } from './instrumento/instrumento-list/instrumento-list.component';
import { MusicoListComponent } from './musico/musico-list/musico-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CombustivelListComponent } from './combustivel/combustivel-list/combustivel-list.component';
import { CombustivelFormComponent } from './combustivel/combustivel-form/combustivel-form.component';
import { VeiculoListComponent } from './veiculo/veiculo-list/veiculo-list.component';
import { VeiculoFormComponent } from './veiculo/veiculo-form/veiculo-form.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { EstiloFormComponent } from './estilo/estilo-form/estilo-form.component';
import { InstrumentoFormComponent } from './instrumento/instrumento-form/instrumento-form.component';
import { MusicoFormComponent } from './musico/musico-form/musico-form.component';



const routes: Routes = [
  {
    path: 'categoria',
    component: CategoriaListComponent
  },
  {
    path: 'categoria/novo',
    component: CategoriaFormComponent
  },
  {
    path: 'categoria/:id',
    component: CategoriaFormComponent
  },
  {
    path: 'estilo',
    component: EstiloListComponent
  },
  {
    path: 'estilo/novo',
    component: EstiloFormComponent
  },
  {
    path: 'estilo/:id',
    component: EstiloFormComponent
  },
  {
    path: 'instrumento',
    component: InstrumentoListComponent
  },
  {
    path: 'instrumento/novo',
    component: InstrumentoFormComponent
  },
  {
    path: 'instrumento/:id',
    component: InstrumentoFormComponent
  },
  {
    path: 'musico',
    component: MusicoListComponent
  },
  {
    path: 'musico/novo',
    component: MusicoFormComponent
  },
  {
    path: 'musico/:id',
    component: MusicoFormComponent
  },
  {
    path: 'combustivel',
    component: CombustivelListComponent
  },
  {
    path: 'combustivel/novo',
    component: CombustivelFormComponent
  },
  {
    path: 'combustivel/:id',
    component: CombustivelFormComponent
  },
  {
    path: 'veiculo',
    component: VeiculoListComponent
  },
  {
    path: 'veiculo/novo',
    component: VeiculoFormComponent
  },
  {
    path: 'veiculo/:id',
    component: VeiculoFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
