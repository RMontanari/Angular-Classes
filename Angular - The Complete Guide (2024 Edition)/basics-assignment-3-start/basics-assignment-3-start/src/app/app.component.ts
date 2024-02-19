import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails = false;
  numberOfClicks = 0;
  buttonClicks = [];

  // onButtonClick() {
  //   this.showDetails = !this.showDetails;
  //   this.buttonClicks.push(++this.numberOfClicks);
  // }

  onButtonClick() {
    this.showDetails = !this.showDetails;
    this.buttonClicks.push(Date());
  }

}