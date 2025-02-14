import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AcceptLanguage, AcceptLanguageMapping } from '../models/components/language.mode';
import { LanguageService } from '../services/language.service';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
  constructor(private _languageService: LanguageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // ignore when not api url

    const lang = this._languageService.getLang();

    const acceptLanguage: AcceptLanguage = AcceptLanguageMapping[lang] || 'vi-VN';

    const newRequest = request.clone({
      setHeaders: {
        'Accept-Language': acceptLanguage,
      },
    });

    return next.handle(newRequest);
  }
}
