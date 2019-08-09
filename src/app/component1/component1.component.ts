import { Component, OnInit, ViewChild ,AfterViewInit} from '@angular/core';
import { Component2Component } from '../component2/component2.component';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 /* @ViewChild(Component2Component,{static:true}) child2;
  public text:string;

  ngAfterViewInit()
  {

this.text=this.child2.message;
  }*/
  public message;
 /* receivedMessage(event)
{
  console.log(event);
this.message=event;
}*/
}
