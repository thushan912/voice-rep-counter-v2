import type { Locale } from './site';
import { home } from './home';

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQPageContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  faq: FAQItem[];
}

const extraEn: FAQItem[] = [
  {
    q: 'Which platforms is Voice Rep Counter available on?',
    a: 'The app is available for Android and iOS. Use the official store badges on this site to open the listing for your platform.',
  },
  {
    q: 'Does Voice Rep Counter play audio with the screen locked?',
    a: 'Background audio is configured in the app, but behavior can vary by device and operating system. We cannot guarantee uninterrupted screen-off counting on every phone.',
  },
  {
    q: 'Is my workout data uploaded to a server?',
    a: 'Core sessions and history are stored locally on your device. Advertising and analytics services may process data when the app is online; see the privacy policy for details.',
  },
  {
    q: 'Does the app provide workout reminders or notifications?',
    a: 'The app does not currently provide working workout reminder notifications. Use the spoken pacing and rest timers for the core workout experience.',
  },
];

const extraIt: FAQItem[] = [
  {
    q: 'Su quali piattaforme è disponibile Voice Rep Counter?',
    a: 'L’app è disponibile per Android e iOS. Usa i badge degli store ufficiali su questo sito per aprire la scheda della tua piattaforma.',
  },
  {
    q: 'Voice Rep Counter riproduce audio con lo schermo bloccato?',
    a: 'L’audio in background è configurato nell’app, ma il comportamento può variare in base a dispositivo e sistema operativo. Non possiamo garantire un conteggio ininterrotto a schermo spento su ogni telefono.',
  },
  {
    q: 'I dati del mio allenamento vengono caricati su un server?',
    a: 'Sessioni e storico principali sono salvati localmente sul dispositivo. I servizi pubblicitari e di analisi possono elaborare dati quando l’app è online; vedi l’informativa privacy per i dettagli.',
  },
  {
    q: 'L’app offre promemoria o notifiche per l’allenamento?',
    a: 'Al momento l’app non offre notifiche promemoria funzionanti. Usa il conteggio vocale e i timer di riposo per l’esperienza principale.',
  },
];

export const faqPage: Record<Locale, FAQPageContent> = {
  en: {
    metaTitle: 'Voice Rep Counter FAQ | Spoken Reps & Rest Timer Questions',
    metaDescription:
      'Answers to common Voice Rep Counter questions about automatic detection, offline use, rest countdowns, sequential workouts, voice settings, and more.',
    h1: 'Frequently asked questions',
    lead:
      'Clear answers about what Voice Rep Counter does, how pacing works, and what it does not do.',
    faq: [...home.en.faq, ...extraEn],
  },
  it: {
    metaTitle: 'Domande frequenti su Voice Rep Counter | FAQ',
    metaDescription:
      'Risposte alle domande più comuni su Voice Rep Counter: rilevamento automatico, uso offline, conto alla rovescia, allenamenti in sequenza, impostazioni vocali e altro.',
    h1: 'Domande frequenti',
    lead:
      'Risposte chiare su cosa fa Voice Rep Counter, come funziona il ritmo e cosa non fa.',
    faq: [...home.it.faq, ...extraIt],
  },
};
