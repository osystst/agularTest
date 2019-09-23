import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MainComponent} from './main/main.component';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from './dialog/dialog.module';
import {RouterModule, Routes} from '@angular/router';
import {SideBooksComponent} from './side-books/side-books.component';
import {SideBooksModule} from './side-books/side-books.module';
import {AppComponent} from './app.component';
import {MainModule} from './main/main.module';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {SectionComponent} from './section/section.component';
import {TimeDisplayComponent} from './section/time-display/time-display.component';
import {ButtonsComponent} from './section/buttons/buttons.component';
import {LayoutModule} from './layout/layout.module';

const appRoutes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'side-books', component: SideBooksComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SectionComponent,
    TimeDisplayComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    DialogModule,
    MainModule,
    SideBooksModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes,
      {
        // enableTracing: true
      }),
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {
}
