import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  /**
   * POST 請求
   * @param endpoint API 端點
   * @param data 請求資料
   * @param token 可選的認證 token
   * @returns Observable<HttpResponse<T>>

  post<T>(
    endpoint: string,
    data: any = {},
    token?: string
  ): Observable<HttpResponse<T>> {
    const url = this.getFullUrl(endpoint);
    const options = this.getRequestOptions(token);
    console.log('環境設定 API URL:', environment.apiUrl);
    console.log('最終請求 URL:', url);
    console.log('請求選項:', options);
    console.log('請求資料:', data);
    return this.http.post<T>(url, data, options).pipe(
      catchError((error) => {
        console.error('API 錯誤:', error);
        return throwError(() => error);
      })
    );
  }*/
  /**
   * 取得完整 URL
   * @param endpoint API 端點
   * @returns 完整 URL
   */
  private getFullUrl(endpoint: string): string {
    const normalizedEndpoint = endpoint.startsWith('/')
      ? endpoint.slice(1)
      : endpoint;
    const fullUrl = `${environment.apiUrl}/${normalizedEndpoint}`;
    console.log('!!!Full Request URL:', fullUrl); // 檢查完整 URL
    return fullUrl;
  }
  /**
   * 取得請求設定
   * @param token 可選的認證 token
   * @returns HTTP 請求設定
   */
  private getRequestOptions(token?: string) {
    let headers = this.httpOptions.headers;

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return {
      headers,
      observe: 'response' as const,
    };
  }

  getVersion(data?: any): Observable<any> {
    const url = this.getFullUrl('/bff/api/app/getVersion');
    // const url = this.getFullUrl('app/getVersion');
    // const url = '/bff/api/app/getVersion';
    return this.http.post(url, data, this.getRequestOptions());
  }
  // https://www.vn.cathaybk.com/bff/api/app/getVersion
}
