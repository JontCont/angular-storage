import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageOneComponent } from './@View/page-one/page-one.component';
import { PageTwoComponent } from './@View/page-two/page-two.component';
import { FormControl, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
