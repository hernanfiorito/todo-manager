import { Component, OnInit } from '@angular/core';
import { Todoitem } from '../todoitem';
import { TodoService } from '../todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items: Todoitem[];

  constructor(private todoService: TodoService) {
    this.items = [];
  }

  ngOnInit() {
    this.todoService.findAll().subscribe((data: Todoitem[]) => {
      this.items = data;
    });
  }
}
