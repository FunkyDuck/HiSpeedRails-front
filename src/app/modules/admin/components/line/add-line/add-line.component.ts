import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LineService } from 'src/app/services/line.service';
import { F_LINE } from '../../line.form';

@Component({
  selector: 'app-add-line',
  templateUrl: './add-line.component.html',
  styleUrls: ['./add-line.component.scss']
})
export class AddLineComponent implements OnInit {
  lineForm: FormGroup;

  constructor(private lineService: LineService, private _fb: FormBuilder) {
    this.lineForm = this._fb.group(F_LINE);
  }

  ngOnInit(): void {
  }

  addLine() {
    if (this.lineForm.valid) {
      this.lineService.setLine(this.lineForm.value).subscribe(() => this.lineForm.reset());

    }
  }
}
