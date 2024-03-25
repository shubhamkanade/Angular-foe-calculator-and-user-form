import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';
  item = 20;
  fromparent = "this is from parent";

  updateData(item : string)
  {
    console.warn(item);
  }
}
