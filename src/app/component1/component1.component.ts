import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
  <input [(ngModel)]="name" type="text">
  {{name}}
  <br>
  <input [(ngModel)]="age" type="text">
  {{age}}
  <br>
  <input [(ngModel)]="gender" type="text">
  {{gender}}
  `,
  styleUrls: []
})
export class Component1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public name='';
  public age='';
  public gender='';

}
