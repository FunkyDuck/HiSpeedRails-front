import { Component, OnInit } from '@angular/core';
import { IStation } from 'src/app/services/istation';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-list-station',
  templateUrl: './list-station.component.html',
  styleUrls: ['./list-station.component.scss']
})
export class ListStationComponent implements OnInit {
  stations?: IStation[] = [];

  constructor(private stationService: StationService) { }

  ngOnInit(): void {
    this.stationService.getStations().subscribe((resp) => { this.stations = resp.body as IStation[] })
  }
}
