import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicHighlight } from './basicHighlight/basic-highlight.directive';
import { BetterHighlight } from './betterHighlight/better-highlight.directive';
import { unlessDirective } from './unless/unless.directive';


@NgModule({
  declarations: [
    AppComponent,
    BasicHighlight,
    BetterHighlight,
    unlessDirective

  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
