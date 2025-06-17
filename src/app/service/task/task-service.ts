import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:1000/tasks';

  constructor(private http: HttpClient) { }


  addTask(task: Task): Observable<Task> {
   
    return this.http.post<Task>(`${this.baseUrl}`, task);

  }

    getAllTasks(): Observable<Task[]> {
      return this.http.get<Task[]>(`${this.baseUrl}`);
    }

}
