import { Component} from '@angular/core';

interface ReferenceInfo {
  title: string;
  pathName: string;
}

@Component({
  templateUrl: './referenceInfo.component.html',
  styleUrls: ['./referenceInfo.component.scss'],
})
export class ReferenceInfoComponent  {
  referenceContract: ReferenceInfo[] = [
    {
      title: 'ReferenceInformationAndTerms.IndividualCustomers',
      pathName: 'terms'
    },
    {
      title: 'ReferenceInformationAndTerms.Biometric',
      pathName: 'terms'
    }
  ];
  terms: ReferenceInfo[] = [
    {
      title: 'ReferenceInformationAndTerms.TermsCondition',
      pathName: 'terms'
    },
    {
      title: 'ReferenceInformationAndTerms.CookiesPolicy',
      pathName: 'cookies-policy'
    }
  ];
  disabled = false;
}
