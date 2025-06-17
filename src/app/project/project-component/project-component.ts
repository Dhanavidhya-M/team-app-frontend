import { Component } from '@angular/core';
import { Project } from '../../models/models';
import { ProjectService } from '../../service/project/project-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-project-component',
   standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './project-component.html',
  styleUrl: './project-component.css'
})

export class ProjectComponent {

   ngOnInit(): void {
      this.getAllProjects();
    }
  projects:Project[]=[];
    newProject: Project = {
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      user: 
      {
        id:0,
        name: '',
        email: ''
      }
    }
  
  
    constructor(private projectService: ProjectService) { }
  
   
  
    addProject(): void {
      this.projectService.addProject(this.newProject).subscribe(data => {
        this.projects.push(data);
        this.newProject = {
          title: '',
      description: '',
      startDate: '',
      endDate: '',
      user:{
        id:0,
        name: '',
        email: ''
      }
        }
      });
    }
  
    getAllProjects() {
  this.projectService.getAllProjects().subscribe(data => {
    console.log(data);
    this.projects = data;
    console.log(this.projects);
  });
}
  

  
  
  

}
