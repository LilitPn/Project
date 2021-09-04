//core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//componsnts
import { PreloaderComponent } from './components/preloader/preloader.component';
//services
import { PreloaderService } from './services/preloader.service';

@NgModule({
  declarations: [
    PreloaderComponent
  ],
  exports: [
    PreloaderComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    PreloaderService,
  ]
})
export class SharedModule { }
