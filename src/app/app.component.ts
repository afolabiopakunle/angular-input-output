import { Component } from '@angular/core';

interface IDataCard {
  staffType: string,
  name: string,
  description: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  submittedCards: IDataCard[] = [];

  addUser(data) {
    this.submittedCards.push({
      staffType: data.staffType,
      name: data.name,
      description: data.description
    })
  }
}
