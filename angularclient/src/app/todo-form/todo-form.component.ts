import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo-service.service';
import { Todoitem } from '../todoitem';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  item: Todoitem;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private todoService: TodoService) {
    this.item = new Todoitem();
  }

  onSubmit() {
    this.todoService.save(this.item).subscribe(result => this.gotoItemList());
  }

  gotoItemList() {
    this.router.navigate(['/addTodoItem']);
  }
}
