//core
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
//models
import { Post, User } from 'src/app/shared/models/users.interfaces';



@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: [
    './user-list.component.scss',
    '../../../../../assets/scss/table.scss'
  ]
})
export class UserListComponent implements OnInit {
  @Input() users: Array<User> = new Array<User>();
  @Output() open: EventEmitter<User> = new EventEmitter<User>()

  userPosts: Array<Array<Post>> = new Array<Array<Post>>();
  selectedUser: User = new User();

  constructor() { }

  ngOnInit(): void { }

  showDetails(user: User): void {
    this.selectedUser = user;
    setTimeout(() => { this.open.emit(user) }, 2000);
  }
}
