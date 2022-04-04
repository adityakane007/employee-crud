import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { EditemployeeComponent } from './components/editemployee/editemployee.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { ViewemployeeComponent } from './components/viewemployee/viewemployee.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'addemployee', component: AddemployeeComponent },
  { path: 'viewemployee/:id', component: ViewemployeeComponent },
  { path: 'editemployee/:id', component: EditemployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
