// Locale translations.
const locales = {

  // EN
  en: {
    "heading": "Before you continue consider installing Total Adblock extension",
    "t-1": "Click the Accept and Continue button to download Total Adblock extension. <br>Total Adblock enables you to enjoy your favourite sites without Popups, annoying ads or video advertising.",
    "t-2": "By clicking the button Accept and Continue, you will be directed to the {browser} Store to install this extension. By clicking the button and installing this extension to your browser, you agree to our <a class=\"underline\" href=\"https://www.totaladblock.com/privacy\" target=\"_blank\">Privacy Policy.</a>",
    "cta": "Accept and continue",
  },

  da: {
    "heading": "",
    "t-1": "",
    "t-2": "",
    "cta": "",
  },

  de: {
    "heading": "Fahren Sie mit der Installation Ihres Werbeblockers fort.",
    "t-1": "Klicken Sie auf „Akzeptieren & fortfahren“, um die Total Adblock-Erweiterung herunterzuladen. Mit Total Adblock können Sie Ihre Lieblingsseiten ohne Pop-ups, lästige Werbung oder Werbevideos genießen.",
    "t-2": "Indem Sie auf „Akzeptieren & fortfahren“ klicken, werden Sie zum Chrome Web Store weitergeleitet, wo Sie diese Erweiterung herunterladen können. Indem Sie auf den Button klicken und diese Erweiterung in Ihrem Browser installieren, stimmen Sie unserer zu. <a class=\"underline\" href=\"https://www.totaladblock.com/privacy\">Datenschutzerklärung</a> zu.",
    "cta": "Akzeptieren & fortfahren",
  },

  es: {
    "heading": "Continúe para instalar su bloqueador de anuncios",
    "t-1": "Haga clic en el botón \"Aceptar y continuar\" para descargar la extensión de Total Adblock. Total Adblock le permite disfrutar de sus páginas web favoritas sin elementos emergentes, anuncios molestos o vídeos de publicidad.",
    "t-2": "Al hacer clic en el botón \"Aceptar y continuar\", se le redirigirá a Chrome Web Store para instalar esta extensión. Al hacer clic en el botón e instalar esta extensión en su navegador, acepta nuestra <a class=\"underline\" href=\"https://www.totaladblock.com/privacy\">Política de privacidad</a>.",
    "cta": "aceptar y continuar",
  },

  fr: {
    "heading": "Continuez pour installer le bloqueur de publicités",
    "t-1": "Cliquez sur le bouton « Accepter et continuer » pour télécharger l'extension Total Adblock. Total Adblock vous permet de profiter de vos sites préférés sans popups, publicités envahissantes ou annonces vidéo.",
    "t-2": "En cliquant sur le bouton « Accepter et continuer », vous êtes redirigé vers le Chrome Web Store pour installer cette extension. En cliquant sur le bouton et en installant l'extension sur votre navigateur, vous acceptez notre <a class=\"underline\" href=\"https://www.totaladblock.com/privacy\">Politique de confidentialité</a>.",
    "cta": "Accepter et continuer",
  },

  it: {
    "heading": "Continua a installare il blocco delle pubblicità",
    "t-1": "Clicca il pulsante Accetta e continua per scaricare l'estensione Total Adblock. Total Adblock ti consente di navigare i tuoi siti preferiti senza pop-up, fastidiosi annunci o video pubblicitari.",
    "t-2": "Cliccando pul pulsante Accetta e continua, verrai indirizzato al Chrome Web Store per installare questa estensione. Cliccando sul pulsante e installando questa estensione sul tuo browser, accetti la nostra <a class=\"underline\" href=\"https://www.totaladblock.com/privacy\">Normativa sulla privacy</a>.",
    "cta": "Accetta e continua",
  },

  nl: {
    "heading": "Ga verder met de installatie van uw advertentieblokker",
    "t-1": "Klik op de knop 'Accepteren en doorgaan' om de Total Adblock-extensie te downloaden. Met Total Adblock kunt u genieten van uw favoriete sites zonder pop-ups, irritante advertenties of videoreclames.",
    "t-2": "Als u op de knop 'Accepteren en doorgaan' klikt, wordt u doorgestuurd naar de Chrome-webstore om deze extensie te installeren. Door op de knop te klikken en deze extensie te installeren in uw browser, gaat u akkoord met ons <a class=\"underline\" href=\"https://www.totaladblock.com/privacy\">Privacybeleid</a>.",
    "cta": "Accepteren en doorgaan",
  },

  sv: {
    "heading": "Fortsätt för att installera din annonsblockerare",
    "t-1": "Klicka på knappen Godkänn och fortsätt för att ladda ner Total Adblock-tillägget. Med Total Adblock kan du njuta av de webbplatser du tycker bäst om utan popup-fönster, irriterande annonser eller videoreklam.",
    "t-2": "När du klickar på knappen Godkänn och fortsätt kommer du att skickas till Chrome Web Store för att installera tillägget. Genom att klicka knappen och installera tillägget i din webbläsare godkänner du vår <a class=\"underline\" href=\"https://www.totaladblock.com/privacy\">Sekretesspolicy</a>.",
    "cta": "Godkänn och fortsätt",
  },

};

// Get all page elements to be translated.
const elements = document.querySelectorAll('[data-i18n]');

// Get JSON object of translations.
const json = locales[getUserLanguage()];

// On each element, found the translation from JSON file & update.
elements.forEach((element, index) => {
  const key = element.getAttribute('data-i18n');
  let text = key.split('.').reduce((obj, i) => (obj ? obj[i] : null), json);

  // {browser} variable replace
  text = text.replaceAll('{browser}', getUserBrowser().toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
  }));
  element.innerHTML = text;
});
