import type { Locale } from './site';

export interface HomeFAQ {
  q: string;
  a: string;
}

export interface HomeFeatureBlock {
  slug: string;
  kicker: string;
  heading: string;
  body: string;
  cta: string;
  image: 'voiceRepCounting' | 'restTimer' | 'customSessions';
}

export interface HomeContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  proof: string[];
  pricing: string;
  seeHowItWorks: string;
  value: {
    heading: string;
    intro: string;
    cards: { title: string; body: string }[];
  };
  features: HomeFeatureBlock[];
  sequential: {
    kicker: string;
    heading: string;
    body: string;
    points: string[];
    cta: string;
  };
  howItWorks: {
    heading: string;
    steps: { title: string; body: string }[];
    cta: string;
  };
  panels: {
    heading: string;
    items: { title: string; body: string; href: string; linkLabel: string }[];
  };
  useCases: {
    heading: string;
    intro: string;
    cards: { title: string; body: string; href: string }[];
  };
  credibility: {
    heading: string;
    body: string;
  };
  faqHeading: string;
  faq: HomeFAQ[];
  finalCta: {
    heading: string;
    body: string;
    trust: string;
  };
}

export const home: Record<Locale, HomeContent> = {
  en: {
    metaTitle: 'Voice Rep Counter App | Spoken Reps & Workout Rest Timer',
    metaDescription:
      'Hear each repetition at your chosen pace with Voice Rep Counter. Create custom sessions, follow spoken rest countdowns, and train hands-free on iOS or Android.',
    eyebrow: 'VOICE-GUIDED WORKOUT COACH',
    h1: 'Your reps. Your pace. Counted out loud.',
    lead:
      'Set the repetitions and seconds between counts. Voice Rep Counter speaks each number at your chosen pace, then helps you time your rest and move through your workout—without constantly checking your phone.',
    proof: ['Voice-guided rep pacing', 'Spoken rest countdowns', 'No account needed'],
    pricing: 'Free with ads · Core workouts work offline',
    seeHowItWorks: 'See how it works',
    value: {
      heading: 'Stay in your workout. Let the voice do the counting.',
      intro:
        'Counting in your head or checking a timer can interrupt the rhythm of a set. Voice Rep Counter gives you an audible pace, so you can follow each rep and rest interval with less screen checking.',
      cards: [
        { title: 'Hear the next rep', body: 'Follow a spoken number at your configured interval.' },
        { title: 'Know when rest ends', body: 'Listen for timer ticks and the final spoken countdown.' },
        { title: 'Keep your routine organized', body: 'Save, group, reorder, and sequence your sessions.' },
      ],
    },
    features: [
      {
        slug: 'voice-rep-counting',
        kicker: 'Voice rep counting',
        heading: 'Every rep, spoken at your pace',
        body:
          'Choose a target count and the seconds between repetitions. Start your session and listen as Voice Rep Counter announces each number. You set the rhythm; the app handles the spoken count.',
        cta: 'Explore voice rep counting',
        image: 'voiceRepCounting',
      },
      {
        slug: 'rest-timer',
        kicker: 'Rest timer',
        heading: 'Rest intervals you can hear',
        body:
          'Create a dedicated rest timer. Hear ticks as the interval runs and a spoken countdown through the final five seconds, so you can prepare for what’s next.',
        cta: 'Explore the rest timer',
        image: 'restTimer',
      },
      {
        slug: 'custom-sessions',
        kicker: 'Custom sessions',
        heading: 'Make the workout yours',
        body:
          'Create reusable sessions with your chosen count, interval, and name. Organize them into categories, change the order, and play them in sequence when you want a guided routine.',
        cta: 'Explore custom sessions',
        image: 'customSessions',
      },
    ],
    sequential: {
      kicker: 'Sequential workouts',
      heading: 'From one exercise to the next',
      body:
        'Build a sequence of repetition and rest sessions, then enable sequential playback. Voice Rep Counter can move to the next configured session without you rebuilding the routine each time.',
      points: ['Grouped exercises', 'Reorder sessions', 'Optional sequential playback'],
      cta: 'Explore sequential workouts',
    },
    howItWorks: {
      heading: 'Four steps to a more focused set',
      steps: [
        { title: 'Create a session', body: 'Select Reps Counter or Rest Timer.' },
        { title: 'Set your pace', body: 'Choose the target count and timing, or a rest duration.' },
        { title: 'Press Start', body: 'Listen for spoken numbers or the rest countdown.' },
        { title: 'Build your routine', body: 'Save, group, sequence, and review completed sessions.' },
      ],
      cta: 'See the full workflow',
    },
    panels: {
      heading: 'Tuned to how you train',
      items: [
        {
          title: 'A voice that suits you',
          body: 'Adjust speech speed, pitch, volume, haptics, and the available spoken languages.',
          href: '/features/voice-settings/',
          linkLabel: 'Explore voice settings',
        },
        {
          title: 'Keep a record of what you did',
          body: 'Completed-session history is stored on your device, and session templates can be backed up as JSON.',
          href: '/features/workout-history/',
          linkLabel: 'Explore workout history',
        },
        {
          title: 'Your workout doesn’t require a login',
          body: 'Core counting, saved sessions, and history work offline, though ads and analytics can use the internet when available.',
          href: '/privacy/',
          linkLabel: 'Read the privacy policy',
        },
      ],
    },
    useCases: {
      heading: 'A voice-guided rhythm for different workouts',
      intro:
        'Set a spoken pace for timed reps and rests. These are configuration examples—the app does not detect movement or assess exercise form.',
      cards: [
        { title: 'Push-ups', body: 'Follow a steady spoken count.', href: '/exercises/push-up-rep-pacer/' },
        { title: 'Squats', body: 'Choose the seconds between each squat.', href: '/exercises/squat-rep-timer/' },
        { title: 'Planks', body: 'Use a timed interval and audible ending.', href: '/exercises/plank-timer/' },
        { title: 'Circuit sessions', body: 'Alternate configured rep and rest segments.', href: '/features/sequential-workouts/' },
      ],
    },
    credibility: {
      heading: 'Simple, focused workout pacing',
      body: 'Built for straightforward workout pacing: no account to create, configurable sessions saved locally, and a clear spoken count. Voice Rep Counter is a timer-based voice coach—not a camera or motion-tracking app.',
    },
    faqHeading: 'Frequently asked questions',
    faq: [
      {
        q: 'Does Voice Rep Counter automatically detect my reps?',
        a: 'No. It speaks repetition numbers at intervals you choose. You perform each repetition in time with the spoken count; the app doesn’t use a camera or motion sensors to detect movement.',
      },
      {
        q: 'Can I change how fast the voice counts?',
        a: 'Yes. Choose the time between repetitions in each Reps Counter session and adjust available voice settings such as speech rate, pitch, and volume.',
      },
      {
        q: 'Can it count down rest periods?',
        a: 'Yes. Rest Timer plays audible ticks and speaks the final five seconds, plus zero.',
      },
      {
        q: 'Can I combine more than one exercise?',
        a: 'Yes. Create and organize sessions, then use the optional sequential-play feature to move through a configured routine.',
      },
      {
        q: 'Can I use the app without creating an account?',
        a: 'Yes. No account is required.',
      },
      {
        q: 'Does it work without an internet connection?',
        a: 'Core workout counting, session management, and saved history work offline. Advertising and analytics services may use the internet when connected.',
      },
      {
        q: 'Can I save my sessions?',
        a: 'Yes. Session definitions are stored on your device. You can also export and import them as JSON backups.',
      },
      {
        q: 'Can I change the spoken language?',
        a: 'The audited app supports English, Italian, Spanish, French, and German, with English locale options. Voice availability may depend on your device.',
      },
      {
        q: 'Is Voice Rep Counter free?',
        a: 'Yes, it is free to download and supported by advertising.',
      },
      {
        q: 'Will it keep counting with my phone locked?',
        a: 'Background audio is configured in the app, but behavior may vary by device and operating system. We cannot guarantee uninterrupted screen-off counting on every phone.',
      },
    ],
    finalCta: {
      heading: 'Ready to let the voice count?',
      body: 'Choose your reps, choose your pace, and focus on the workout in front of you.',
      trust: 'Free with ads · No account needed',
    },
  },
  it: {
    metaTitle: 'Voice Rep Counter | Conteggio vocale ripetizioni e pause',
    metaDescription:
      'Ascolta ogni ripetizione al ritmo che scegli. Crea sessioni personalizzate, segui il conto alla rovescia delle pause e allenati con Voice Rep Counter.',
    eyebrow: 'ALLENAMENTO GUIDATO DALLA VOCE',
    h1: 'Le tue ripetizioni. Il tuo ritmo. Una voce che conta.',
    lead:
      'Imposta il numero di ripetizioni e i secondi tra un conteggio e l’altro. Voice Rep Counter pronuncia ogni numero al ritmo che scegli, ti accompagna durante le pause e ti aiuta a seguire la tua routine senza controllare continuamente il telefono.',
    proof: ['Conteggio guidato dalla voce', 'Conto alla rovescia delle pause', 'Nessun account richiesto'],
    pricing: 'Gratis con pubblicità · Funzioni principali offline',
    seeHowItWorks: 'Scopri come funziona',
    value: {
      heading: 'Concentrati sul movimento. Al conteggio pensa la voce.',
      intro:
        'Contare mentalmente o controllare il timer può interrompere il ritmo di una serie. Voice Rep Counter ti dà un ritmo sonoro, così puoi seguire ogni ripetizione e pausa con meno distrazioni dallo schermo.',
      cards: [
        { title: 'Segui ogni ripetizione con la voce', body: 'Ascolta il numero pronunciato all’intervallo che hai impostato.' },
        { title: 'Ascolta il conto alla rovescia delle pause', body: 'Segui i tick del timer e il conto alla rovescia finale.' },
        { title: 'Organizza le sessioni di allenamento', body: 'Salva, raggruppa, riordina e metti in sequenza le sessioni.' },
      ],
    },
    features: [
      {
        slug: 'voice-rep-counting',
        kicker: 'Conteggio delle ripetizioni',
        heading: 'Ogni ripetizione, al ritmo che scegli',
        body:
          'Scegli il numero di ripetizioni e i secondi tra una e l’altra. Avvia la sessione e ascolta Voice Rep Counter annunciare ogni numero. Il ritmo lo decidi tu; al conteggio pensa l’app.',
        cta: 'Scopri il conteggio vocale',
        image: 'voiceRepCounting',
      },
      {
        slug: 'rest-timer',
        kicker: 'Timer di riposo',
        heading: 'Pause con conto alla rovescia vocale',
        body:
          'Crea un timer di riposo dedicato. Ascolta i tick mentre scorre l’intervallo e il conto alla rovescia negli ultimi cinque secondi, così sei pronto per la serie successiva.',
        cta: 'Scopri il timer di riposo',
        image: 'restTimer',
      },
      {
        slug: 'custom-sessions',
        kicker: 'Sessioni personalizzate',
        heading: 'Crea sessioni personalizzate',
        body:
          'Crea sessioni riutilizzabili con conteggio, intervallo e nome a tua scelta. Organizzale in categorie, cambia l’ordine e riproducile in sequenza quando vuoi una routine guidata.',
        cta: 'Scopri le sessioni personalizzate',
        image: 'customSessions',
      },
    ],
    sequential: {
      kicker: 'Allenamenti in sequenza',
      heading: 'Da un esercizio al successivo',
      body:
        'Costruisci una sequenza di sessioni di ripetizioni e riposo, poi attiva la riproduzione sequenziale. Voice Rep Counter può passare alla sessione configurata successiva senza dover ricostruire la routine ogni volta.',
      points: ['Esercizi raggruppati', 'Riordina le sessioni', 'Riproduzione sequenziale opzionale'],
      cta: 'Scopri gli allenamenti in sequenza',
    },
    howItWorks: {
      heading: 'Come funziona in quattro passaggi',
      steps: [
        { title: 'Crea una sessione', body: 'Scegli Contatore ripetizioni o Timer di riposo.' },
        { title: 'Imposta il ritmo', body: 'Scegli il numero di ripetizioni e i tempi, oppure la durata del riposo.' },
        { title: 'Premi Start', body: 'Ascolta i numeri pronunciati o il conto alla rovescia.' },
        { title: 'Costruisci la routine', body: 'Salva, raggruppa, metti in sequenza e rivedi le sessioni completate.' },
      ],
      cta: 'Guarda il flusso completo',
    },
    panels: {
      heading: 'Su misura per il tuo allenamento',
      items: [
        {
          title: 'Una voce adatta a te',
          body: 'Regola velocità, tono, volume, feedback aptico e le lingue vocali disponibili.',
          href: '/features/voice-settings/',
          linkLabel: 'Scopri le impostazioni vocali',
        },
        {
          title: 'Tieni traccia di ciò che fai',
          body: 'Lo storico delle sessioni completate è salvato sul dispositivo; i modelli si possono esportare in JSON.',
          href: '/features/workout-history/',
          linkLabel: 'Scopri lo storico',
        },
        {
          title: 'Nessun login richiesto',
          body: 'Conteggio, sessioni salvate e storico funzionano offline, anche se pubblicità e analisi possono usare internet quando disponibile.',
          href: '/privacy/',
          linkLabel: 'Leggi l’informativa privacy',
        },
      ],
    },
    useCases: {
      heading: 'Un ritmo guidato dalla voce per diversi allenamenti',
      intro:
        'Imposta un ritmo vocale per ripetizioni e pause. Questi sono esempi di configurazione: l’app non rileva il movimento né valuta la forma.',
      cards: [
        { title: 'Piegamenti', body: 'Segui un conteggio vocale regolare.', href: '/exercises/push-up-rep-pacer/' },
        { title: 'Squat', body: 'Scegli i secondi tra uno squat e l’altro.', href: '/exercises/squat-rep-timer/' },
        { title: 'Plank', body: 'Usa un intervallo a tempo con fine sonora.', href: '/exercises/plank-timer/' },
        { title: 'Sessioni a circuito', body: 'Alterna segmenti di ripetizioni e riposo.', href: '/features/sequential-workouts/' },
      ],
    },
    credibility: {
      heading: 'Un ritmo semplice e mirato',
      body: 'Pensato per un ritmo di allenamento semplice: nessun account da creare, sessioni configurabili salvate in locale e un conteggio vocale chiaro. Voice Rep Counter è un coach vocale basato su timer, non un’app con fotocamera o rilevamento del movimento.',
    },
    faqHeading: 'Domande frequenti',
    faq: [
      {
        q: 'Voice Rep Counter rileva automaticamente le mie ripetizioni?',
        a: 'No. Pronuncia i numeri delle ripetizioni agli intervalli che scegli tu. Esegui ogni ripetizione seguendo il conteggio vocale; l’app non usa fotocamera o sensori di movimento per rilevare i movimenti.',
      },
      {
        q: 'Posso cambiare la velocità con cui conta la voce?',
        a: 'Sì. Scegli il tempo tra le ripetizioni in ogni sessione Contatore ripetizioni e regola le impostazioni vocali disponibili come velocità, tono e volume.',
      },
      {
        q: 'Può contare alla rovescia le pause?',
        a: 'Sì. Il Timer di riposo riproduce tick sonori e pronuncia gli ultimi cinque secondi, più lo zero.',
      },
      {
        q: 'Posso combinare più esercizi?',
        a: 'Sì. Crea e organizza le sessioni, poi usa la riproduzione sequenziale opzionale per seguire una routine configurata.',
      },
      {
        q: 'Posso usare l’app senza creare un account?',
        a: 'Sì. Non è richiesto alcun account.',
      },
      {
        q: 'Funziona senza connessione a internet?',
        a: 'Il conteggio principale, la gestione delle sessioni e lo storico funzionano offline. I servizi pubblicitari e di analisi possono usare internet quando connessi.',
      },
      {
        q: 'Posso salvare le mie sessioni?',
        a: 'Sì. Le definizioni delle sessioni sono salvate sul dispositivo. Puoi anche esportarle e importarle come backup JSON.',
      },
      {
        q: 'Posso cambiare la lingua parlata?',
        a: 'L’app verificata supporta inglese, italiano, spagnolo, francese e tedesco, con opzioni di localizzazione inglese. La disponibilità della voce può dipendere dal dispositivo.',
      },
      {
        q: 'Voice Rep Counter è gratis?',
        a: 'Sì, è gratis da scaricare e supportata dalla pubblicità.',
      },
      {
        q: 'Continua a contare con il telefono bloccato?',
        a: 'L’audio in background è configurato nell’app, ma il comportamento può variare in base a dispositivo e sistema operativo. Non possiamo garantire un conteggio ininterrotto a schermo spento su ogni telefono.',
      },
    ],
    finalCta: {
      heading: 'Pronto ad allenarti seguendo la voce?',
      body: 'Scegli le tue ripetizioni, scegli il ritmo e concentrati sull’allenamento che hai davanti.',
      trust: 'Gratis con pubblicità · Nessun account richiesto · Funzioni principali disponibili offline',
    },
  },
};
