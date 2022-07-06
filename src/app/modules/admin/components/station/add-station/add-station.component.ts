import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StationService } from 'src/app/services/station.service';
import { F_STATION } from '../../station.form';

@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.scss']
})
export class AddStationComponent implements OnInit {
  stationForm: FormGroup;

  constructor(private stationService: StationService, private _fb: FormBuilder) {
    this.stationForm = this._fb.group(F_STATION);
  }

  ngOnInit(): void {
  }

  addStation() {
    if (this.stationForm.valid) {
      this.stationService.setStation(this.stationForm.value).subscribe(() => this.stationForm.reset());
    }
  }
}
