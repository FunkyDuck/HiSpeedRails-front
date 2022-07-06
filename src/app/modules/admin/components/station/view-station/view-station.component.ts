import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ILine } from 'src/app/services/iline';
import { ILineToStation } from 'src/app/services/iline-to-station';
import { IStation } from 'src/app/services/istation';
import { LineToStationService } from 'src/app/services/line-to-station.service';
import { LineService } from 'src/app/services/line.service';
import { StationService } from 'src/app/services/station.service';
import { F_LINETOSTATION } from '../../line-to-station.form';

@Component({
  selector: 'app-view-station',
  templateUrl: './view-station.component.html',
  styleUrls: ['./view-station.component.scss']
})
export class ViewStationComponent implements OnInit {
  id: any;
  // @ViewChild('station') 
  station: IStation = { id: 0, name: '', city: '', dateCommissioning: '', openAt: '', closedAt: '' };
  lineToStation: ILineToStation[] = [];
  lines: ILine[] = [];
  formLineToStation: FormGroup;

  constructor(private route: ActivatedRoute, private stationService: StationService, private lineToStationService: LineToStationService, private lineService: LineService, private _fb: FormBuilder) {
    this.formLineToStation = this._fb.group(F_LINETOSTATION);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params['id']);
    this.stationService.getStationById(this.id).subscribe(resp => this.station = resp.body as IStation);
    this.lineToStationService.getByStation(this.id).subscribe(resp => {
      this.lineToStation = resp.body as ILineToStation[];
      this.lineToStation.forEach(e => {
        this.lineService.getLineById(e.line).subscribe(res => {
          e.lineName = res.body?.name;
        })
      });
    })
    this.lineService.getLines().subscribe(resp => {
      this.lines = resp.body as ILine[];
      this.lines.forEach(e => {
        this.lineToStation.forEach(el => {
          if (e.id === el.line) {
            this.lines = this.lines.filter(data => data.id != el.line);
          }
        })
      });
    });
  }

  addStation() {
    if (this.formLineToStation.valid) {
      let lineSend: ILineToStation = { line: this.formLineToStation.value.line, station: this.station.id, position: this.formLineToStation.value.position };

      this.lineToStationService.setToLine(lineSend).subscribe();
    }
  }
}
