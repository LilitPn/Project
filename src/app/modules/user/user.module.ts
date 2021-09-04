//core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
//components
import { UserComponent } from './user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';
//modules
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
//services
import { UserService } from './service/user.service';



@NgModule({
  declarations: [
    UserComponent,
    UserDetailComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
