import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { LineComponent } from './components/line/line.component';
import { ListLineComponent } from './components/line/list-line/list-line.component';
import { ViewLineComponent } from './components/line/view-line/view-line.component';
import { ListStationComponent } from './components/station/list-station/list-station.component';
import { StationComponent } from './components/station/station.component';
import { ViewStationComponent } from './components/station/view-station/view-station.component';
import { ListTrainComponent } from './components/train/list-train/list-train.component';
import { TrainComponent } from './components/train/train.component';
import { ViewTrainComponent } from './components/train/view-train/view-train.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { UserComponent } from './components/user/user.component';
import { ViewUserComponent } from './components/user/view-user/view-user.component';

const routes: Routes = [
  { path: '', component: AdminHomeComponent },
  {
    path: 'user', component: UserComponent, children: [
      { path: '', component: ListUserComponent },
      { path: 'view/:id', component: ViewUserComponent }
    ]
  },
  {
    path: 'train', component: TrainComponent, children: [
      { path: '', component: ListTrainComponent },
      { path: 'view/:id', component: ViewTrainComponent }
    ]
  },
  {
    path: 'line', component: LineComponent, children: [
      { path: '', component: ListLineComponent },
      { path: 'view/:id', component: ViewLineComponent }
    ]
  },
  {
    path: 'station', component: StationComponent, children: [
      { path: '', component: ListStationComponent },
      { path: 'view/:id', component: ViewStationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
