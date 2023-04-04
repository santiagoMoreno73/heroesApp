import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { BarChartModule } from './bar-chart/bar-char.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, ErrorPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BarChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
