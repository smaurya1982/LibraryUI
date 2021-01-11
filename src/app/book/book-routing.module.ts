import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookAddComponent } from '../book/book-add/book-add.component';
import { BookListComponent } from '../book/book-list/book-list.component';
import { BookEditComponent } from '../book/book-edit/book-edit.component';

const routes: Routes = [

  { path: '', component: BookListComponent },
  { path: 'book-add', component: BookAddComponent },
  { path: 'book-edit', component: BookEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
