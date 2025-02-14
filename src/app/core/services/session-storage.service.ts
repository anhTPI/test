import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  /**
   * set value
   *
   * @param key - sessionStorage name
   * @param value  - sessionStorage value
   * @returns void
   */
  set(key: string, value: string): void {
    window.sessionStorage.setItem(key, value);
  }

  /**
   * get value
   *
   * @param key - sessionStorage name
   * @returns value
   */
  get(key: string): string | null {
    return window.sessionStorage.getItem(key);
  }

  /**
   * remove value
   *
   * @param key - sessionStorage name
   * @returns void
   */
  remove(key: string): void {
    window.sessionStorage.removeItem(key);
  }
}
