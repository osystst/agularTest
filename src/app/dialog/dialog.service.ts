import {
  Injectable
} from '@angular/core';
import {DialogModule} from './dialog.module';
import {MatDialog} from '@angular/material';
import {DialogComponent} from './dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {

  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
  }
}
