import { Component } from '@angular/core';
// import {environment} from '@env/environment'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  contactPhoneNumber = '028 3622 6836';
  contactEmail = 'contact.CUB@vn.cathaybk.com';
  routerItems = [
    {
      name: 'PageTitle.TermsCondition',
      path: '/reference-information/content/terms',
    },
    {
      name: 'PageTitle.ReferenceContract',
      path: '/reference-information',
    },
  ];
}
