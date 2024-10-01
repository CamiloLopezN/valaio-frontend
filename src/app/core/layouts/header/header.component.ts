import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {navigation} from "../../../shared/domain/constants/layouts.constants";
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isNavbarCollapsed = true;
  currentRoute: string = '';

  constructor(private router: Router) {
  }


  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = event.urlAfterRedirects;
    });
  }

  setNavbarCollapsed(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }


  protected readonly navigation = navigation;
}
