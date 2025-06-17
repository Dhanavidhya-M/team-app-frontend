import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

   private baseUrl = "http://localhost:1000/project";

  constructor(private http: HttpClient) { }


  addProject(project: Project): Observable<Project> {
    console.log("Sending project data:", project);
    return this.http.post<Project>(`${this.baseUrl}`, project);

  }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}`);
  }

}
