import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'icons-migration';
  name = 'Angular ' + VERSION.major;
  demo = '12/23/2020';
}
