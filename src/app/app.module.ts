import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConvMileToKMPipe } from './conv-mile-to-km.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvMileToKMPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
