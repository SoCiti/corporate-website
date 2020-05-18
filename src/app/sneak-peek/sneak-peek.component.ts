import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sneak-peek',
  templateUrl: './sneak-peek.component.html',
  styleUrls: ['./sneak-peek.component.less']
})
export class SneakPeekComponent implements OnInit {

  sideNav;
  constructor() { }

  ngOnInit(): void {
    this.sideNav = document.querySelector('header');
    this.sideNav.classList.add('stuck');
  }

}
