import i18n from "i18n-js";
import fr from "./French.json";
import en from "./English.json";
import es from "./Spanish.json";

i18n.fallbacks = true;
i18n.translations = { en, fr, es };

i18n.locale = "en";
