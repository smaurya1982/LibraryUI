import { Component, OnInit } from '@angular/core';
import { LABELS } from '../../shared/label_constants';
import { ApiService } from '../../shared/api.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { AlertService } from '../../shared/alert.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  public mylabels = LABELS;
  BookEditForm: FormGroup;
  bookID: any;
  data: any;

  constructor(private fb: FormBuilder, private apiService: ApiService,
              private router: Router, private alertService: AlertService, private http: HttpClient, private active: ActivatedRoute) {
    this.BookEditForm = this.fb.group({
      Book_Name: ['', Validators.required],
      Author: ['', Validators.required],
      Options: ['', Validators.required],

    });
  }

  get f() {
    return this.BookEditForm.controls;
  }


  ngOnInit(): void {
    this.active.queryParams.pipe(filter(params => params.Book_ID))
      .subscribe(params => {
        console.log('subscribe', params);
        this.bookID = params.Book_ID;
        this.getBookDetails(this.bookID);
      });
  }


  getBookDetails(bookID) {
    this.apiService.httpGetCall('api/Book/GetBook/' + bookID).subscribe((data) => {
      this.data = data;
      this.BookEditForm.controls.Book_Name.setValue(this.data.Book_Name);
      this.BookEditForm.controls.Author.setValue(this.data.Author);
      this.BookEditForm.controls.Options.patchValue(this.data.Options);

    });
  }

  cancelLink() {
    this.router.navigate(['/book-list']);
  }

  SubmitForm() {
    const savedata = {
      Book_ID: this.bookID,
      Book_Name: this.BookEditForm.value.Book_Name,
      Author: this.BookEditForm.value.Author,
      Options: this.BookEditForm.value.Options,

    };
    this.apiService.httpPutCall('api/Book/UpdateBook', savedata).subscribe((data: any) => {
      this.alertService.showSuccess(data.MessageText);
      this.router.navigate(['']);
    },
      (error: any) => {

        this.alertService.showEorrr(error.error.MessageErrorText);

      }

    );
  }
}
