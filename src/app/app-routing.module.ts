import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component'; 

const routes: Routes = [
  { path: 'lista', component: ListaComponent },
  { path: 'cadastrar', component: CadastrarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
