import { Component, OnInit } from '@angular/core';
import { projectworking} from './projectworking.module';
@Component({
  selector: 'app-projectworking',
  templateUrl: './projectworking.component.html',
  styleUrls: ['./projectworking.component.css']
})
export class ProjectworkingComponent implements OnInit {

  project: projectworking[]=[];

  constructor() { }

  ngOnInit(): void {
    let project1 =new  projectworking ("Hotel Management Design College Project",["Project title :- Hotel Management Design" ,"Job Profile :-Design","Duration :- Total 2 Months ","Tasks Performed :-Front-End :- HTML,CSS,BOOTSTRAP, JAVASCRIPT.","Hotel Management Designing in this webpage.In this project I am developing different types of designsand different types of idea is put in and designs."]);
    let project2=new projectworking("Mjtechsoft webpage College Project",["Project title :- Mjtechsoft webpage","Operating System :- WINDOWS 10","Job Profile :-Developer.","Duration :- Total 1.5 Months","Tasks Performed :-Front-End :- HTML,CSS,BOOTSTRAP, JAVASCRIPT.","This web page developer is display This project has different types of designs and different types of layoutsis created."])
    let project3=new projectworking("Restaurant At Home Angular.",["Project title :- Restaurant","Operating System :- WINDOWS 10.","Job Profile :-Developer, UI.","Duration :- Total 1week","Tasks Performed :-Front-End :- HTML,CSS,BOOTSTRAP, TYPESCTIPT.","Rest Api :- JSON Server Get, Update, Delete, Push.","The Angular 12 project has been done in the and digital learning has been done.This project is based on a front-end developer."])
    let project4=new projectworking("-Send Messenger Python",["Project title :- Send Messenger","Operating System :- WINDOWS 10","Job Profile :- Developer","Duration :- Total 2 week","Tasks Performed :- GUI Tkinter","Rest Api :- Response Send SMS."])
    this.project=[project1 ,project2,project3,project4];
  }

}
