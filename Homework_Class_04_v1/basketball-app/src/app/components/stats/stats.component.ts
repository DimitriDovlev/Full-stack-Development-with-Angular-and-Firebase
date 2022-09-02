import { Component, Input, OnInit } from '@angular/core';
import { Stats } from 'src/app/interfaces/stats';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  @Input() statsData: Stats;

  constructor() {}

  ngOnInit(): void {}
}
