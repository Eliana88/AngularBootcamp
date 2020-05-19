import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
/*   template: '<h1> Bienvenidos a Angular</h1><h2>Como va?</h2>',
  styles: ['h1 {color: blue', 'h2 {color:red}'] */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-proyecto-angular';
}
