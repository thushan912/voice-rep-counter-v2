import type { Locale } from './site';

export interface LegalSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LegalPageContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  reviewNote: string;
}

export const privacy: Record<Locale, LegalPageContent> = {
  en: {
    metaTitle: 'Privacy Policy | Voice Rep Counter',
    metaDescription:
      'The Voice Rep Counter privacy policy: what is stored on your device, how analytics, crash reporting, and advertising work, and how to contact us.',
    h1: 'Privacy Policy',
    updated: '7 November 2026',
    intro:
      'This policy explains how the Voice Rep Counter mobile app and this website handle information. It reflects the SDKs and consent flow used in the app, and remains subject to final verification against the released store builds.',
    sections: [
      {
        heading: '1. Who is responsible',
        paragraphs: [
          'The app and website are operated by Dimuthu Thushan Lankadewa / Codeneir. For privacy questions, contact contact@codeneir.com.',
          'The exact public legal identity and any mandatory business details are marked for human review before final publication.',
        ],
      },
      {
        heading: '2. Account-free use and local data',
        paragraphs: [
          'Voice Rep Counter does not require an account. Session definitions, completed workout history, and settings are stored locally on your device.',
          'Workout functionality works offline. This does not mean the app transmits no data at all; advertising and analytics services can use the internet when the device is online.',
        ],
      },
      {
        heading: '3. Analytics',
        paragraphs: [
          'The app integrates Firebase Analytics. It can collect usage telemetry, including workout-related events, to help us understand how the app is used.',
        ],
      },
      {
        heading: '4. Crash reporting',
        paragraphs: [
          'The app integrates Crashlytics to collect diagnostic information when the app crashes, which helps us fix issues.',
        ],
      },
      {
        heading: '5. Remote configuration',
        paragraphs: [
          'The app uses Firebase Remote Config to update certain app configuration values remotely.',
        ],
      },
      {
        heading: '6. Advertising and consent',
        paragraphs: [
          'The app is free and ad-supported through Google AdMob. AdMob and its partners may process data to serve and measure advertising.',
          'Where required, a consent mechanism (Google’s User Messaging Platform, UMP) is used to obtain applicable consent choices.',
        ],
      },
      {
        heading: '7. Data processed by providers',
        paragraphs: [
          'Data may be processed by Google and other providers according to their own policies, including for analytics, crash reporting, advertising, and consent management.',
        ],
      },
      {
        heading: '8. Retention',
        paragraphs: [
          'Local workout data stays on your device until you delete the app or remove the data. Data held by analytics, crash, and advertising providers is subject to their retention practices and your available controls.',
        ],
      },
      {
        heading: '9. Your controls and rights',
        paragraphs: [
          'You can manage local data by deleting sessions or history in the app, and by using your device settings. Depending on your region, you may have rights to access, correct, delete, or object to certain processing.',
          'For privacy requests, contact contact@codeneir.com with enough detail to identify your request.',
        ],
      },
      {
        heading: '10. Contact',
        paragraphs: [
          'For privacy questions or requests, email contact@codeneir.com.',
        ],
      },
      {
        heading: '11. Important note',
        paragraphs: [
          'Voice Rep Counter is not tracking-free and is not “100% offline/no data transmitted.” Core workouts work offline, but ads and analytics may connect when online.',
        ],
      },
    ],
    reviewNote:
      'This policy must be reviewed against the currently published Android and iOS builds and applicable legal requirements before the site is considered production-approved.',
  },
  it: {
    metaTitle: 'Informativa sulla privacy | Voice Rep Counter',
    metaDescription:
      'L’informativa privacy di Voice Rep Counter: cosa viene salvato sul dispositivo, come funzionano analisi, segnalazione arresti anomali e pubblicità, e come contattarci.',
    h1: 'Informativa sulla privacy',
    updated: '7 novembre 2026',
    intro:
      'Questa informativa spiega come l’app mobile Voice Rep Counter e questo sito web gestiscono le informazioni. Riflette gli SDK e il flusso di consenso usati nell’app e resta soggetta a verifica finale rispetto alle build pubblicate sugli store.',
    sections: [
      {
        heading: '1. Titolare',
        paragraphs: [
          'L’app e il sito sono gestiti da Dimuthu Thushan Lankadewa / Codeneir. Per domande sulla privacy, scrivi a contact@codeneir.com.',
          'L’identità legale pubblica esatta e gli eventuali dati aziendali obbligatori sono indicati per una revisione finale prima della pubblicazione.',
        ],
      },
      {
        heading: '2. Uso senza account e dati locali',
        paragraphs: [
          'Voice Rep Counter non richiede un account. Le definizioni delle sessioni, lo storico degli allenamenti completati e le impostazioni sono salvati localmente sul dispositivo.',
          'L’allenamento funziona offline. Questo non significa che l’app non trasmetta alcun dato: i servizi pubblicitari e di analisi possono usare internet quando il dispositivo è online.',
        ],
      },
      {
        heading: '3. Analisi',
        paragraphs: [
          'L’app integra Firebase Analytics. Può raccogliere telemetria d’uso, inclusi eventi legati all’allenamento, per aiutarci a capire come viene usata l’app.',
        ],
      },
      {
        heading: '4. Segnalazione arresti anomali',
        paragraphs: [
          'L’app integra Crashlytics per raccogliere informazioni diagnostiche quando l’app si blocca, così possiamo correggere i problemi.',
        ],
      },
      {
        heading: '5. Configurazione remota',
        paragraphs: [
          'L’app usa Firebase Remote Config per aggiornare da remoto alcuni valori di configurazione dell’app.',
        ],
      },
      {
        heading: '6. Pubblicità e consenso',
        paragraphs: [
          'L’app è gratuita e supportata dalla pubblicità tramite Google AdMob. AdMob e i suoi partner possono trattare dati per mostrare e misurare la pubblicità.',
          'Dove richiesto, viene usato un meccanismo di consenso (la User Messaging Platform di Google, UMP) per raccogliere le scelte di consenso applicabili.',
        ],
      },
      {
        heading: '7. Dati trattati dai fornitori',
        paragraphs: [
          'I dati possono essere trattati da Google e da altri fornitori secondo le loro politiche, anche per analisi, segnalazione arresti anomali, pubblicità e gestione del consenso.',
        ],
      },
      {
        heading: '8. Conservazione',
        paragraphs: [
          'I dati locali dell’allenamento restano sul dispositivo finché non elimini l’app o i dati. I dati conservati dai fornitori di analisi, arresti anomali e pubblicità sono soggetti alle loro pratiche di conservazione e ai controlli a tua disposizione.',
        ],
      },
      {
        heading: '9. I tuoi controlli e diritti',
        paragraphs: [
          'Puoi gestire i dati locali eliminando sessioni o storico nell’app e usando le impostazioni del dispositivo. A seconda della tua area geografica, puoi avere diritti di accesso, correzione, cancellazione o opposizione a determinati trattamenti.',
          'Per le richieste privacy, scrivi a contact@codeneir.com con dettagli sufficienti a identificare la richiesta.',
        ],
      },
      {
        heading: '10. Contatti',
        paragraphs: [
          'Per domande o richieste sulla privacy, scrivi a contact@codeneir.com.',
        ],
      },
      {
        heading: '11. Nota importante',
        paragraphs: [
          'Voice Rep Counter non è priva di tracciamento e non è “100% offline/nessun dato trasmesso.” Le funzioni principali funzionano offline, ma pubblicità e analisi possono connettersi quando sei online.',
        ],
      },
    ],
    reviewNote:
      'Questa informativa deve essere verificata rispetto alle build Android e iOS attualmente pubblicate e ai requisiti legali applicabili prima che il sito sia considerato pronto per la produzione.',
  },
};

export const terms: Record<Locale, LegalPageContent> = {
  en: {
    metaTitle: 'Terms of Use | Voice Rep Counter',
    metaDescription:
      'The Voice Rep Counter terms of use: permitted use, scope of a timer-based fitness aid, third-party store terms, and no-medical-advice notice.',
    h1: 'Terms of Use',
    updated: '7 November 2026',
    intro:
      'These terms govern your use of the Voice Rep Counter mobile app and this website. The text below is an initial version marked for human legal review before publication.',
    sections: [
      {
        heading: '1. Acceptance',
        paragraphs: [
          'By using the app or website, you agree to these terms. If you do not agree, do not use the app or website.',
        ],
      },
      {
        heading: '2. Description of the service',
        paragraphs: [
          'Voice Rep Counter is a timer-based, voice-guided repetition pacer and rest timer. It speaks scheduled numbers and counts down rest intervals. It does not automatically detect physical repetitions.',
        ],
      },
      {
        heading: '3. Permitted use',
        paragraphs: [
          'You may use the app for your personal fitness pacing. You may not misuse the app, attempt to disrupt it, or use it in a way that violates applicable law or third-party rights.',
        ],
      },
      {
        heading: '4. Third-party store terms',
        paragraphs: [
          'Downloads may be subject to the terms of the relevant app store, such as Google Play or the Apple App Store. Those terms apply in addition to these terms.',
        ],
      },
      {
        heading: '5. No medical advice',
        paragraphs: [
          'Voice Rep Counter is not a medical device and does not provide medical advice, diagnosis, treatment, or injury-rehabilitation services. Consult a qualified professional before beginning a new exercise program, especially if you have health concerns.',
        ],
      },
      {
        heading: '6. Warranty and availability',
        paragraphs: [
          'The app is provided on an “as is” and “as available” basis to the extent permitted by applicable law. We do not guarantee uninterrupted operation, including background audio on every device.',
        ],
      },
      {
        heading: '7. Intellectual property',
        paragraphs: [
          'The app, website, brand, and content are owned by or licensed to their respective owners. You may not reproduce them without permission.',
        ],
      },
      {
        heading: '8. Privacy',
        paragraphs: [
          'Data handling is described in the Privacy Policy, which forms part of these terms.',
        ],
      },
      {
        heading: '9. Changes',
        paragraphs: [
          'We may update these terms from time to time. Material changes will be reflected on this page with a new date.',
        ],
      },
      {
        heading: '10. Contact',
        paragraphs: [
          'For questions about these terms, contact contact@codeneir.com.',
        ],
      },
      {
        heading: '11. Legal review note',
        paragraphs: [
          'This text does not specify an enforceable jurisdiction, legal entity, company registration, or VAT number because those details have not been verified. A qualified legal review is required before this page is considered final.',
        ],
      },
    ],
    reviewNote:
      'These terms are a draft and require human legal review, including jurisdiction and entity details, before publication.',
  },
  it: {
    metaTitle: 'Termini di utilizzo | Voice Rep Counter',
    metaDescription:
      'I termini di utilizzo di Voice Rep Counter: uso consentito, ambito di uno strumento fitness basato su timer, termini degli store di terze parti e avviso di non utilizzo come consiglio medico.',
    h1: 'Termini di utilizzo',
    updated: '7 novembre 2026',
    intro:
      'Questi termini regolano l’uso dell’app mobile Voice Rep Counter e di questo sito web. Il testo che segue è una versione iniziale soggetta a revisione legale prima della pubblicazione.',
    sections: [
      {
        heading: '1. Accettazione',
        paragraphs: [
          'Usando l’app o il sito accetti questi termini. Se non li accetti, non usare l’app o il sito.',
        ],
      },
      {
        heading: '2. Descrizione del servizio',
        paragraphs: [
          'Voice Rep Counter è un contatore di ripetizioni vocale e un timer di riposo basati su timer. Pronuncia numeri pianificati e conta alla rovescia le pause. Non rileva automaticamente le ripetizioni fisiche.',
        ],
      },
      {
        heading: '3. Uso consentito',
        paragraphs: [
          'Puoi usare l’app per il tuo ritmo di allenamento personale. Non puoi abusare dell’app, tentare di interromperne il funzionamento o usarla in modo contrario alla legge o ai diritti di terzi.',
        ],
      },
      {
        heading: '4. Termini degli store di terze parti',
        paragraphs: [
          'I download possono essere soggetti ai termini dello store, come Google Play o l’App Store di Apple. Tali termini si applicano in aggiunta a questi.',
        ],
      },
      {
        heading: '5. Nessun consiglio medico',
        paragraphs: [
          'Voice Rep Counter non è un dispositivo medico e non fornisce consigli medici, diagnosi, trattamenti o servizi di riabilitazione. Consulta un professionista qualificato prima di iniziare un nuovo programma di esercizi, soprattutto in presenza di problemi di salute.',
        ],
      },
      {
        heading: '6. Garanzia e disponibilità',
        paragraphs: [
          'L’app è fornita “così com’è” e “come disponibile”, nella misura consentita dalla legge applicabile. Non garantiamo un funzionamento ininterrotto, incluso l’audio in background su ogni dispositivo.',
        ],
      },
      {
        heading: '7. Proprietà intellettuale',
        paragraphs: [
          'App, sito, marchio e contenuti sono di proprietà o in licenza ai rispettivi titolari. Non puoi riprodurli senza autorizzazione.',
        ],
      },
      {
        heading: '8. Privacy',
        paragraphs: [
          'Il trattamento dei dati è descritto nell’Informativa sulla privacy, che fa parte di questi termini.',
        ],
      },
      {
        heading: '9. Modifiche',
        paragraphs: [
          'Possiamo aggiornare questi termini nel tempo. Le modifiche rilevanti saranno indicate su questa pagina con una nuova data.',
        ],
      },
      {
        heading: '10. Contatti',
        paragraphs: [
          'Per domande su questi termini, scrivi a contact@codeneir.com.',
        ],
      },
      {
        heading: '11. Nota di revisione legale',
        paragraphs: [
          'Questo testo non specifica una giurisdizione applicabile, una persona giuridica, una registrazione societaria o una partita IVA perché tali dettagli non sono stati verificati. È necessaria una revisione legale qualificata prima che questa pagina sia considerata definitiva.',
        ],
      },
    ],
    reviewNote:
      'Questi termini sono una bozza e richiedono una revisione legale, inclusi giurisdizione e dati della persona giuridica, prima della pubblicazione.',
  },
};
