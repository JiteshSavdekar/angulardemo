import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parsoninfo',
  templateUrl: './parsoninfo.component.html',
  styleUrls: ['./parsoninfo.component.css']
})
export class ParsoninfoComponent implements OnInit {




  person={
    "Fullname":"Jitesh Savdekar",
    "ResidentialAddress":"Gurudwara Colony, Akurdi, Pune, 411035",
    "LanguagesKnown":"English, Hindi, Marathi",
    "MaritalStatus":"Single",
    "Hobbies":"Travelling & watching Movies",

  };
  constructor() {

  }

  ngOnInit(): void {

  }

}
