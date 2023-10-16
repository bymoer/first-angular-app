import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JsonLoaderComponent } from './json-loader/json-loader.component';
import { ExtraQuestionsComponent } from './extra-questions/extra-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonLoaderComponent,
    ExtraQuestionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
