function getUserLanguage() {
  // List of available locales
  const availableLocales = ['en', 'da', 'de', 'es', 'fr', 'it', 'nl', 'sv'];

  // Default locale.
  const defaultLanguage = 'en';

  // Manually detect users' language to detect languages such as `en-GB`. Strip to `en`.
  let language = (window.navigator.userLanguage || window.navigator.language).substr(0, 2);

  // If `?lang=` exists in URL params & is valid, then use that instead.
  const urlParams = new URLSearchParams(window.location.search);
  const langFromUrl = urlParams.get('lang');
  if (langFromUrl && availableLocales.includes(langFromUrl)) {
    language = langFromUrl
  }

  // Set `userLanguage` only if its available within our locales, otherwise default.
  let userLanguage = defaultLanguage;
  if (availableLocales.includes(language)) {
    userLanguage = language;
  }

  return userLanguage;
}

