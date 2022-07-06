import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITrain } from 'src/app/services/itrain';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-view-train',
  templateUrl: './view-train.component.html',
  styleUrls: ['./view-train.component.scss']
})
export class ViewTrainComponent implements OnInit {
  id: any;
  // @ViewChild('train') 
  train: ITrain = { id: '', tconstructor: '', model: '', dateCommissioning: '', maxSpeed: 0, maxPassengers: 0 };

  constructor(private route: ActivatedRoute, private trainService: TrainService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params['id']);
    this.trainService.getTrainById(this.id).subscribe(resp => this.train = resp.body as ITrain);
  }
}
