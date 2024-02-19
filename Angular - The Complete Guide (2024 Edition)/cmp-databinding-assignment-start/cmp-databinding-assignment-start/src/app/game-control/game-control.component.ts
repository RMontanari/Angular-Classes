// game-control.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  template: `
    <button class="btn btn-primary"style="margin-top:1%" (click)="startGame()">Start Game</button>
    <button class="btn btn-danger" style="margin-left: 1%; margin-top:1%" (click)="stopGame()">Stop Game</button>
  `,
  styles: []
})
export class GameControlComponent {
  @Output() numberGenerated = new EventEmitter<number>();
  interval;

  startGame() {
    let counter = 0;
    this.interval = setInterval(() => {
      this.numberGenerated.emit(counter++);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.interval);
  }
}