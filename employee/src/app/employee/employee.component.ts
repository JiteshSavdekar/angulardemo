import { Component, OnInit } from '@angular/core';
import { employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeelist: employee[]=[];
  newemployee:employee=new employee();
  updateIdx:number=-1;
  constructor() { }

  ngOnInit(): void {
    let employee1=new employee(1,"Jitesh","Savdekar",15000,101);
    let employee2=new employee(2,"Jayesh","Savdekar",20000,201);
    let employee3=new employee(3,"Rakesh","Chaudary",10000,256);

    this.employeelist.push(employee1,employee2,employee3);

  } 
  save():void{
   // console.log(this.newemployee);
    this.employeelist.push(this.newemployee);
  }
  Reset(){
    this.newemployee=new employee();
    this.updateIdx=-1;
  }
  edit(idx:number):void{
    let tempemployee=new employee();
    tempemployee.id=this.employeelist[idx].id;
    tempemployee.name=this.employeelist[idx].name;
    tempemployee.lastname=this.employeelist[idx].lastname;
    tempemployee.salary=this.employeelist[idx].salary;
    tempemployee.empid=this.employeelist[idx].empid;
this.newemployee= tempemployee;
this.updateIdx=idx;
  }
  update():void {
    let tempemplo
    this.employeelist [this.updateIdx]=this.newemployee;
    this.updateIdx=-1;
    alert("Uadate Employee");


  }
  delete(idx:number){
    let confirMsg=confirm(" Are you sure Employee Delete" +this.employeelist[idx].name+this.employeelist[idx].lastname+"?");
    //alert(confirMsg);
  if(confirMsg){
    this.employeelist.slice(idx,1);
   }
  }
}
