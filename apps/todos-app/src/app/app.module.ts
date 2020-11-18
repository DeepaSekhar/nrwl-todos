import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { AppComponent } from './app.component';
import { UiComponentModule } from '@nrwl-todos/ui-component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, UiComponentModule,],


  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
