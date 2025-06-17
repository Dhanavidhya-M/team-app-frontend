import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { TaskComponent } from './task/task-component/task-component';
import { UserComponent } from './user/user-component/user-component';
import { ProjectComponent } from './project/project-component/project-component';

export const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'task', component: TaskComponent },
      { path: 'user', component: UserComponent },
      { path: 'project', component: ProjectComponent }

];
