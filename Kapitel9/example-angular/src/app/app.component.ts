import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users = [
    {
      firstName: 'Max',
      lastName: 'Mustermann'
    },
    {
      firstName: 'Moritz',
      lastName: 'Mustermann'
    },
    {
      firstName: 'Peter',
      lastName: 'Mustermann'
    },
    {
      firstName: 'Petra',
      lastName: 'Mustermann'
    }
  ];
}
