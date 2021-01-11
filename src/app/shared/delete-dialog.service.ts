import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { DeleteModalDialogComponent } from 'src/app/delete-modal-dialog/delete-modal-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DeleteDialogService {

  constructor(private matDialog: MatDialog) { }

  openConfirmDialog(msg) {
    return this.matDialog.open(DeleteModalDialogComponent, {
      maxWidth: '400px',
      disableClose: true,
      data: {
        message: msg
      }
    });
  }
}
