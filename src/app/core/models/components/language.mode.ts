/** i18n language code */
export type LanguageCode = 'vi-vn' | 'en';

/** ISO Language Code http://www.lingoes.net/en/translator/langcode.htm */
export type AcceptLanguage = 'vi-VN' | 'en-US';

export interface LanguageItem {
  name: string;
  shortName: string;
  value: LanguageCode;
}

/** language code mapping accept language */
export const AcceptLanguageMapping = {
  'vi-vn': 'vi-VN' as AcceptLanguage,
  en: 'en-US' as AcceptLanguage,
};
