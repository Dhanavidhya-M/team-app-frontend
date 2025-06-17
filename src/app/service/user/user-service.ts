import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:1000/users';

  constructor(private http: HttpClient) { }


  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}`, user);

  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}`);
  }
}



