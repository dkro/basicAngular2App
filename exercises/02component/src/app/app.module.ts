import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Bootstrap} from './vouchers.component';

@NgModule({
  declarations: [
    Bootstrap
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  bootstrap: [Bootstrap]
})
export class AppModule {
}
