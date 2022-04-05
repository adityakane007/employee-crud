import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { EditemployeeComponent } from './components/editemployee/editemployee.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ViewemployeeComponent } from './components/viewemployee/viewemployee.component';
import { PipesPipe } from './pipes.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    EmployeeComponent,
    HomeComponent,
    NavComponent,
    ViewemployeeComponent,
    PipesPipe,
    SearchFilterPipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
