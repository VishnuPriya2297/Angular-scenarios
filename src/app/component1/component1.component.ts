import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './component1.component.html',
   styleUrls:['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }
  public name="";

  ngOnInit() {
  }
 
value='';
onEnter(value:string)
{
  this.value=value;
  console.log(this.value);
}
value2='';


}
