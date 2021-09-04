import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/shared/models/users.interfaces';



@Injectable()
export class UserService {
    usersData: Subject<Array<User>> = new Subject<Array<User>>();
    userData: Subject<User> = new Subject<User>();

    setUsersData(data: Array<User>): void {
        this.usersData.next(data);
    }

    setUserData(data: User): void {
        this.userData.next(data);
    }
}
