import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todoList: [
    {
      id: 1;
      value: 'create an app';
    },
    {
      id: 2
      value: 'install Angular CLI'
    },
    {
      id: 3,
      value: 'create new app'
    },
    {
      id: 4
      value: 'serve app'
    },
    {
      id: 5
      value: 'develop app'
    },
    {
      id: 6
      title: 'deploy app'
    },
  ];
  constructor() { }
  getTodoList() {
    return this.todoList
  }
}
