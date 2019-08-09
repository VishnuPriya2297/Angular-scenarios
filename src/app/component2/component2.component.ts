import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor() { }
  @Output() public childevent1=new EventEmitter;
public message:string;
public  message1:string;
  ngOnInit() {
  }
receivedMessage(event)
{
 // console.log(event);
this.message=event;
this.childevent1.emit(this.message);
//this.message1=this.message;
}
// click()
// {
//   this.childevent1.emit(this.message);
// }

}
