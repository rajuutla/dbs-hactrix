import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FetchDataService} from '../app/service/fetch-data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { AppComponent } from './app.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRoutingModule} from '../app/app-routing/approuting.module';

@NgModule({
  declarations: [
    AppComponent,
    NewEntryComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,  
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [FetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
