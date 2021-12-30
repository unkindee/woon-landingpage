import { useTranslation } from 'react-i18next'

const LanguageButtons = () => {
  const { i18n } = useTranslation()
  const { options: { resources, showLanguages } } = i18n
  const lng = Object.keys(resources)

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value)
    localStorage.setItem('language', e.target.value)
  }

  const changeLanguageButtons = () => lng.map(item => (
    <button key={item} onClick={changeLanguage} value={item}>{item}</button>
  ))

  return (
    <div>
      {showLanguages && changeLanguageButtons()}
    </div>
  )
}

export default LanguageButtons
