import { Component, OnInit } from '@angular/core';
import { LanguageService } from '@app/core/services/language.service';
import { Common } from '@app/features/data/common';
import { ApiService } from '@app/utils/api.service';
export interface ApiResponse {
  MWHEADER: {
    MSGID: string;
    SOURCECHANNEL: string;
    TXNSEQ: string;
    RETURNCODE: string;
    RETURNDESC: string;
    TRACEID: string;
  };
  TRANRS: {
    records: VersionInfo[];
  };
}

export interface VersionInfo {
  platform: string;
  versionNumber: string;
  releaseDate: string;
  downloadUrl: string;
}
@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  currentSlide = 0;
  startX = 0;

  versionRecords: VersionInfo[] = [];

  iosInfo = {
    platform: '',
    versionNumber: '',
    releaseDate: '',
    downloadUrl: '',
  };

  androidInfo = {
    platform: '',
    versionNumber: '',
    releaseDate: '',
    downloadUrl: '',
  };

  cardList = [
    {
      image: 'assets/image/common/product-1.svg',
      title: 'Product.Card1Title',
      subTitle: 'Product.Card1SubTitle',
      titleClass: 'card1-title',
      contentList: [
        'Product.Card1List1',
        'Product.Card1List2',
        'Product.Card1List3',
      ],
    },
    {
      image: 'assets/image/common/product-2.svg',
      title: 'Product.Card2Title',
      subTitle: 'Product.Card2SubTitle',
      titleClass: 'card2-title',
      contentList: [
        'Product.Card2List1',
        'Product.Card2List2',
        'Product.Card2List3',
      ],
    },
    {
      image: 'assets/image/common/product-3.svg',
      title: 'Product.Card3Title',
      subTitle: 'Product.Card3SubTitle',
      titleClass: 'card3-title',
      contentList: [
        'Product.Card3List1',
        'Product.Card3List2',
        'Product.Card3List3',
      ],
    },
  ];

  constructor(
    private languageService: LanguageService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    const data = {
      MWHEADER: {
        MSGID: 'VIB-B-APPVERSQ001',
        SOURCECHANNEL: 'OVS-LX-VIB-01',
        TXNSEQ: 'string',
      },
      TRANRQ: {},
    };

    this.apiService.getVersion(data).subscribe({
      next: (response) => {
        console.log('API Response:', response);
        this.versionRecords = response.body.TRANRS.records;
        // 分別存儲 iOS 和 Android 的資訊
        this.versionRecords.forEach((record) => {
          if (record.platform === 'IOS') {
            this.iosInfo = { ...record };
          } else if (record.platform === 'ANDROID') {
            this.androidInfo = { ...record };
          }
        });
      },
      error: (error) => {
        console.error('API Error:', error);
      },
    });
  }

  get isVn(): boolean {
    const lang = this.languageService.getLang();
    return lang === 'vi-vn';
  }

  goDownload(url?: string): void {
    window.location.href = Common.link_url;
    // window.location.href = url;
  }
}

export interface AppVersTranrs {
  versInfo: VersInfo[];
}

export interface VersInfo {
  platform: string;
  versionNumber: string;
  releaseDate: string;
  downloadUrl: string;
}
