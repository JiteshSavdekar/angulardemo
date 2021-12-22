import { Component, OnInit } from '@angular/core';
import {skill} from './skill.model';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
skilllist:skill[]=[];
  constructor() { }

  ngOnInit(): void {
     let skill1 =new skill("Angular",["Typescript" ,"javasript"]);
     let skill2 =new skill("Java",["java basic"]);
     let skill3 =new skill("Python",["python basic"]);
     let skill4 =new skill("Web technology",["Html","Css","Bootsrap","jqury"]);
    let skill5=new skill("Database",["DBJson ","SQL"]);

    this.skilllist=[skill1,skill2,skill3,skill4,skill5];
  }

}
