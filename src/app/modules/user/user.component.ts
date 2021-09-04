//core
import { Component, OnInit } from '@angular/core';
//models
import { Post, User } from 'src/app/shared/models/users.interfaces';
//services
import { DataService } from 'src/app/service/data.service';
import { UserService } from './service/user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userPosts: Array<Array<Post>> = new Array<Array<Post>>();
  users: Array<User> = new Array<User>();
  showUserPosts: boolean = false;
  selectedUser: User = new User();

  constructor(
    private _dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this._dataService.usersData.subscribe(data => {
      this.users = data;
    });
  }

  openUserPosts(user: User): void {
    this.selectedUser = user;
    this.showUserPosts = true;
  }

  closeUserPosts(): void {
    this.showUserPosts = false;
  }
}