import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component'; // Certifique-se de importar o componente CadastrarComponent

const routes: Routes = [
  { path: 'lista', component: ListaComponent },
  { path: 'cadastrar', component: CadastrarComponent } // Adicione a rota "cadastrar" com o componente CadastrarComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
