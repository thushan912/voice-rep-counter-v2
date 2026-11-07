import type { Locale } from './site';

export interface ContactContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  emailHeading: string;
  emailNote: string;
  privacyHeading: string;
  privacyNote: string;
  storesHeading: string;
  storesNote: string;
  responseHeading: string;
  responseNote: string;
}

export const contact: Record<Locale, ContactContent> = {
  en: {
    metaTitle: 'Contact Voice Rep Counter | Support & Privacy Requests',
    metaDescription:
      'Contact the Voice Rep Counter team for support, feedback, and privacy requests via email.',
    h1: 'Contact Voice Rep Counter',
    lead:
      'Questions, feedback, or a privacy request? Email is the fastest way to reach the team behind Voice Rep Counter.',
    emailHeading: 'Support email',
    emailNote: 'For support, feedback, and general questions.',
    privacyHeading: 'Privacy requests',
    privacyNote:
      'Use the same email for privacy-related requests such as access, correction, or deletion. Please include enough detail for us to identify your request.',
    storesHeading: 'Get the app',
    storesNote: 'Download Voice Rep Counter from the official stores.',
    responseHeading: 'Response process',
    responseNote:
      'We aim to respond to support and privacy requests as soon as practical. Response times can vary depending on volume and the nature of the request.',
  },
  it: {
    metaTitle: 'Contatta Voice Rep Counter | Supporto e richieste privacy',
    metaDescription:
      'Contatta il team di Voice Rep Counter per supporto, feedback e richieste privacy via email.',
    h1: 'Contatta Voice Rep Counter',
    lead:
      'Domande, feedback o una richiesta privacy? L’email è il modo più rapido per raggiungere il team dietro Voice Rep Counter.',
    emailHeading: 'Email di supporto',
    emailNote: 'Per supporto, feedback e domande generali.',
    privacyHeading: 'Richieste privacy',
    privacyNote:
      'Usa la stessa email per le richieste relative alla privacy, come accesso, correzione o cancellazione. Includi dettagli sufficienti per identificare la richiesta.',
    storesHeading: 'Scarica l’app',
    storesNote: 'Scarica Voice Rep Counter dagli store ufficiali.',
    responseHeading: 'Tempi di risposta',
    responseNote:
      'Cerchiamo di rispondere alle richieste di supporto e privacy il prima possibile. I tempi possono variare in base al volume e al tipo di richiesta.',
  },
};
