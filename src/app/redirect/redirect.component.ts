import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit{

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.openApp();
  }

  openApp() {
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      this.openIosApp();
    } else if (navigator.userAgent.match(/Android/i)) {
      this.openAndroidApp();
    } else {
      setTimeout(() => {
        this.router.navigate(['home']);
      }, 2000);
    }
  }

  openIosApp() {
    const appStoreUrl = "";
    // const loadDateTime = +new Date();

    setTimeout(() => {
      // const diffTime = +new Date() - loadDateTime;
      // if (diffTime < 3600 && !onChange) {
        window.location.href = appStoreUrl
      // }
    }, 3600);
  }

  openAndroidApp() {
    setTimeout(() => {
      window.location.href = ""
    }, 3600)
  }
}
