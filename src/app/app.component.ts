import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ROUTES } from './constants/routes.constants';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes = ROUTES;
  activeRoute;

  constructor(private router: Router) {}
  
  ngAfterViewInit() {
    const path = window.location.pathname;
    this.activeRoute = ROUTES.find(route => route.link === path);
  }

  navigate(route) {
    this.activeRoute = route;
    this.router.navigate([route.link]);
  }
}
