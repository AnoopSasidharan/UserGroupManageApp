import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';
import { BusyService } from './shared/services/busy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private routerEventSub: Subscription;
  constructor(public busyService: BusyService,private router: Router) {

  }
  ngOnInit() {
    this.routerEventSub = this.router.events.subscribe((routerEvent: RouterEvent) => {
      this.checkRouterEvent(routerEvent);
    });
  }
  checkRouterEvent(routerEvent: RouterEvent): void {
    if (routerEvent instanceof NavigationStart) {
      this.busyService.showBusy('');
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.busyService.hideBusy();
    }
  }
  ngOnDestroy() {
    this.routerEventSub.unsubscribe();
  }

}
