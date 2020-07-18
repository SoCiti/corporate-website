import { Component, ViewEncapsulation} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  encapsulation: ViewEncapsulation.None,
})


export class AppComponent {
  title = 'soCiti';
  constructor(public router: Router, private titleService: Title ){
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

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  onActivate(event) {
    window.scroll(0, 0);
  }
}

