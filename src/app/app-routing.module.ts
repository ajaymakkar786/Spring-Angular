import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authguard.service';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'employees',
    component:EmployeeListComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'home',
    component:EmployeeListComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'create-employee',
    component:CreateEmployeeComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'update-employee', 
    component:CreateEmployeeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
