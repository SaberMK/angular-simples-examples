import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-example',
  templateUrl: './counter-example.component.html',
  styleUrls: ['./counter-example.component.css']
})
export class CounterExampleComponent{
  count = 0;
  increase = () => {
    this.count++;
  }
  decrease = () => {
    this.count--;
  }
}
