import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component {
  inputTypes: String[] = ['password', 'text'];
  displayStrings: String[] = ['Display', 'Hide'];

  private index: number = 0;
  public inputType: String = this.inputTypes[this.index];
  public displayHide: String = this.displayStrings[this.index];

  public changeInput(): void {
    this.index = (this.index + 1) % 2;
    this.inputType = this.inputTypes[this.index];
    this.displayHide = this.displayStrings[this.index];
  }
}
