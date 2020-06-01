import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.less']
})
export class EnterpriseComponent implements OnInit {
  activeSolution;

  constructor() { }

  ngOnInit(): void {
    this.activeSolution = 'education';
  }

  viewEducation() {
    this.activeSolution = 'education';
  }

  viewGov() {
    this.activeSolution = 'gov';
  }

  viewNonProfit() {
    this.activeSolution = 'nonProfit';
  }

  viewUnion() {
    this.activeSolution = 'union';
  }
}
