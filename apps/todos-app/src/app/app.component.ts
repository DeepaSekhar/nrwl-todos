import { Component } from '@angular/core';
import { Todo } from "./todo"

import { TodosService } from "@nrwl-todos/service-ui"


@Component({
  selector: 'nrwl-todos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'todos-app';
  todoValue: string;
  list: Todo[];



  constructor(private todoService: TodosService) {

  }
  ngOnInit() {
    // this.listTodos();
    // this.list = [];
    // this.todoValue = "";

  }
  addItem() {
    console.log("add item")
    if (this.todoValue !== "") {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,

      };
      this.list.push(newItem)
    }
    this.todoValue = ""
  }
  deleteItem(id: number) {
    console.log("delete is working");
    this.list = this.list.filter(item => item.id !== id);
  }
  listTodos() {
    const todos = this.todoService.getTodoList()

  }

}
