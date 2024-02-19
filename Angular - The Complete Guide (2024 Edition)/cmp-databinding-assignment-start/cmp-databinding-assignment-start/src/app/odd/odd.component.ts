import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  template: `<p class="odd">Odd - {{ number }}</p>`,
  styles: ['.odd { color: red; }']
})
export class OddComponent {
  @Input() number: number;
}