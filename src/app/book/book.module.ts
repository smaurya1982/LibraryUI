import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookAddComponent } from './book-add/book-add.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DeleteModalDialogComponent } from 'src/app/delete-modal-dialog/delete-modal-dialog.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookEditComponent } from './book-edit/book-edit.component';


@NgModule({
  declarations: [BookAddComponent, BookListComponent, BookEditComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    CommonModule,

    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatButtonToggleModule
  ],
  entryComponents: [DeleteModalDialogComponent]
})
export class BookModule { }
