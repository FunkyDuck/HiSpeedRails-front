import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILine } from 'src/app/services/iline';
import { ILineToStation } from 'src/app/services/iline-to-station';
import { LineToStationService } from 'src/app/services/line-to-station.service';
import { LineService } from 'src/app/services/line.service';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-view-line',
  templateUrl: './view-line.component.html',
  styleUrls: ['./view-line.component.scss']
})
export class ViewLineComponent implements OnInit {
  id: any;
  // @ViewChild('line') 
  line: ILine = { id: '', name: '', dateCommissioning: '', maxSpeed: 0 };
  lineToStation: ILineToStation[] = [];

  constructor(private route: ActivatedRoute, private lineService: LineService, private lineToStationService: LineToStationService, private stationService: StationService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params['id']);
    this.lineService.getLineById(this.id).subscribe(resp => this.line = resp.body as ILine);
    this.lineToStationService.getByLine(this.id).subscribe(resp => {
      this.lineToStation = resp.body as ILineToStation[];
      this.lineToStation.forEach(e => {
        this.stationService.getStationById(e.station).subscribe(res => {
          e.stationCity = res.body?.city;
          e.stationName = res.body?.name
        });
      });
      console.log(this.lineToStation)
    });
  }
}
