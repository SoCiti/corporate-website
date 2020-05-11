import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {

  navActive: false;
  sideNav;

  header = document.getElementById('header');
  @HostListener('window:scroll', ['$event'])

  myFunction(event) {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      document.getElementById('header').className = 'stuck';
    } else {
      document.getElementById('header').className = '';
    }
  }
  constructor() { }

  ngOnInit(): void {
    this.sideNav = document.querySelector('header');

  }

  toggleSideNav() {
    this.sideNav.classList.toggle('open');
    window.navigator.vibrate(50);
  }
}
