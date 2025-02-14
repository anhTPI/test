import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  /**
   * set value
   *
   * @param key - localStorage name
   * @param value  - localStorage value
   * @returns void
   */
  set(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  /**
   * get value
   *
   * @param key - localStorage name
   * @returns value
   */
  get(key: string): string | null {
    return window.localStorage.getItem(key);
  }

  /**
   * remove key
   *
   * @param key - localStorage name
   * @returns void
   */
  remove(key: string): void {
    window.localStorage.removeItem(key);
  }
}
