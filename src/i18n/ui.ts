import type { Locale } from '../data/site';

export interface UIStrings {
  locale: Locale;
  lang: string;
  ogLocale: string;
  nav: {
    features: string;
    howItWorks: string;
    exercises: string;
    blog: string;
    faq: string;
    download: string;
    menuOpen: string;
    menuClose: string;
  };
  skipToContent: string;
  footer: {
    tagline: string;
    productTitle: string;
    guidesTitle: string;
    supportTitle: string;
    getAppTitle: string;
    features: string;
    howItWorks: string;
    exercises: string;
    blog: string;
    faq: string;
    contact: string;
    privacy: string;
    terms: string;
    rights: string;
    legalReviewNote: string;
  };
  common: {
    home: string;
    learnMore: string;
    explore: string;
    downloadGooglePlay: string;
    downloadAppStore: string;
    seeHowItWorks: string;
    freeWithAds: string;
    offlineCore: string;
    noAccount: string;
    readMore: string;
    backToOverview: string;
    lastUpdated: string;
    relatedPages: string;
    contactEmail: string;
  };
}

export const ui: Record<Locale, UIStrings> = {
  en: {
    locale: 'en',
    lang: 'en',
    ogLocale: 'en_US',
    nav: {
      features: 'Features',
      howItWorks: 'How It Works',
      exercises: 'Exercises',
      blog: 'Blog',
      faq: 'FAQ',
      download: 'Download',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    skipToContent: 'Skip to main content',
    footer: {
      tagline:
        'A voice-guided workout timer that speaks each repetition at your chosen pace and counts down your rest intervals.',
      productTitle: 'Product',
      guidesTitle: 'Guides',
      supportTitle: 'Support',
      getAppTitle: 'Get the app',
      features: 'Features',
      howItWorks: 'How It Works',
      exercises: 'Exercises',
      blog: 'Blog',
      faq: 'FAQ',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms',
      rights: 'All rights reserved.',
      legalReviewNote: 'Published legal identity is subject to final human review.',
    },
    common: {
      home: 'Home',
      learnMore: 'Learn more',
      explore: 'Explore',
      downloadGooglePlay: 'Get it on Google Play',
      downloadAppStore: 'Download on the App Store',
      seeHowItWorks: 'See how it works',
      freeWithAds: 'Free with ads',
      offlineCore: 'Core workouts work offline',
      noAccount: 'No account needed',
      readMore: 'Read more',
      backToOverview: 'Back to overview',
      lastUpdated: 'Last updated',
      relatedPages: 'Related pages',
      contactEmail: 'Contact',
    },
  },
  it: {
    locale: 'it',
    lang: 'it',
    ogLocale: 'it_IT',
    nav: {
      features: 'Funzioni',
      howItWorks: 'Come funziona',
      exercises: 'Esercizi',
      blog: 'Blog',
      faq: 'FAQ',
      download: 'Scarica',
      menuOpen: 'Apri menu',
      menuClose: 'Chiudi menu',
    },
    skipToContent: 'Vai al contenuto principale',
    footer: {
      tagline:
        'Un timer di allenamento guidato dalla voce che pronuncia ogni ripetizione al ritmo che scegli e conta alla rovescia le pause.',
      productTitle: 'Prodotto',
      guidesTitle: 'Guide',
      supportTitle: 'Supporto',
      getAppTitle: 'Scarica l’app',
      features: 'Funzioni',
      howItWorks: 'Come funziona',
      exercises: 'Esercizi',
      blog: 'Blog',
      faq: 'FAQ',
      contact: 'Contatti',
      privacy: 'Informativa sulla privacy',
      terms: 'Termini',
      rights: 'Tutti i diritti riservati.',
      legalReviewNote: 'L’identità legale pubblicata è soggetta a revisione finale.',
    },
    common: {
      home: 'Home',
      learnMore: 'Scopri di più',
      explore: 'Esplora',
      downloadGooglePlay: 'Disponibile su Google Play',
      downloadAppStore: 'Scarica su App Store',
      seeHowItWorks: 'Scopri come funziona',
      freeWithAds: 'Gratis con pubblicità',
      offlineCore: 'Funzioni principali offline',
      noAccount: 'Nessun account richiesto',
      readMore: 'Leggi di più',
      backToOverview: 'Torna alla panoramica',
      lastUpdated: 'Ultimo aggiornamento',
      relatedPages: 'Pagine correlate',
      contactEmail: 'Contatti',
    },
  },
};

export function getUI(locale: Locale): UIStrings {
  return ui[locale];
}
