import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'livros',
    loadChildren: () => import('./livros/livros-module').then(m => m.LivrosModule )
  }
  ,
  {
    path: 'contador',
    loadChildren: () => import('./contador/contador-module').then(m => m.ContadorModule)
  }
  ,
  {
    path: 'estrutura',
    loadChildren: () => import('./estrutura/estrutura-module').then(m=>m.EstruturaModule)
  }
  ,
  {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos-module').then(m=>m.ProdutosModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios-module').then(m=>m.UsuariosModule)
  },
  {
    path: 'sharedmodule',
    loadChildren: () => import('./sharedmodule/sharedmodule-module').then(m=>m.SharedmoduleModule)
  },
  {
    path: 'produtosmodule',
    loadChildren: () => import('./produtosmodule/produtosmodule-module').then(m=>m.ProdutosmoduleModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
