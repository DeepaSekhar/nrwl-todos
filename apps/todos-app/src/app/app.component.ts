import { Component } from '@angular/core';
import { Todo } from "./todo"
import { User } from "@nrwl-todos/ui";

@Component({
  selector: 'nrwl-todos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user: User = {
    name: "deep",
    age: 100

  }
  title = 'todos-app';
  todoValue: string;
  list: Todo[];
  ngOnInit() {
    this.list = [];
    this.todoValue = "";
    console.log(this.user)
  }
  addItem() {
    console.log("add item")
    if (this.todoValue !== "") {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };
      this.list.push(newItem)
    }
    this.todoValue = ""
  }
  deleteItem(id: number) {
    console.log("delete is working");
    this.list = this.list.filter(item => item.id !== id);
  }

}
