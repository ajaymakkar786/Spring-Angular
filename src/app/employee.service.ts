import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private getAllemps = "/api/employees";
  private getEmployee = "/api/employee";
  private createEmp = "/api/createEmployee";
  private deleteEmp = "/api/deleteEmployee";
  private updateEmp = "/api/updateEmployee";
  private login = "/api/login"
  constructor(private http : HttpClient) { }

  loginUser(user:any):Observable<any>{
    return this.http.post<any>(this.login,user);
  }

  getAllEmployees():Observable<any[]>{
    return this.http.get<any[]>( this.getAllemps);
  }

  createEmployee(emp:any):Observable<any>{
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.http.post<any>(this.createEmp,emp,requestOptions);
  }

  deleteEmployee(id:any):Observable<any>{
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.http.delete<any>(`${this.deleteEmp}/${id}`,requestOptions);
  }

  getEmployeeDetail(id:any):Observable<any>{
    return this.http.get(`${this.getEmployee}/${id}`);
  }

  updateEmployee(emp:any):Observable<any>{
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.http.put<any>(this.updateEmp,emp,requestOptions);
  }
}
