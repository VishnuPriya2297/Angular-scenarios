import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  constructor() { }
  public message="priya";
  @Output() public childevent=new EventEmitter;
  ngOnInit() {
  }
  onClick()
  {
    this.childevent.emit(this.message);
  }

}
