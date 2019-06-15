import i18n from "i18n-js";
import * as RNLocalize from "react-native-localize";

import bg from "./static/locales/bg";
import en from "./static/locales/en";

const locales = RNLocalize.getLocales();

if ( Array.isArray(locales) ) {
  // default to os locale
  i18n.locale = locales[0].languageTag;
}

i18n.fallbacks = true;
i18n.translations = {
  bg,
  en
};

export default i18n;