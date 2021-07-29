import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  newEmp:any={};

  constructor(private empService : EmployeeService,
    private toastrService:ToastrService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParamMap.get('id'));
    if(this.route.snapshot.queryParamMap.get('id')){
      var id = this.route.snapshot.queryParamMap.get('id')
     this.empService.getEmployeeDetail(id).subscribe(response=>{
       this.newEmp =  response;
     });
    }
  }

  submitForm(){
    if(this.newEmp.id){
      this.updateEmployee();
    }else{
      this.createEmployee();
    }
  }

  async createEmployee(){
    console.log("data:::::",this.newEmp)
    let res = await this.empService.createEmployee(this.newEmp).toPromise();
    this.toastrService.success(res);
    this.router.navigate(['/employees'])
  }

  async updateEmployee(){
    console.log("data:::::",this.newEmp)
    let res = await this.empService.updateEmployee(this.newEmp).toPromise();
    this.toastrService.success(res);
    this.router.navigate(['/employees'])
  }

  cancel(){
    this.router.navigate(['/employees'])
  }

}
