//core
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//models
import { Post, User } from '../shared/models/users.interfaces';



@Injectable({ providedIn: 'root' })
export class DataService {
  private _usersUrl = 'assets/store/users.json';
  private _postsUrl = 'assets/store/posts.json';
  usersData: Subject<Array<User>> = new Subject<Array<User>>();

  private _headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');


  constructor(private _http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(this._usersUrl, { headers: this._headers });
  }

  getPosts(): Observable<Post[]> {
    return this._http.get<Post[]>(this._postsUrl, { headers: this._headers });
  }

  setUsersData(data: Array<User>): void {
    this.usersData.next(data);
  }
}
