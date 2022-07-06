import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ITrain } from 'src/app/services/itrain';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-list-train',
  templateUrl: './list-train.component.html',
  styleUrls: ['./list-train.component.scss']
})
export class ListTrainComponent implements OnInit {
  trains?: ITrain[] = [];

  constructor(private trainService: TrainService) { }

  ngOnInit(): void {
    this.trainService.getTrains().subscribe((resp) => { this.trains = resp.body as ITrain[] })
  }

}
