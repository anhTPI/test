import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, of, switchMap } from 'rxjs';
import { ApiService } from './utils/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title: string = '';
  constructor(
    private router: Router,
    private titleService: Title,
    private apiService: ApiService,
    private translateService: TranslateService
  ) {}
  ngOnInit(): void {
    console.log('gke version');
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        switchMap(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeTitle = '';
          while (route!.firstChild) {
            route = route.firstChild;
          }
          if (route.snapshot.data['title']) {
            routeTitle = route!.snapshot.data['title'];
          }
          this.title = routeTitle;

          return this.translateService.get(this.title);
        })
      )
      .subscribe((data) => {
        if (data) {
          this.titleService.setTitle(data);
        }
      });

    this.translateService.onLangChange
      .pipe(
        switchMap(() => {
          if (this.title) {
            return this.translateService.get(this.title);
          } else {
            return of(undefined);
          }
        })
      )
      .subscribe((title) => {
        if (title) {
          this.titleService.setTitle(title);
        }
      });
  }
}
