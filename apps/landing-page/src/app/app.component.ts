import { Component } from '@angular/core';
import { User } from "@nrwl-todos/ui";

@Component({
  selector: 'nrwl-todos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'landing-page';
  user: User = {
    name: "deep",
    age: 100

  }
  ngOnInit() {
    console.log(this.user)
  }

}
