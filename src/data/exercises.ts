import type { Locale } from './site';

export type ExerciseSlug = 'push-up-rep-pacer' | 'squat-rep-timer' | 'plank-timer';

export interface ExerciseFAQ {
  q: string;
  a: string;
}

export interface ExerciseDetail {
  slug: ExerciseSlug;
  navLabel: string;
  cardDescription: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  why: { heading: string; body: string[] };
  example: { heading: string; body: string[] };
  clarify: { heading: string; body: string[] };
  faqs: ExerciseFAQ[];
  related: { href: string; label: string }[];
}

export interface ExercisesOverview {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  note: string;
}

export const exerciseOrder: ExerciseSlug[] = ['push-up-rep-pacer', 'squat-rep-timer', 'plank-timer'];

export const exercisesOverview: Record<Locale, ExercisesOverview> = {
  en: {
    metaTitle: 'Voice-Guided Exercise Timers | Push-ups, Squats & Plank',
    metaDescription:
      'Use Voice Rep Counter as a spoken pace for push-ups, squats, and timed plank holds. Configuration examples for rep pacing and audible rest countdowns.',
    h1: 'A voice-guided rhythm for common exercises',
    lead:
      'Set an audible cadence for timed reps and holds. These guides show configuration examples for push-ups, squats, and planks using Voice Rep Counter.',
    note: 'Voice Rep Counter does not contain an exercise library and does not provide personalized exercise prescriptions. These are configuration examples for a timer-based pacing tool.',
  },
  it: {
    metaTitle: 'Timer vocali per esercizi | Piegamenti, squat e plank',
    metaDescription:
      'Usa Voice Rep Counter come ritmo vocale per piegamenti, squat e plank. Esempi di configurazione per il conteggio delle ripetizioni e il conto alla rovescia.',
    h1: 'Un ritmo guidato dalla voce per gli esercizi più comuni',
    lead:
      'Imposta una cadenza sonora per ripetizioni e tenute a tempo. Queste guide mostrano esempi di configurazione per piegamenti, squat e plank con Voice Rep Counter.',
    note: 'Voice Rep Counter non contiene una libreria di esercizi e non fornisce prescrizioni personalizzate. Questi sono esempi di configurazione per uno strumento basato su timer.',
  },
};

export const exercises: Record<Locale, Record<ExerciseSlug, ExerciseDetail>> = {
  en: {
    'push-up-rep-pacer': {
      slug: 'push-up-rep-pacer',
      navLabel: 'Push-up rep pacer',
      cardDescription: 'Follow a steady spoken count during push-up sets.',
      metaTitle: 'Voice-Guided Push-up Rep Pacing | Voice Rep Counter',
      metaDescription:
        'Pace push-ups with a spoken count. Configure a rep target and seconds between numbers in Voice Rep Counter—a timer-paced count, not sensor detection.',
      h1: 'Voice-guided push-up rep pacing',
      lead:
        'Push-ups are easier to keep rhythmical when you do not have to count in your head. Voice Rep Counter speaks each number at an interval you choose, so you can keep your focus on the movement.',
      why: {
        heading: 'Why use an audible cadence for push-ups',
        body: [
          'Counting in your head while holding position can pull your attention away from the movement. A spoken number at a steady interval gives you a consistent external rhythm for each repetition.',
          'The pace is yours to set. If your target tempo is faster or slower, you change the seconds between numbers rather than adjusting mid-set by guesswork.',
        ],
      },
      example: {
        heading: 'Example configuration',
        body: [
          'Create a Reps Counter session named “Push-ups”, set 10 repetitions, and choose 3 seconds between numbers. Press Start and lower, press, and rise in time with each spoken count.',
          'You can use any combination that suits your training. This is an illustrative example, not a universal prescription.',
        ],
      },
      clarify: {
        heading: 'A timer-paced count, not rep detection',
        body: [
          'Voice Rep Counter announces numbers on a schedule. It does not know whether you actually completed a repetition, and it does not evaluate depth, tempo, or form.',
          'If you miss a rep or pause, the count continues on its timer. That is expected behavior for a pacing tool—not a sensor-based counter.',
        ],
      },
      faqs: [
        {
          q: 'Will the app detect my push-ups?',
          a: 'No. It speaks a scheduled count. You perform each push-up in time with the spoken numbers; the app does not use a camera or sensors to detect movement.',
        },
        {
          q: 'What interval should I use for push-ups?',
          a: 'There is no single correct value. Try starting with 3 seconds between numbers and adjust up or down to a tempo you can sustain.',
        },
        {
          q: 'Can I add a rest between push-up sets?',
          a: 'Yes. Create a separate Rest Timer session for the pause between sets, then use sequential playback to alternate push-ups and rest.',
        },
      ],
      related: [
        { href: '/features/voice-rep-counting/', label: 'Voice rep counting' },
        { href: '/features/rest-timer/', label: 'Rest timer' },
        { href: '/exercises/squat-rep-timer/', label: 'Squat rep timer' },
      ],
    },
    'squat-rep-timer': {
      slug: 'squat-rep-timer',
      navLabel: 'Squat rep timer',
      cardDescription: 'Choose the seconds between each spoken squat count.',
      metaTitle: 'Squat Rep Timer | Follow a Spoken Count During Squats',
      metaDescription:
        'Follow a spoken count during squat sets. Configure 12 reps at 4 seconds between numbers in Voice Rep Counter and separate pacing from form analysis.',
      h1: 'Follow a spoken count during squat sets',
      lead:
        'Squats benefit from a steady rhythm, but counting reps while focusing on your movement can be distracting. Voice Rep Counter speaks each number at a chosen interval so you can keep a consistent cadence.',
      why: {
        heading: 'Why use a spoken count for squats',
        body: [
          'A spoken cadence gives you an external timing reference for each squat, which can help you keep the set moving at a deliberate, consistent pace.',
          'The interval is separate from your movement quality. The app paces the time between numbers; it does not tell you how deep, fast, or controlled each squat should be.',
        ],
      },
      example: {
        heading: 'Example configuration',
        body: [
          'Create a Reps Counter session named “Squats”, set 12 repetitions, and choose 4 seconds between numbers. Start the session and time each squat to the spoken count.',
          'You can also create a short Rest Timer and reuse both sessions on your next squat workout without rebuilding them.',
        ],
      },
      clarify: {
        heading: 'Timing is not form analysis',
        body: [
          'The seconds between spoken numbers control pacing only. Voice Rep Counter does not assess squat depth, posture, or technique, and it does not count completed movements automatically.',
          'Use the spoken count as a rhythm aid, not as a substitute for safe technique or professional coaching.',
        ],
      },
      faqs: [
        {
          q: 'Does the app correct my squat form?',
          a: 'No. It paces the time between spoken numbers. It does not evaluate form, depth, or technique.',
        },
        {
          q: 'Can I reuse my squat session later?',
          a: 'Yes. Save the session on your device and reuse it for future workouts, or duplicate it to create variations.',
        },
        {
          q: 'Can I add a rest segment after squats?',
          a: 'Yes. Add a Rest Timer session and use sequential playback to move from squats to rest.',
        },
      ],
      related: [
        { href: '/features/voice-rep-counting/', label: 'Voice rep counting' },
        { href: '/features/custom-sessions/', label: 'Custom sessions' },
        { href: '/exercises/push-up-rep-pacer/', label: 'Push-up rep pacer' },
      ],
    },
    'plank-timer': {
      slug: 'plank-timer',
      navLabel: 'Plank timer',
      cardDescription: 'Use a timed interval with an audible ending for planks.',
      metaTitle: 'Audible Plank Timer for Timed Holds | Voice Rep Counter',
      metaDescription:
        'Time plank holds with Voice Rep Counter’s rest timer: audible ticks and a spoken final countdown. The app does not detect posture or completion.',
      h1: 'An audible plank timer for timed holds',
      lead:
        'Planks are timed holds, so a rep counter is not the right tool. Use Voice Rep Counter’s Rest Timer to count down your hold with ticks and a spoken final five seconds.',
      why: {
        heading: 'Why use a timer for plank holds',
        body: [
          'A plank is about holding a position for time. An audible countdown lets you keep your eyes forward and your posture steady instead of checking a clock.',
          'The spoken final countdown gives you a clear end to the interval, so you know when to release without looking at the screen.',
        ],
      },
      example: {
        heading: 'Example configuration',
        body: [
          'Create a Rest Timer session named “Plank”, set the duration you want—for example 45 seconds—and press Start. Hear ticks through the interval, then a spoken 5, 4, 3, 2, 1, zero at the end.',
        ],
      },
      clarify: {
        heading: 'Time is all it tracks',
        body: [
          'The timer counts time only. Voice Rep Counter does not detect your posture, monitor whether you stayed in position, or assess whether you completed the hold.',
          'If you adjust your position or take a break, the timer keeps running unless you pause it.',
        ],
      },
      faqs: [
        {
          q: 'Can I use the rest timer for planks?',
          a: 'Yes. Create a Rest Timer session with your chosen hold duration. It provides ticks and a spoken final countdown.',
        },
        {
          q: 'Does the app know if I am holding a proper plank?',
          a: 'No. It counts time only and does not detect posture or assess completion.',
        },
        {
          q: 'Will it tell me when the plank ends?',
          a: 'Yes. You hear ticks during the interval and a spoken 5-4-3-2-1 plus zero at the end.',
        },
      ],
      related: [
        { href: '/features/rest-timer/', label: 'Rest timer' },
        { href: '/features/voice-rep-counting/', label: 'Voice rep counting' },
        { href: '/exercises/squat-rep-timer/', label: 'Squat rep timer' },
      ],
    },
  },

  it: {
    'push-up-rep-pacer': {
      slug: 'push-up-rep-pacer',
      navLabel: 'Ritmo per piegamenti',
      cardDescription: 'Segui un conteggio vocale regolare durante i piegamenti.',
      metaTitle: 'Conteggio vocale per piegamenti | Voice Rep Counter',
      metaDescription:
        'Segui un ritmo vocale per i piegamenti. Configura un numero di ripetizioni e i secondi tra i numeri in Voice Rep Counter: un conteggio a tempo, non un rilevamento.',
      h1: 'Ritmo vocale per i piegamenti',
      lead:
        'I piegamenti sono più facili da mantenere ritmici quando non devi contare mentalmente. Voice Rep Counter pronuncia ogni numero all’intervallo che scegli, così puoi concentrarti sul movimento.',
      why: {
        heading: 'Perché usare una cadenza sonora per i piegamenti',
        body: [
          'Contare mentalmente mentre mantieni la posizione può distogliere l’attenzione dal movimento. Un numero pronunciato a intervallo costante ti dà un ritmo esterno regolare per ogni ripetizione.',
          'Il ritmo lo scegli tu. Se vuoi un tempo più veloce o più lento, cambi i secondi tra i numeri invece di adattarti a tentativi durante la serie.',
        ],
      },
      example: {
        heading: 'Esempio di configurazione',
        body: [
          'Crea una sessione Contatore ripetizioni chiamata “Piegamenti”, imposta 10 ripetizioni e scegli 3 secondi tra i numeri. Premi Start e scendi, spingi e risali seguendo ogni conteggio.',
          'Puoi usare qualsiasi combinazione adatta al tuo allenamento. È un esempio illustrativo, non una prescrizione universale.',
        ],
      },
      clarify: {
        heading: 'Un conteggio a tempo, non un rilevamento',
        body: [
          'Voice Rep Counter annuncia i numeri secondo un programma. Non sa se hai davvero completato una ripetizione e non valuta profondità, tempo o forma.',
          'Se salti una ripetizione o ti fermi, il conteggio continua sul suo timer. È il comportamento previsto per uno strumento di ritmo, non un contatore basato su sensori.',
        ],
      },
      faqs: [
        {
          q: 'L’app rileva i miei piegamenti?',
          a: 'No. Pronuncia un conteggio pianificato. Esegui ogni piegamento seguendo i numeri; l’app non usa fotocamera o sensori per rilevare il movimento.',
        },
        {
          q: 'Quale intervallo dovrei usare per i piegamenti?',
          a: 'Non esiste un valore corretto unico. Prova a iniziare con 3 secondi tra i numeri e regola in più o in meno fino a un ritmo sostenibile.',
        },
        {
          q: 'Posso aggiungere una pausa tra le serie di piegamenti?',
          a: 'Sì. Crea una sessione Timer di riposo separata per la pausa tra le serie, poi usa la riproduzione sequenziale per alternare piegamenti e riposo.',
        },
      ],
      related: [
        { href: '/features/voice-rep-counting/', label: 'Conteggio vocale' },
        { href: '/features/rest-timer/', label: 'Timer di riposo' },
        { href: '/exercises/squat-rep-timer/', label: 'Timer per squat' },
      ],
    },
    'squat-rep-timer': {
      slug: 'squat-rep-timer',
      navLabel: 'Timer per squat',
      cardDescription: 'Scegli i secondi tra un conteggio vocale e l’altro per lo squat.',
      metaTitle: 'Timer per squat | Segui un conteggio vocale durante lo squat',
      metaDescription:
        'Segui un conteggio vocale durante le serie di squat. Configura 12 ripetizioni a 4 secondi tra i numeri in Voice Rep Counter e distingui il ritmo dall’analisi della forma.',
      h1: 'Segui un conteggio vocale durante le serie di squat',
      lead:
        'Lo squat trae beneficio da un ritmo costante, ma contare le ripetizioni mentre ti concentri sul movimento può distrarre. Voice Rep Counter pronuncia ogni numero all’intervallo scelto, per una cadenza regolare.',
      why: {
        heading: 'Perché usare un conteggio vocale per lo squat',
        body: [
          'Una cadenza vocale ti dà un riferimento temporale esterno per ogni squat, aiutandoti a mantenere la serie a un ritmo deliberato e costante.',
          'L’intervallo è separato dalla qualità del movimento. L’app scandisce il tempo tra i numeri; non ti dice quanto profondo, veloce o controllato debba essere ogni squat.',
        ],
      },
      example: {
        heading: 'Esempio di configurazione',
        body: [
          'Crea una sessione Contatore ripetizioni chiamata “Squat”, imposta 12 ripetizioni e scegli 4 secondi tra i numeri. Avvia la sessione e sincronizza ogni squat con il conteggio.',
          'Puoi anche creare un breve Timer di riposo e riutilizzare entrambe le sessioni nel prossimo allenamento senza ricostruirle.',
        ],
      },
      clarify: {
        heading: 'Il ritmo non è analisi della forma',
        body: [
          'I secondi tra i numeri controllano solo il ritmo. Voice Rep Counter non valuta profondità, postura o tecnica dello squat e non conta automaticamente i movimenti completati.',
          'Usa il conteggio vocale come aiuto per il ritmo, non come sostituto di una tecnica sicura o di un coaching professionale.',
        ],
      },
      faqs: [
        {
          q: 'L’app corregge la forma dello squat?',
          a: 'No. Scandisce il tempo tra i numeri. Non valuta forma, profondità o tecnica.',
        },
        {
          q: 'Posso riutilizzare la mia sessione di squat?',
          a: 'Sì. Salva la sessione sul dispositivo e riusala per gli allenamenti futuri, oppure duplicala per creare varianti.',
        },
        {
          q: 'Posso aggiungere una pausa dopo lo squat?',
          a: 'Sì. Aggiungi una sessione Timer di riposo e usa la riproduzione sequenziale per passare da squat a riposo.',
        },
      ],
      related: [
        { href: '/features/voice-rep-counting/', label: 'Conteggio vocale' },
        { href: '/features/custom-sessions/', label: 'Sessioni personalizzate' },
        { href: '/exercises/push-up-rep-pacer/', label: 'Ritmo per piegamenti' },
      ],
    },
    'plank-timer': {
      slug: 'plank-timer',
      navLabel: 'Timer per plank',
      cardDescription: 'Usa un intervallo a tempo con fine sonora per il plank.',
      metaTitle: 'Timer sonoro per plank | Voice Rep Counter',
      metaDescription:
        'Misura le tenute di plank con il timer di riposo di Voice Rep Counter: tick sonori e conto alla rovescia finale. L’app non rileva postura o completamento.',
      h1: 'Un timer sonoro per il plank',
      lead:
        'Il plank è una tenuta a tempo, quindi un contatore di ripetizioni non è lo strumento giusto. Usa il Timer di riposo di Voice Rep Counter per contare alla rovescia la tenuta con tick e ultimi cinque secondi vocali.',
      why: {
        heading: 'Perché usare un timer per il plank',
        body: [
          'Il plank consiste nel mantenere una posizione per un certo tempo. Un conto alla rovescia sonoro ti permette di tenere lo sguardo avanti e la postura stabile invece di controllare l’orologio.',
          'Il conto alla rovescia finale ti dà una fine chiara dell’intervallo, così sai quando rilasciare la posizione senza guardare lo schermo.',
        ],
      },
      example: {
        heading: 'Esempio di configurazione',
        body: [
          'Crea una sessione Timer di riposo chiamata “Plank”, imposta la durata desiderata—ad esempio 45 secondi—e premi Start. Ascolta i tick durante l’intervallo, poi il 5, 4, 3, 2, 1, zero alla fine.',
        ],
      },
      clarify: {
        heading: 'Conta solo il tempo',
        body: [
          'Il timer conta solo il tempo. Voice Rep Counter non rileva la postura, non controlla se sei rimasto in posizione e non valuta se hai completato la tenuta.',
          'Se regoli la posizione o fai una pausa, il timer continua a scorrere a meno che non lo metta in pausa.',
        ],
      },
      faqs: [
        {
          q: 'Posso usare il timer di riposo per il plank?',
          a: 'Sì. Crea una sessione Timer di riposo con la durata di tenuta che preferisci. Offre tick e conto alla rovescia finale.',
        },
        {
          q: 'L’app sa se mantengo un plank corretto?',
          a: 'No. Conta solo il tempo e non rileva la postura né valuta il completamento.',
        },
        {
          q: 'Mi avvisa quando il plank finisce?',
          a: 'Sì. Senti i tick durante l’intervallo e un 5-4-3-2-1 più zero alla fine.',
        },
      ],
      related: [
        { href: '/features/rest-timer/', label: 'Timer di riposo' },
        { href: '/features/voice-rep-counting/', label: 'Conteggio vocale' },
        { href: '/exercises/squat-rep-timer/', label: 'Timer per squat' },
      ],
    },
  },
};
