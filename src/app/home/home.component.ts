import { Component, OnInit, Inject, AfterViewInit, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
declare const runTutorial: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, AfterViewInit{

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    runTutorial();
  }

}