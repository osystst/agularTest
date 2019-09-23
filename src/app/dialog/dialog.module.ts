import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import {DialogService} from './dialog.service';
import { SuperDialogComponent } from './super-dialog/super-dialog.component';

@NgModule({
  declarations: [DialogComponent, SuperDialogComponent],
  imports: [],
  entryComponents: [DialogComponent]
})
export class DialogModule { }
