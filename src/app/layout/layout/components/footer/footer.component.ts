import { Component } from '@angular/core';
import { CathayFinancialHoldings, CathayUnitedBank, CathayUnitedBankInVietnam, DigitalConsumerLoan, FAQs, PrivacyPolicy, URL_TIKTOK, URL_ZALO } from '@app/core/constants/url.constant';
import { LanguageService } from '@app/core/services/language.service';
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
  constructor(
    private _lang: LanguageService
  ){}
  get urlCathayFinancialHoldings() {
    return this._lang.getLang() == 'en' ? CathayFinancialHoldings.EN : CathayFinancialHoldings.VI
  }
  get urlCathayUnitedBank() {
    return this._lang.getLang() == 'en' ? CathayUnitedBank.EN : CathayUnitedBank.VI
  }
  get urlCathayUnitedBankInVietnam() {
    return this._lang.getLang() == 'en' ? CathayUnitedBankInVietnam.EN : CathayUnitedBankInVietnam.VI
  }
  get urlDigitalConsumerLoan() {
    return this._lang.getLang() == 'en' ? DigitalConsumerLoan.EN : DigitalConsumerLoan.VI
  }
  get urlPrivacyPolicy() {
    return this._lang.getLang() == 'en' ? PrivacyPolicy.EN : PrivacyPolicy.VI
  }
  get urlFAQs(){
    return FAQs.EN
  }
  get urlTiktok(){
    return URL_TIKTOK.EN;
  }
  get urlZalo(){
    return URL_ZALO.EN;
  }
}
