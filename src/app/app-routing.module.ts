import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [


  {
    path: '',
    loadChildren: () => import('./book/book.module').then(m => m.BookModule)
  },
  // {
  //   path: 'book-add',
  //   loadChildren: () => import('./book/book.module').then(m => m.BookModule)
  // }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
