import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectComponent } from './redirect/redirect.component';
import { Location } from '@angular/common';

import { LayoutComponent } from './layout/layout/layout.component';
import {
  LocalizeParser,
  LocalizeRouterModule,
  LocalizeRouterSettings,
  ManualParserLoader,
 } from '@jemys89/ngx-translate-router';
  import { LocalizeRouterHttpLoader } from '@gilsdav/ngx-translate-router-http-loader';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { AcceptLanguageMapping } from './core/models/components/language.mode';
// export function localizeLoaderFactory(translate: TranslateService, location: any, settings: LocalizeRouterSettings, http: HttpClient) {
//   return new LocalizeRouterHttpLoader(translate, location, settings, http, 'assets/i18n/');
// }

/**
 *  Root router
 */
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./features/pages/home/home.module').then((m) => m.HomeModule),
        data: {
          title: 'TITLE.HOME',
        },
      },
      {
        path: 'FAQ',
        loadChildren: () =>
          import('./features/pages/fAq/fAq.module').then((m) => m.FAQModule),
        data: {
          title: 'TITLE.FAQ',
        },
      },
      {
        path: 'product',
        loadChildren: () =>
          import('./features/pages/product/product.module').then(
            (m) => m.ProductModule
          ),
        data: {
          title: 'TITLE.PRODUCT',
        },
      },
      {
        path: 'news',
        loadChildren: () =>
          import('./features/pages/news/news.module').then((m) => m.NewsModule),
        data: {
          title: 'TITLE.NEWS',
        },
      },
      {
        path: 'events',
        loadChildren: () =>
          import('./features/pages/events/events.module').then(
            (m) => m.EventsModule
          ),
        data: {
          title: 'TITLE.EVENT',
        },
      },
      {
        path: 'reference-information',
        loadChildren: () =>
          import(
            './features/pages/reference-information/referenceInfo.module'
          ).then((m) => m.ReferenceInfoModule),
      },
      {
        path: 'privacy',
        loadChildren: () =>
          import('./features/pages/privacy/privacy.module').then(
            (m) => m.PrivacyModule
          ),
        data: {
          title: 'TITLE.PrivacyPolicy',
        },
      },
    ],
  },
  {
    path: 'redirect',
    component: RedirectComponent,
    pathMatch: 'full',
  },
  // Nonexistent route
  {
    path: '**',
    redirectTo: '/home',
  },
];
export function LocalizeRouterTranslateLoader(
  translate: TranslateService,
  location: Location,
  settings: LocalizeRouterSettings
): ManualParserLoader {
  return new ManualParserLoader(
    translate,
    location,
    settings,
    Object.keys(AcceptLanguageMapping),
    'ROUTES.'
  );
}
// export function localizeLoaderFactory(
//   translate: TranslateService,
//   location: any,
//   settings: LocalizeRouterSettings,
//   http: HttpClient
// ) {
//   return new LocalizeRouterHttpLoader(
//     translate,
//     location,
//     settings,
//     http,
//     'assets/i18n/en.json'
//   );
// }

/**
 * Root router module
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'disabled',
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 0],
      anchorScrolling: 'enabled',
      // onSameUrlNavigation: 'reload',
    }),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory:LocalizeRouterTranslateLoader,
        deps: [TranslateService, Location, LocalizeRouterSettings],
      },
      initialNavigation: true
    }),
  ],
  exports: [RouterModule, LocalizeRouterModule],
})
export class AppRoutingModule {}
