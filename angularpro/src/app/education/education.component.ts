import { Component, OnInit } from '@angular/core';
import {edicationdata } from './education.model';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education:edicationdata[]=[];

  constructor() { }

  ngOnInit(): void {
    let education1=new edicationdata(1,"SSC-2012","Maharatra Borad ",63.23);
    let education2=new edicationdata(2,"HSC-2014","Maharatra Borad ",41.23);
    let education3=new edicationdata(3,"BSC-2017","North Mahtarastr University ",61.1);
    let education4=new edicationdata(4,"MCA-2021","Savitribai Phule Pune University",64.40);
    this.education.push(education1);
    this.education.push(education2);
    this.education.push(education3);
    this.education.push(education4);
  }

}
