import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuyComponentComponent } from './buy-component/buy-component.component';
import { BannerComponent } from './banner/banner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FunddetailComponent } from './funddetail/funddetail.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyComponentComponent,
    BannerComponent,
    DashboardComponent,
    FunddetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
