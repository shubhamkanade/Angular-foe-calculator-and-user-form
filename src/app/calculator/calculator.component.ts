import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  result: string = '';

  appendValue(value: string) {
    this.result += value;
    console.log(this.result)
  }

  squareRoot() {
    this.result = Math.sqrt(eval(this.result)).toString();
  }

  square() {
      this.result = Math.pow(eval(this.result), 2).toString();
  }

  clear() {
    this.result = '';
  }

  calculate() {
    this.result = eval(this.result);
  }
}


