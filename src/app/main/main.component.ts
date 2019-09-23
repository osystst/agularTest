import { Component, OnInit } from '@angular/core';
import {DialogService} from '../dialog/dialog.service';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [DialogService, DialogComponent]
})
export class MainComponent {

  constructor(private dialogService: DialogService) {}

  name = 'Domingo';

  openDialog() {
    this.dialogService.openDialog();
  }
}
