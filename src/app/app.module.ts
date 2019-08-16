import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HlcClrFormModule, HlcClrInputContainerModule } from '@ng-holistic/clr-forms'
import { HlcClrTextModule } from '@ng-holistic/clr-controls'

// CLARITY ICONS DEPENDENCY: THIS REQUIRED ONLY IN STACKBLITZ SEE #700
import '@clr/icons';
import '@clr/icons/shapes/all-shapes';
//


@NgModule({
  imports: [BrowserModule, HttpClientModule, HlcClrTextModule, HlcClrInputContainerModule, HlcClrFormModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
