import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-super-dialog',
  templateUrl: './super-dialog.component.html',
  styleUrls: ['./super-dialog.component.css']
})
export class SuperDialogComponent implements OnInit {

  private dialog;

  constructor() { }

  ngOnInit() {
  }

  setDialog() {

  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
