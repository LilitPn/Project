//core
import { Component, OnInit } from '@angular/core';
import { PreloaderService } from './shared/services/preloader.service';
import { from } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';
import { Router } from '@angular/router';
//services
import { DataService } from './service/data.service';
//models
import { Post, User } from './shared/models/users.interfaces';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading: boolean = false;
  userPosts: Array<Array<Post>> = new Array<Array<Post>>();
  users: Array<User> = new Array<User>();

  constructor(
    private _loaderService: PreloaderService,
    private _dataService: DataService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.listenToLoading();
    this.getData();
  }

  listenToLoading(): void {
    this._loaderService.loading.subscribe((loading) => {
      this.loading = loading;
    });
  }

  getData(): void {
    this._dataService.getUsers().subscribe(res => {
      setTimeout(() => { this.users = res; }, 5000)
    });

    this._dataService.getPosts().subscribe(res => {
      setTimeout(() => {
        let source = from(res);
        let values = source.pipe(
          groupBy(val => val.userId),
          mergeMap(group => group.pipe(toArray()))
        );

        values.subscribe(res => this.userPosts.push(res));

        //inject each post into it’s author’s ‘posts’ array.
        for (let i = 0; i < this.users.length; i++) {
          this.users[i].posts = this.userPosts[i];
        }

        //after loading the data, redirect the user to the user module
        this._dataService.setUsersData(this.users);
      }, 5000);
    });
    
    this._router.navigate(['/users']);
  }
}
