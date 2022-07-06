import { Component, OnInit } from '@angular/core';
import { ILine } from 'src/app/services/iline';
import { LineService } from 'src/app/services/line.service';

@Component({
  selector: 'app-list-line',
  templateUrl: './list-line.component.html',
  styleUrls: ['./list-line.component.scss']
})
export class ListLineComponent implements OnInit {
  lines?: ILine[] = [];

  constructor(private lineService: LineService) { }

  ngOnInit(): void {
    this.lineService.getLines().subscribe((resp) => { this.lines = resp.body as ILine[] })
  }
}
