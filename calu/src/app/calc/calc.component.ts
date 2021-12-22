import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
 result ? : number=0;
  constructor() { }

  ngOnInit(): void {
  }

  plus(n1 :string,n2 :string):void{
    //alert(parseInt(n1)+parseInt(n2));
    this.result=parseInt(n1)+parseInt(n2);
  }
  minus(n1 :string,n2 :string):void{
    //alert(parseInt(n1)-parseInt(n2));
    this.result=parseInt(n1)-parseInt(n2);
  }
  mul(n1 :string,n2 :string):void{
    //alert(parseInt(n1)*parseInt(n2));
    this.result=parseInt(n1)*parseInt(n2);
  }
  div(n1 :string,n2 :string):void{
    //alert(parseInt(n1)/parseInt(n2));
    this.result=parseInt(n1)/parseInt(n2);
  }
}
