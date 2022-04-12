import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonDialogComponent } from './components/common/common-dialog/common-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonDialogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
