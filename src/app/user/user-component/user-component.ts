import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/models';
import { UserService } from '../../service/user/user-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-component',
   standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css'
})

export class UserComponent implements OnInit {

  ngOnInit(): void {
    this.getAllUsers();

  }

  users: User[] = [];
  newUser: User = {

    name: '',
    email: '',

  }


  constructor(private userService: UserService) { }


  addUser(): void {
    this.userService.addUser(this.newUser).subscribe(data => {
      this.users.push(data);
      this.newUser = {

        name: '',
        email: '',
      }
    });
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    })
  }



}
