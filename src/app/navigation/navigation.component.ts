import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {

  navActive: false;
  sideNav;

  constructor() { }

  ngOnInit(): void {
    this.sideNav = document.querySelector('header');
  }

  toggleSideNav() {
    this.sideNav.classList.toggle('open');
    window.navigator.vibrate(200);
  }
}
