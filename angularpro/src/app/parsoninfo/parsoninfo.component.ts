import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parsoninfo',
  templateUrl: './parsoninfo.component.html',
  styleUrls: ['./parsoninfo.component.css']
})
export class ParsoninfoComponent implements OnInit {

  firstname:string="";
  lastname:string="";
  email:string="";
  age:number=0;


  person={
    "firstname":"Jitesh",
    "lastname":"Savdekar",
    "email":"jitusavdekar@1996gmail.com",
    "age":35,
    "date":new Date("1996-5-25")
  };
  constructor() {

  }

  ngOnInit(): void {
    this.firstname="Jitesh";
    this.lastname="Savdekar";
    this.email="jitusavdekar@455gmail.com";
    this.age=35;

  }

}
