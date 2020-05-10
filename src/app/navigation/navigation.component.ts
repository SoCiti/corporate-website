import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {

  navActive: false;
  sideNav;

  header = document.getElementById('header');
  sectionOne = document.getElementById('wave-end');



  sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        this.header.classList.add('nav-scrolled');
      } else {
        this.header.classList.remove('nav-scrolled');
      }
    });
  }, );

  constructor() { }

  ngOnInit(): void {
    this.sideNav = document.querySelector('header');
    this.sectionOneObserver.observe(this.sectionOne);
  }

  toggleSideNav() {
    this.sideNav.classList.toggle('open');
    window.navigator.vibrate(50);
  }
}
