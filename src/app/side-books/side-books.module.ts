import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideBooksComponent} from './side-books.component';
import {DialogComponent} from '../dialog/dialog.component';

@NgModule({
  declarations: [SideBooksComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SideBooksComponent
  ],
  entryComponents: [DialogComponent]
})
export class SideBooksModule { }
