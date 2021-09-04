//core
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//models
import { User } from 'src/app/shared/models/users.interfaces';



@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: [
    './user-detail.component.scss',
    '../../../../../assets/scss/table.scss'
  ]
})
export class UserDetailComponent implements OnInit {
  @Input() user: User = new User();
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  goBackToUsersList(): void {
    this.close.emit();
  }
}
