import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todoitem } from './todoitem';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {

  private todoItemUrl: string;

  constructor(private http: HttpClient) {
    this.todoItemUrl = 'http://localhost:8080/todoItem';
  }

  public findAll(): Observable<Todoitem[]> {
    return this.http.get<Todoitem[]>(this.todoItemUrl);
  }

  public save(item: Todoitem) {
    return this.http.post<Todoitem>(this.todoItemUrl, item);
  }
}
