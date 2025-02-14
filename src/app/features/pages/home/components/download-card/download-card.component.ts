import { Component, Input, OnInit } from '@angular/core';
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
  selector: 'app-download-card',
  templateUrl: './download-card.component.html',
  styleUrls: ['./download-card.component.scss'],
})
export class DownloadCardComponent implements OnInit {
  fillColor = '';
  @Input() date: string = '2023.08.07';
  @Input() direction: 'left' | 'right' = 'left';
  @Input() disabled!: boolean;

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

  constructor(private apiService: ApiService) {}
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

  goDownload(url?: string): void {
    window.location.href = Common.link_url;
    // window.location.href = url;
  }
}
