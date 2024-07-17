import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3> Counter = {{ counter }}</h3>

  <button (click)="increseBy(2)"> +2 </button>
  <button (click)="decreaseBy(3)"> -3 </button>
  <button (click)="reset()"> reset </button> `
})
export class CounterComponent {
  public counter:number = 10;

  increseBy( value:number ):void {
    this.counter += value;
  }

  decreaseBy( value:number ):void {
    this.counter -= value;
  }

  reset():void {
    this.counter = 10;
  }
}
