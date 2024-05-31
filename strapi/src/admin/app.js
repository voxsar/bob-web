const config = {
 translations: {
  en: {
    "app.components.LeftMenu.navbrand.title": "Store Dashboard",

    "app.components.LeftMenu.navbrand.workplace": "BOB retail",

    "Auth.form.welcome.title": "Welcome to Dashboard ",

    "Auth.form.welcome.subtitle": "Login to your admin account",

    "Settings.profile.form.section.experience.interfaceLanguageHelp":
      "Preference changes will apply only to you.",
  },
 }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
