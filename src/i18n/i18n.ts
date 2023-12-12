import i18n from "i18n-js";
import fr from "./French.json";
import en from "./English.json";
import es from "./Spanish.json";

i18n.fallbacks = true;
i18n.translations = { en, fr, es };
i18n.locale = "en";

type DefaultLocale = typeof en;
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;

//suggests json keys
type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & string];

//translate function
export function i18nTranslate(key: TxKeyPath, options?: i18n.TranslateOptions) {
  return key ? i18n.t(key, options) : null;
}
