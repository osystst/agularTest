import {AfterViewInit, Component, OnDestroy, OnInit, Type} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SuperDialogComponent} from './super-dialog/super-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(private dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);
  }
}
