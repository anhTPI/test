import { Component, OnInit } from '@angular/core';
import { Common } from '@app/features/data/common';
@Component({
  selector: 'app-download-app-button',
  templateUrl: './download-app-button.component.html',
  styleUrls: ['./download-app-button.component.scss'],
})
export class DownloadAppButtonComponent implements OnInit {
  isAppleDevice!: boolean;
  currentImage: string = '';
  appImage!: string;
  isMobile!: boolean;
  appleLogo = 'assets/image/icon/apple-80px.svg';
  androidLogo = 'assets/image/icon/android-80px.svg';
  arrowDown = 'assets/image/icon/arrow-down.svg';
  constructor() {
    this.isAppleDevice = /iPhone|iPad|iPod|Mac/i.test(navigator.userAgent);
    this.isMobile = window.innerWidth <= 1440;
    if (this.isMobile) {
      this.appleLogo = 'assets/image/icon/apple-60px.svg';
      this.androidLogo = 'assets/image/icon/android-60px.svg';
      this.arrowDown = 'assets/image/icon/arrow-down-small.svg';
    }
    // this.appImage = this.isAppleDevice ? this.appleLogo : this.androidLogo;
    this.appImage = this.appleLogo;
    this.currentImage = this.appleLogo;
  }
  ngOnInit(): void {}

  goDownload(): void {
    window.location.href = Common.link_url;
  }
}
