import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees :any=[];

  constructor(private empService:EmployeeService,
    private router :Router,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.fetchEmployees();
  }
  fetchEmployees() {
    this.empService.getAllEmployees().subscribe(data=>{
      console.log("data:::",data)
      this.employees = data;
    });
  }

  editEmployee(employee:any){
    this.router.navigate(['update-employee'],{queryParams:{id:employee.id}})
  }

  async deleteEmployee(id:any){
    console.log("delete called:::",id)
    let res:any = await this.empService.deleteEmployee(id).toPromise();
    console.log("res:::",res);
    this.toastr.success(res);
    this.fetchEmployees();
  }

}
