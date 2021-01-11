import { Component, OnInit } from '@angular/core';
import { LABELS } from '../../shared/label_constants';
import { ApiService } from '../../shared/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../shared/alert.service';
import { DeleteDialogService } from '../../shared/delete-dialog.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public mylabels = LABELS;
  public p: any;
  public pro: any = [];
  public query = '';
  public books: any;
  public massage = null;
  public data: any;
  public myRadio: string;
  public radioSelected: any;
  public bookID: string;
  public id: any;
  constructor(private deleteDialogServiceService: DeleteDialogService, private apiService: ApiService,
              private alertService: AlertService, private router: Router, private active: ActivatedRoute) { }

  ngOnInit() {
    this.getAllBook();
    this.id = this.active.snapshot.params.id;
    this.bookID = this.radioSelected;
  }
  getAllBook() {

    this.apiService.httpGetCall('api/Book/GetAllBook').subscribe((data: any) => {
      this.books = data;
    });
  }
  editBook(params) {
    // this.questionid = this.radioSelected;
    this.router.navigate(['/book-edit'], {
      queryParams: { Book_ID: params }
    });
  }

  deleteBook(params) {
    this.deleteDialogServiceService.openConfirmDialog('Are you sure to delete this record?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.apiService.httpDeleteCall('api/Book/DeleteBook/' + params).subscribe((data: any) => {
            this.getAllBook();
            this.alertService.showSuccess(data.MessageText);
          },
            (error: any) => {
              this.alertService.showEorrr(error.error.MessageText);
            }
          );
        }
      });
  }
}
