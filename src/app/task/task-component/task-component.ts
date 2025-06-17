import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/models';
import { TaskService } from '../../service/task/task-service';

@Component({
  selector: 'app-task-component',
   standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './task-component.html',
  styleUrl: './task-component.css'
})
export class TaskComponent {
  tasks: any[] = [];
  newTask: Task = {
    
    title: '',
    description: '',
    status: '',
    project: {
      id: 0,
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      user:{
        name: '',
        email: ''
      }
    },
    user: {
      id: 0,
      name: '',
      email: '',
     
    }
  }



  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getAllTasks();

  }

  addTask(): void {
    this.taskService.addTask(this.newTask).subscribe(data => {
      this.tasks.push(data);
      this.newTask = {
       
        title: '',
        description: '',
        status: '',
        project: {
          id: 0,
          title: '',
          description: '',
          startDate: '',
          endDate: '',
          user:{
            id:0,
            name: '',
            email: ''
          }
        },
        user: {
          id: 0,
          name: '',
          email: '',
          }
        }
        });
  }

     getAllTasks() {
  this.taskService.getAllTasks().subscribe(data => {
   
    this.tasks = data;
  });


}
}
