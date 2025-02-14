import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LanguageService } from '@app/core/services/language.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  numbers: number[] = Array.from({ length: 3 }, (_, i) => i + 1);
  newsCard: {
    id: string;
    title: string;
    date: string;
  }[] = [];

  disabled = false;
  homeNavAppPng = 'assets/image/common/home_nav_app_en_v2.png';

  constructor(
    private languageService: LanguageService,
    private cdr: ChangeDetectorRef
  ) {
    languageService.languageChange$.subscribe((evt) => {
      this.homeNavAppPng =
        evt.lang === 'vi-vn'
          ? 'assets/image/common/home_nav_app_vn_v2.png'
          : 'assets/image/common/home_nav_app_en_v2.png';
    });
  }

  ngOnInit(): void {
    this.newsCard = [
      {
        id: '10',
        title: 'NEWS.NEWS10.TITLE',
        date: '12.12.2024',
      },
      {
        id: '9',
        title: 'NEWS.NEWS9.TITLE',
        date: '10.12.2024',
      },
      {
        id: '8',
        title: 'NEWS.NEWS8.TITLE',
        date: '22.11.2024',
      },
      {
        id: '7',
        title: 'NEWS.NEWS7.TITLE',
        date: '03.10.2024',
      },
      {
        id: '6',
        title: 'NEWS.NEWS6.TITLE',
        date: '03.10.2024',
      },
      {
        id: '5',
        title: 'NEWS.NEWS5.TITLE',
        date: '28.08.2024',
      },
      {
        id: '4',
        title: 'NEWS.NEWS4.TITLE',
        date: '28.07.2024',
      },
      {
        id: '3',
        title: 'NEWS.NEWS3.TITLE',
        date: '05.06.2024',
      },
      {
        id: '2',
        title: 'NEWS.NEWS2.TITLE',
        date: '22.05.2024',
      },
    ].sort((a: any, b: any) => {
      const date1 = new Date(
        a.date.substring(3, 6) + a.date.substring(0, 3) + a.date.slice(6)
      );
      const date2 = new Date(
        b.date.substring(3, 6) + b.date.substring(0, 3) + b.date.slice(6)
      );
      if (date1 < date2) {
        return 1;
      } else if (date1 > date2) {
        return -1;
      } else {
        return 0;
      }
    });
    this.cdr.detectChanges();
  }

  get isVn(): boolean {
    const lang = this.languageService.getLang();
    return lang === 'vi-vn';
  }
}
