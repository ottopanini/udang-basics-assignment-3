import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private displayDetails = false;
  private clicks: string[] = [];

  private onClick() {
    this.displayDetails = !this.displayDetails;
    const now: Date = new Date();
    this.clicks.push('>> ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() + ' switched to '
      + (this.displayDetails ? 'show' : 'hide') + ' details');
  }
}
