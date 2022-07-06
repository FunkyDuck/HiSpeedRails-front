import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TrainService } from 'src/app/services/train.service';
import { F_TRAIN } from '../../train.form';

@Component({
  selector: 'app-add-train',
  templateUrl: './add-train.component.html',
  styleUrls: ['./add-train.component.scss']
})
export class AddTrainComponent implements OnInit {
  trainForm: FormGroup;

  constructor(private trainService: TrainService, private _fb: FormBuilder) {
    this.trainForm = this._fb.group(F_TRAIN);
  }

  ngOnInit(): void {
  }

  addTrain() {
    if (this.trainForm.valid) {
      this.trainService.setTrain(this.trainForm.value).subscribe(() => this.trainForm.reset());

    }
  }

}
