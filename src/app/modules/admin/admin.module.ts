import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainComponent } from './components/train/train.component';
import { LineComponent } from './components/line/line.component';
import { StationComponent } from './components/station/station.component';
import { UserComponent } from './components/user/user.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { ViewUserComponent } from './components/user/view-user/view-user.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { AddTrainComponent } from './components/train/add-train/add-train.component';
import { ViewTrainComponent } from './components/train/view-train/view-train.component';
import { ListTrainComponent } from './components/train/list-train/list-train.component';
import { ListStationComponent } from './components/station/list-station/list-station.component';
import { ViewStationComponent } from './components/station/view-station/view-station.component';
import { AddStationComponent } from './components/station/add-station/add-station.component';
import { AddLineComponent } from './components/line/add-line/add-line.component';
import { ViewLineComponent } from './components/line/view-line/view-line.component';
import { ListLineComponent } from './components/line/list-line/list-line.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TrainComponent,
    LineComponent,
    StationComponent,
    UserComponent,
    AdminHomeComponent,
    ListUserComponent,
    ViewUserComponent,
    AddUserComponent,
    AddTrainComponent,
    ViewTrainComponent,
    ListTrainComponent,
    ListStationComponent,
    ViewStationComponent,
    AddStationComponent,
    AddLineComponent,
    ViewLineComponent,
    ListLineComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
