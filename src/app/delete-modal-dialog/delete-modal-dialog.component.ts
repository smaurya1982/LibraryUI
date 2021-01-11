import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-modal-dialog',
  templateUrl: './delete-modal-dialog.component.html',
  styleUrls: ['./delete-modal-dialog.component.scss']
})
export class DeleteModalDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<DeleteModalDialogComponent>) { }
  ngOnInit() { }

  closeDialog() {
    this.dialogRef.close();
  }

}

