import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  template: `<p class="odd">Even - {{ number }}</p>`,
  styles: ['.odd { color: blue; }']
})
export class EvenComponent {
  @Input() number: number;
}