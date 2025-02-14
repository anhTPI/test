import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ApiService } from '@app/utils/api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LanguageInterceptor } from './core/interceptors/language.interceptor';
import { LanguageService } from './core/services/language.service';
import { LayoutModule } from './layout/layout.module';
import { RedirectComponent } from './redirect/redirect.component';
import { SharedModule } from './shared/shared.module';

// AoT requires an exported function for factories
export function httpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, RedirectComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    LayoutModule,
  ],
  providers: [
    ApiService,
    {
      provide: APP_INITIALIZER,
      useFactory: (languageService: LanguageService) => () =>
        languageService.init(),
      deps: [LanguageService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LanguageInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    // console.group('********** Build info **********');
    // const color = 'color: #22C55E';
    // console.info(`%cEnvironment: ${environment.environment}`, color);
    // console.info(`%cBranch: ${versions.branch}`, color);
    // console.info(`%cVersion: ${versions.version}_${versions.revision}`, color);
    // console.groupEnd();
  }
}
