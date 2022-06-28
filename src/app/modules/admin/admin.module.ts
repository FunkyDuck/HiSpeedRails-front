import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainComponent } from './components/train/train.component';
import { LineComponent } from './components/line/line.component';
import { StationComponent } from './components/station/station.component';
import { UserComponent } from './components/user/user.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    TrainComponent,
    LineComponent,
    StationComponent,
    UserComponent,
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
