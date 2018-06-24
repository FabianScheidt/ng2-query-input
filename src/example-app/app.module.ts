import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {QueryService} from '../query-input/query.service';
import {QueryInputModule} from '../query-input/query-input.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    QueryInputModule
  ],
  providers: [QueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
