import type { Locale } from './site';

export interface HowItWorksExample {
  label: string;
  body?: string;
  bullets?: string[];
}

export interface HowItWorksSection {
  anchor: string;
  eyebrow: string;
  heading: string;
  description: string;
  example: HowItWorksExample;
  steps: string[];
  note?: string;
  cta: { label: string; href: string };
  image: { src: string; width: number; height: number; alt: string };
}

export interface HowItWorksCard {
  anchor: string;
  title: string;
  description: string;
}

export interface HowItWorksContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  cards: HowItWorksCard[];
  sections: HowItWorksSection[];
}

export const howItWorks: Record<Locale, HowItWorksContent> = {
  en: {
    metaTitle: 'How Voice Rep Counter Works | Reps, Rest & Routines',
    metaDescription:
      'Learn how Voice Rep Counter guides repetitions aloud, times workout rests, and organizes exercise sessions into easy-to-follow routines.',
    h1: 'How Voice Rep Counter works',
    lead:
      'Follow three real workflows to set a spoken rep pace, time your rest with an audible countdown, and organize sessions into guided routines.',
    cards: [
      {
        anchor: 'voice-rep-counting',
        title: 'Push-up Voice Pace',
        description: 'Set a spoken pace for a push-up set and follow the count.',
      },
      {
        anchor: 'rest-timer',
        title: 'Rest Between Sets',
        description: 'Time your rest and hear the final spoken countdown.',
      },
      {
        anchor: 'grouped-workouts',
        title: 'Grouped Routine',
        description: 'Organize exercises and run supported workout sequences.',
      },
    ],
    sections: [
      {
        anchor: 'voice-rep-counting',
        eyebrow: 'STEP 01 — VOICE REP COUNTING',
        heading: 'Set Your Pace. Hear Every Rep.',
        description:
          'Create a repetition-counting session, choose your target reps, and set the number of seconds between announcements. Voice Rep Counter speaks each number aloud at your chosen pace, helping you stay focused on your movement instead of watching your phone.',
        example: {
          label: '12 push-ups with a 4-second counting interval',
          body: 'The app announces each number on the configured schedule. Follow the spoken pace and complete your set.',
        },
        steps: [
          'Open Voice Rep Counter.',
          'Create or select a Reps Counter session.',
          'Choose the number of repetitions.',
          'Set the interval between counts.',
          'Press Start and follow the spoken numbers.',
        ],
        note: 'The app does not physically detect completed push-ups. It provides time-based voice pacing.',
        cta: { label: 'Explore Voice Rep Counting', href: '/features/voice-rep-counting/' },
        image: {
          src: '/assets/images/Push-up-voice-pace.webp',
          width: 1586,
          height: 992,
          alt: 'Voice Rep Counter promotional illustration showing a push-up workout with spoken repetition pacing.',
        },
      },
      {
        anchor: 'rest-timer',
        eyebrow: 'STEP 02 — REST TIMER',
        heading: 'Take Your Rest. Hear the Countdown.',
        description:
          'Create a dedicated Rest Timer session between exercises or sets. The app plays an audible tick during the interval and speaks the final five seconds of the countdown, followed by zero.',
        example: {
          label: '60-second rest between workout sets',
          body: 'Follow the audible timing cues and get ready for the next session without repeatedly checking the screen.',
        },
        steps: [
          'Create a Rest Timer session.',
          'Set the duration in minutes and seconds.',
          'Save the session.',
          'Start the timer.',
          'Listen to the ticks and final spoken countdown.',
        ],
        cta: { label: 'Explore the Rest Timer', href: '/features/rest-timer/' },
        image: {
          src: '/assets/images/Rest-between-sets.webp',
          width: 1586,
          height: 992,
          alt: 'Voice Rep Counter promotional illustration showing a rest timer between workout sets.',
        },
      },
      {
        anchor: 'grouped-workouts',
        eyebrow: 'STEP 03 — GROUPED WORKOUTS',
        heading: 'Organize Your Exercises. Keep Your Routine Flowing.',
        description:
          'Arrange workout sessions into categories such as Legs, Chest, Back, and Shoulders. Expand or collapse groups, reorder sessions, and use group playback or Play Sequentially to progress through supported workout sequences.',
        example: {
          label: 'Leg workout routine',
          bullets: ['Squats — 12 repetitions.', 'Lunges — 10 repetitions.', 'Rest Timer — 60 seconds.'],
        },
        steps: [
          'Create your workout sessions.',
          'Assign sessions to a category.',
          'Organize them in your preferred order.',
          'Expand the category to view its sessions.',
          'Start group playback or use Play Sequentially.',
        ],
        note: 'Playback follows the application’s current group and session-scope rules. Do not claim that every group automatically runs as one cross-category playlist.',
        cta: { label: 'Explore Sequential Workouts', href: '/features/sequential-workouts/' },
        image: {
          src: '/assets/images/Groupe-routine.webp',
          width: 1672,
          height: 941,
          alt: 'Voice Rep Counter promotional illustration showing grouped workout sessions and sequential playback.',
        },
      },
    ],
  },

  it: {
    metaTitle: 'Come Funziona Voice Rep Counter | Ripetizioni e Pause',
    metaDescription:
      'Scopri come Voice Rep Counter conta le ripetizioni a voce, gestisce le pause e organizza le sessioni per allenarti seguendo il tuo ritmo.',
    h1: 'Come funziona Voice Rep Counter',
    lead:
      'Segui tre flussi reali per impostare un ritmo vocale per le ripetizioni, misurare le pause con un conto alla rovescia sonoro e organizzare le sessioni in routine guidate.',
    cards: [
      {
        anchor: 'voice-rep-counting',
        title: 'Piegamenti a ritmo vocale',
        description: 'Imposta un ritmo vocale per una serie di piegamenti.',
      },
      {
        anchor: 'rest-timer',
        title: 'Riposo tra le serie',
        description: 'Misura la pausa e ascolta il conto alla rovescia finale.',
      },
      {
        anchor: 'grouped-workouts',
        title: 'Routine organizzate',
        description: 'Organizza gli esercizi e segui le sequenze supportate.',
      },
    ],
    sections: [
      {
        anchor: 'voice-rep-counting',
        eyebrow: 'PASSAGGIO 01 — CONTEGGIO VOCALE',
        heading: 'Scegli il ritmo. Ascolta ogni ripetizione.',
        description:
          'Crea una sessione di conteggio, scegli il numero di ripetizioni e imposta i secondi tra un annuncio e l’altro. Voice Rep Counter pronuncia ogni numero al ritmo che hai scelto, aiutandoti a concentrarti sul movimento senza controllare continuamente il telefono.',
        example: {
          label: '12 piegamenti con un intervallo di 4 secondi',
          body: 'L’app pronuncia ogni numero secondo l’intervallo impostato. Segui il ritmo vocale e completa la serie.',
        },
        steps: [
          'Apri Voice Rep Counter.',
          'Crea o seleziona una sessione Reps Counter.',
          'Scegli il numero di ripetizioni.',
          'Imposta l’intervallo tra i conteggi.',
          'Premi Avvia e segui i numeri pronunciati.',
        ],
        note: 'L’app non rileva fisicamente i piegamenti completati. Fornisce un ritmo vocale basato sul tempo.',
        cta: { label: 'Scopri il conteggio vocale', href: '/features/voice-rep-counting/' },
        image: {
          src: '/assets/images/Push-up-voice-pace.webp',
          width: 1586,
          height: 992,
          alt: 'Illustrazione di Voice Rep Counter durante una serie di piegamenti con conteggio vocale delle ripetizioni.',
        },
      },
      {
        anchor: 'rest-timer',
        eyebrow: 'PASSAGGIO 02 — TIMER DI RIPOSO',
        heading: 'Recupera le energie. Ascolta il conto alla rovescia.',
        description:
          'Crea una sessione Rest Timer dedicata alle pause tra esercizi o serie. L’app riproduce un segnale acustico durante l’intervallo e pronuncia gli ultimi cinque secondi del conto alla rovescia, fino allo zero.',
        example: {
          label: '60 secondi di pausa tra le serie',
          body: 'Segui i segnali acustici e preparati alla sessione successiva senza controllare continuamente lo schermo.',
        },
        steps: [
          'Crea una sessione Rest Timer.',
          'Imposta la durata in minuti e secondi.',
          'Salva la sessione.',
          'Avvia il timer.',
          'Ascolta i segnali acustici e il conto alla rovescia finale.',
        ],
        cta: { label: 'Scopri il timer di riposo', href: '/features/rest-timer/' },
        image: {
          src: '/assets/images/Rest-between-sets.webp',
          width: 1586,
          height: 992,
          alt: 'Illustrazione di Voice Rep Counter con timer di riposo tra le serie di allenamento.',
        },
      },
      {
        anchor: 'grouped-workouts',
        eyebrow: 'PASSAGGIO 03 — ALLENAMENTI ORGANIZZATI',
        heading: 'Organizza gli esercizi. Segui la tua routine.',
        description:
          'Organizza le sessioni in categorie come Gambe, Petto, Schiena e Spalle. Espandi o comprimi i gruppi, modifica l’ordine delle sessioni e utilizza la riproduzione del gruppo o l’opzione Play Sequentially per seguire le sequenze supportate dall’app.',
        example: {
          label: 'Routine per le gambe',
          bullets: ['Squat — 12 ripetizioni.', 'Affondi — 10 ripetizioni.', 'Timer di riposo — 60 secondi.'],
        },
        steps: [
          'Crea le tue sessioni di allenamento.',
          'Assegna le sessioni a una categoria.',
          'Organizzale nell’ordine che preferisci.',
          'Espandi la categoria per visualizzare le sessioni.',
          'Avvia la riproduzione del gruppo o utilizza Play Sequentially.',
        ],
        note: 'La riproduzione segue le regole attuali dell’app relative ai gruppi e alle sessioni. Non promettere l’esecuzione automatica di tutte le categorie in un’unica sequenza.',
        cta: { label: 'Scopri gli allenamenti in sequenza', href: '/features/sequential-workouts/' },
        image: {
          src: '/assets/images/Groupe-routine.webp',
          width: 1672,
          height: 941,
          alt: 'Illustrazione di Voice Rep Counter con sessioni di allenamento raggruppate e riproduzione in sequenza.',
        },
      },
    ],
  },
};
