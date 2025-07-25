
let currentLanguage = 'en';

export const useTranslation = () => ({
  t: (key: string) => key,
  i18n: {
    changeLanguage: (lang: string) => {
      currentLanguage = lang;
      return Promise.resolve();
    },
    get language() {
      return currentLanguage;
    },
  },
});
export const initReactI18next = {
  type: '3rdParty',
  init: () => {},
};