import { Component, OnInit } from '@angular/core';
import { LABELS } from '../../shared/label_constants';
import { ApiService } from '../../shared/api.service';
import { Router } from '@angular/router';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { AlertService } from '../../shared/alert.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {

  public mylabels = LABELS;
  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router,
              private alertService: AlertService) {
    this.bookForm = this.fb.group({
      Book_Name: ['', Validators.required],
      Author: ['', Validators.required],
      Options: [false],

    });
  }
  get f() { return this.bookForm.controls; }

  ngOnInit(): void {

  }

  SubmitForm() {

    const savedata = {
      Book_Name: this.bookForm.value.Book_Name,
      Author: this.bookForm.value.Author,
      Options: this.bookForm.value.Options

    };
    console.log(savedata);
    this.apiService.httpPostCall('api/Book/CreateBook', savedata).subscribe((data: any) => {

      this.alertService.showSuccess(data.MessageText);
      this.router.navigate(['']);
    },
      (error: any) => {
        this.alertService.showEorrr(error.error.MessageErrorText);
      }
    );
  }
}
