import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  fallbackLng: 'nl',
  lng: localStorage.getItem('language'),
  resources: {
    nl: {
      translations: require('./locales/nl/translations.json')
    },
    en: {
      translations: require('./locales/en/translations.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations',
  showLanguages: false //set to true to show the change language buttons
})

i18n.languages = ['nl', 'en']

export default i18n
