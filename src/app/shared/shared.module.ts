import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedRoutingModule } from './shared-routing.module';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [HeaderComponent, SearchPipe],
  exports: [HeaderComponent, SearchPipe ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],

})
export class SharedModule { }
