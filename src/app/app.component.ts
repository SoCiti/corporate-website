import { Component, ViewEncapsulation} from '@angular/core';
import{Router, NavigationEnd} from '@angular/router';

declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  encapsulation: ViewEncapsulation.None,
})


export class AppComponent {
  title = 'soCiti';
  constructor(public router: Router){
    this.router.events.subscribe(event => {
       if(event instanceof NavigationEnd){
           gtag('config', 'UA-167507804-1', 
                 {
                   'page_path': event.urlAfterRedirects
                 }
                );
        }
     }
  )}


  onActivate(event) {
    window.scroll(0, 0);
  }
}

