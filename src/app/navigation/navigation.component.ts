import { Component, OnInit, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {

  navActive: false;
  sideNav;

  header = document.getElementById('header');
  accordionTrigger;
  @HostListener('window:scroll', ['$event'])

  myFunction(event) {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      document.getElementById('header').className = 'stuck';
    } else {
      document.getElementById('header').className = '';
    }
  }
  constructor(private titleService: Title ) { }

  ngOnInit(): void {
    this.sideNav = document.querySelector('header');
    this.accordionTrigger = document.querySelector('#accordion-link');
  }

  toggleSideNav() {
    this.sideNav.classList.toggle('open');
    window.navigator.vibrate(50);
  }

  toggleNavAccordion() {
    console.log(this.accordionTrigger);
    this.accordionTrigger.classList.toggle('expanded');
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

}
