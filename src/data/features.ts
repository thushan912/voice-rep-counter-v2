import type { Locale } from './site';

export type FeatureSlug =
  | 'voice-rep-counting'
  | 'rest-timer'
  | 'custom-sessions'
  | 'sequential-workouts'
  | 'workout-history'
  | 'voice-settings';

export interface FeatureFAQ {
  q: string;
  a: string;
}

export interface FeatureDetail {
  slug: FeatureSlug;
  navLabel: string;
  cardDescription: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  example: { heading: string; body: string[] };
  howTo: { heading: string; steps: string[] };
  limitations: { heading: string; body: string[] };
  image?: 'voiceRepCounting' | 'restTimer' | 'customSessions' | 'sequentialWorkouts';
  faqs: FeatureFAQ[];
  related: { slug: FeatureSlug; label: string }[];
}

export interface FeaturesOverview {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
}

export const featureOrder: FeatureSlug[] = [
  'voice-rep-counting',
  'rest-timer',
  'custom-sessions',
  'sequential-workouts',
  'workout-history',
  'voice-settings',
];

export const featuresOverview: Record<Locale, FeaturesOverview> = {
  en: {
    metaTitle: 'Voice Rep Counter Features | Voice-Guided Reps & Rest Timers',
    metaDescription:
      'Explore Voice Rep Counter features: spoken repetition pacing, rest countdown timers, custom sessions, sequential workouts, local history, and adjustable voice settings.',
    h1: 'A focused set of voice-guided workout tools',
    lead:
      'Voice Rep Counter combines a spoken rep pacer and a rest timer with session organization and adjustable voice settings. Every feature is built around a simple idea: you choose the pace, the app speaks it.',
  },
  it: {
    metaTitle: 'Funzioni di Voice Rep Counter | Conteggio vocale e timer di riposo',
    metaDescription:
      'Scopri le funzioni di Voice Rep Counter: conteggio vocale delle ripetizioni, timer di riposo con conto alla rovescia, sessioni personalizzate, allenamenti in sequenza, storico locale e impostazioni vocali.',
    h1: 'Un set mirato di strumenti guidati dalla voce',
    lead:
      'Voice Rep Counter combina un contatore di ripetizioni vocale e un timer di riposo con l’organizzazione delle sessioni e impostazioni vocali regolabili. Ogni funzione nasce da un’idea semplice: il ritmo lo scegli tu, l’app lo pronuncia.',
  },
};

export const features: Record<Locale, Record<FeatureSlug, FeatureDetail>> = {
  en: {
    'voice-rep-counting': {
      slug: 'voice-rep-counting',
      navLabel: 'Voice Rep Counting',
      cardDescription: 'Hear each repetition spoken at the interval you choose.',
      metaTitle: 'Voice Rep Counting | Spoken Rep Timer for Workouts',
      metaDescription:
        'Use Voice Rep Counter to hear each repetition spoken at your chosen interval. A talking rep timer that speaks scheduled numbers—not sensor-based detection.',
      h1: 'A voice rep counter for your workout pace',
      lead:
        'Set a target count and the seconds between announcements, then start your session. Voice Rep Counter speaks each number at the cadence you configured, so you can keep your eyes on the movement instead of the screen.',
      example: {
        heading: 'Example: 12 reps, four seconds apart',
        body: [
          'Create a Reps Counter session, enter 12 repetitions, and set 4 seconds between announcements. When you press Start, the app speaks “1”, then “2” four seconds later, and continues through the target count at your chosen pace.',
          'This is scheduled spoken pacing. The app announces numbers on a timer; it does not watch, hear, or measure whether you actually completed each repetition. You move in time with the count, and the count is produced by the timer.',
        ],
      },
      howTo: {
        heading: 'How to set up spoken rep pacing',
        steps: [
          'Open Voice Rep Counter and create a Reps Counter session.',
          'Enter your target number of repetitions.',
          'Choose the seconds between spoken numbers.',
          'Press Start and follow the spoken count.',
          'Pause, resume, or stop whenever you need to adjust.',
        ],
      },
      limitations: {
        heading: 'What it is and what it is not',
        body: [
          'Voice Rep Counter speaks a scheduled count. It does not automatically detect physical reps through the camera, microphone, motion sensors, or wearables.',
          'It does not evaluate form, count calories, or correct technique. It is a pacing tool, not a coach that observes your movement.',
        ],
      },
      image: 'voiceRepCounting',
      faqs: [
        {
          q: 'How fast can the voice count?',
          a: 'You set the interval between numbers in each Reps Counter session. You can also adjust the speech rate in the voice settings for a faster or slower spoken number.',
        },
        {
          q: 'Does it detect each rep automatically?',
          a: 'No. It speaks numbers on a schedule you define. It does not use a camera or sensors to detect movement.',
        },
        {
          q: 'Can I pause mid-set?',
          a: 'Yes. Use Pause to hold the session, then Resume to continue from where you left off, or Stop to finish early.',
        },
      ],
      related: [
        { slug: 'rest-timer', label: 'Rest timer' },
        { slug: 'voice-settings', label: 'Voice settings' },
        { slug: 'custom-sessions', label: 'Custom sessions' },
      ],
    },
    'rest-timer': {
      slug: 'rest-timer',
      navLabel: 'Rest Timer',
      cardDescription: 'Count down rest with ticks and a spoken final five seconds.',
      metaTitle: 'Workout Rest Timer with Spoken Countdown | Voice Rep Counter',
      metaDescription:
        'A rest timer for workouts with audible ticks and a spoken final countdown. Create a 60-second rest, hear ticks, and a spoken 5-4-3-2-1 plus zero.',
      h1: 'A workout rest timer with spoken countdowns',
      lead:
        'Create a dedicated Rest Timer session for the pause between sets. It plays audible ticks while the interval runs and speaks the final five seconds—plus zero—so you know exactly when to get ready for the next set.',
      example: {
        heading: 'Example: a 60-second rest',
        body: [
          'Set a Rest Timer of 60 seconds and press Start. You hear ticks as the interval runs, then a spoken countdown through 5, 4, 3, 2, 1, and zero. The spoken ending removes the need to keep checking the screen.',
          'A preparation announcement can be configured where appropriate, but it only plays when you have set it up in the app.',
        ],
      },
      howTo: {
        heading: 'How to set up a rest countdown',
        steps: [
          'Create a Rest Timer session.',
          'Set the rest duration you want, such as 60 seconds.',
          'Optionally configure a preparation announcement.',
          'Press Start and listen for the ticks and spoken countdown.',
        ],
      },
      limitations: {
        heading: 'Verified behavior',
        body: [
          'The final five-second spoken countdown and the zero announcement are part of the Rest Timer behavior. Ticks provide a steady audible reference during the interval.',
          'The app counts time; it does not monitor whether you are actually resting or track your heart rate.',
        ],
      },
      image: 'restTimer',
      faqs: [
        {
          q: 'Does the rest timer speak the whole countdown?',
          a: 'It plays ticks through the interval and speaks the final five seconds plus zero, so you get a clear audible ending.',
        },
        {
          q: 'Can I combine rest with rep sessions?',
          a: 'Yes. Create separate rep and rest sessions, then use sequential playback or play sessions in the order you configure.',
        },
        {
          q: 'Is there a preparation announcement?',
          a: 'A preparation announcement is available where you configure it. It plays only if you have enabled it for the session.',
        },
      ],
      related: [
        { slug: 'voice-rep-counting', label: 'Voice rep counting' },
        { slug: 'sequential-workouts', label: 'Sequential workouts' },
        { slug: 'custom-sessions', label: 'Custom sessions' },
      ],
    },
    'custom-sessions': {
      slug: 'custom-sessions',
      navLabel: 'Custom Sessions',
      cardDescription: 'Create, name, organize, and reuse your rep and rest sessions.',
      metaTitle: 'Create Custom Rep & Rest Sessions | Voice Rep Counter',
      metaDescription:
        'Build custom rep counter and rest timer sessions. Name them, set targets and intervals, organize by category, and edit, duplicate, or reorder them.',
      h1: 'Create custom rep and rest sessions',
      lead:
        'Build a library of sessions that match the way you train. Give each session a name, choose its type, set the target and interval, and organize it into categories so it is ready the next time you train.',
      example: {
        heading: 'What goes into a session',
        body: [
          'Each session has a name, a type (Reps Counter or Rest Timer), and the values that drive it: a repetition target and interval for reps, or a duration for rest.',
          'You can edit, duplicate, delete, and reorder sessions, and group them into categories. Because sessions are saved on your device, your routine is there when you return.',
        ],
      },
      howTo: {
        heading: 'How to build a session',
        steps: [
          'Choose Reps Counter or Rest Timer.',
          'Enter a name, such as “Push-ups” or “Rest 60s”.',
          'Set the target count and interval, or the rest duration.',
          'Save the session and optionally assign a category.',
          'Edit, duplicate, reorder, or delete sessions as your routine changes.',
        ],
      },
      limitations: {
        heading: 'Local by design',
        body: [
          'Sessions are stored locally on your device. There is no account-based cloud sync.',
          'You can export and import your session templates as JSON backups.',
        ],
      },
      image: 'customSessions',
      faqs: [
        {
          q: 'Can I duplicate a session?',
          a: 'Yes. Duplicate an existing session to use it as a starting point for a new variation.',
        },
        {
          q: 'Can I organize sessions into categories?',
          a: 'Yes. Sessions can be grouped and categorized, then reordered to match your routine.',
        },
        {
          q: 'Are my sessions synced to the cloud?',
          a: 'No. Sessions are stored locally on your device. You can back them up using JSON export and import.',
        },
      ],
      related: [
        { slug: 'sequential-workouts', label: 'Sequential workouts' },
        { slug: 'workout-history', label: 'Workout history' },
        { slug: 'voice-rep-counting', label: 'Voice rep counting' },
      ],
    },
    'sequential-workouts': {
      slug: 'sequential-workouts',
      navLabel: 'Sequential Workouts',
      cardDescription: 'Group sessions and play them in sequence for a guided routine.',
      metaTitle: 'Sequential Workout Sessions | Play Sessions in Sequence',
      metaDescription:
        'Group rep and rest sessions, reorder them, and use optional sequential playback or Play All to move through a configured workout routine.',
      h1: 'Play your workout sessions in sequence',
      lead:
        'Turn separate rep and rest sessions into a flowing routine. Group them, set the order, and use optional sequential playback or Play All to move from one configured session to the next.',
      example: {
        heading: 'From one exercise to the next',
        body: [
          'You might configure a “Push-ups” rep session, a “Rest 60s” timer, and a “Squats” rep session. With sequential playback enabled, the app can advance to the next configured session when one finishes, so you do not have to rebuild the routine each time.',
          'Playback scope follows the app’s implementation rules: play the sessions you have organized for the run rather than assuming every category is always combined into one cross-category playlist.',
        ],
      },
      howTo: {
        heading: 'How to build a sequence',
        steps: [
          'Create the individual rep and rest sessions you want to use.',
          'Assign categories and reorder the sessions into the desired flow.',
          'Use group play or enable the optional Play Sequentially setting.',
          'Press Play All to run through the configured sessions, pausing or resuming as needed.',
        ],
      },
      limitations: {
        heading: 'How playback is scoped',
        body: [
          'Sequential playback advances through the sessions you configure for the run. The exact transition behavior and grouping rules follow the app’s implementation.',
          'This is scheduling, not exercise recognition. The app does not know whether you completed a movement.',
        ],
      },
      image: 'sequentialWorkouts',
      faqs: [
        {
          q: 'What is the difference between Play All and Play Sequentially?',
          a: 'Play All runs your selected sessions, while the optional Play Sequentially setting controls automatic advancement between sessions. The exact behavior follows the app’s configured rules.',
        },
        {
          q: 'Can I pause a sequence?',
          a: 'Yes. Pause and Resume are supported, so you can hold a sequence and continue when you are ready.',
        },
        {
          q: 'Do I need to rebuild the routine every time?',
          a: 'No. Save and order your sessions once, then reuse the sequence when you train.',
        },
      ],
      related: [
        { slug: 'custom-sessions', label: 'Custom sessions' },
        { slug: 'rest-timer', label: 'Rest timer' },
        { slug: 'workout-history', label: 'Workout history' },
      ],
    },
    'workout-history': {
      slug: 'workout-history',
      navLabel: 'Workout History',
      cardDescription: 'Review completed sessions and back up templates as JSON.',
      metaTitle: 'Workout History & JSON Backup | Voice Rep Counter',
      metaDescription:
        'Review completed workout sessions stored on your device and back up or restore session templates with JSON export and import. No cloud account required.',
      h1: 'Review completed workouts and back up your sessions',
      lead:
        'Keep a simple record of the sessions you complete. Review local history entries, remove ones you no longer need, and back up your session templates as JSON so your routines are safe on your own device.',
      example: {
        heading: 'Local history and JSON backup',
        body: [
          'Completed sessions are recorded locally on your device. You can open an entry to review its details and delete entries you no longer want to keep.',
          'For your session templates, export a JSON backup to a file and import it later to restore your configured routines on a compatible device.',
        ],
      },
      howTo: {
        heading: 'How to review and back up',
        steps: [
          'Open the history view to see your completed sessions.',
          'Open an entry to review its recorded details.',
          'Delete individual entries when you want to tidy the list.',
          'Use JSON export to save your session templates, and import to restore them.',
        ],
      },
      limitations: {
        heading: 'Stored locally, no cloud sync',
        body: [
          'History and session templates are stored on your device. There is no account-based cloud sync.',
          'The app records what you configured and completed; it does not produce performance charts or analyze physical output.',
        ],
      },
      faqs: [
        {
          q: 'Where is my history stored?',
          a: 'Completed-session history is stored locally on your device.',
        },
        {
          q: 'Can I back up my sessions?',
          a: 'Yes. Export your session templates as a JSON file and import that file later to restore them.',
        },
        {
          q: 'Does history sync between devices?',
          a: 'No. There is no account-based cloud sync; data stays on the device unless you move a JSON backup yourself.',
        },
      ],
      related: [
        { slug: 'custom-sessions', label: 'Custom sessions' },
        { slug: 'sequential-workouts', label: 'Sequential workouts' },
        { slug: 'voice-rep-counting', label: 'Voice rep counting' },
      ],
    },
    'voice-settings': {
      slug: 'voice-settings',
      navLabel: 'Voice Settings',
      cardDescription: 'Adjust speech rate, pitch, volume, language, and haptics.',
      metaTitle: 'Adjustable Voice Settings | Voice Rep Counter',
      metaDescription:
        'Adjust speech rate, pitch, volume, spoken language, haptic feedback, and audio ducking in Voice Rep Counter. Voice behavior can vary by device.',
      h1: 'Adjust your workout’s spoken voice',
      lead:
        'Tune the spoken coaching to your liking. Adjust speech rate, pitch, and volume, choose the available spoken language, and set haptic feedback and audio-ducking behavior to fit your environment.',
      example: {
        heading: 'What you can adjust',
        body: [
          'Speech rate changes how quickly numbers are spoken, while pitch and volume shape how the voice sounds. You can also select from the available TTS languages—English, Italian, Spanish, French, and German are present in the audited app, with English locale options.',
          'Haptic feedback and an audio-ducking setting are available. Actual voice and background-audio behavior can vary by device and operating system.',
        ],
      },
      howTo: {
        heading: 'How to adjust the voice',
        steps: [
          'Open the voice settings in the app.',
          'Adjust speech rate, pitch, and volume to your preference.',
          'Choose the spoken language available on your device.',
          'Toggle haptic feedback and audio ducking as needed.',
        ],
      },
      limitations: {
        heading: 'Device variance',
        body: [
          'Voice availability and background-audio behavior depend on the device and operating system. The audited build has no dedicated Android foreground service, so screen-off behavior is not guaranteed on every phone.',
          'Available languages are fixed by the app; this is not an “unlimited voice languages” feature.',
        ],
      },
      faqs: [
        {
          q: 'Which spoken languages are available?',
          a: 'The audited app supports English, Italian, Spanish, French, and German, with English locale options. Voice availability may depend on your device.',
        },
        {
          q: 'Can I change the volume of the voice?',
          a: 'Yes. Volume, speech rate, and pitch can be adjusted in the voice settings.',
        },
        {
          q: 'What is audio ducking?',
          a: 'Audio ducking reduces other audio while the voice speaks. Its behavior can vary by device and configuration.',
        },
      ],
      related: [
        { slug: 'voice-rep-counting', label: 'Voice rep counting' },
        { slug: 'rest-timer', label: 'Rest timer' },
        { slug: 'custom-sessions', label: 'Custom sessions' },
      ],
    },
  },

  it: {
    'voice-rep-counting': {
      slug: 'voice-rep-counting',
      navLabel: 'Conteggio vocale',
      cardDescription: 'Ascolta ogni ripetizione all’intervallo che scegli.',
      metaTitle: 'Conteggio vocale delle ripetizioni | Timer vocale per allenamento',
      metaDescription:
        'Usa Voice Rep Counter per ascoltare ogni ripetizione all’intervallo che scegli. Un timer che pronuncia numeri pianificati, non un rilevamento basato su sensori.',
      h1: 'Un contatore vocale per il ritmo del tuo allenamento',
      lead:
        'Imposta il numero di ripetizioni e i secondi tra un annuncio e l’altro, poi avvia la sessione. Voice Rep Counter pronuncia ogni numero al ritmo che hai configurato, così puoi concentrarti sul movimento invece che sullo schermo.',
      example: {
        heading: 'Esempio: 12 ripetizioni a quattro secondi',
        body: [
          'Crea una sessione Contatore ripetizioni, inserisci 12 ripetizioni e imposta 4 secondi tra un annuncio e l’altro. Quando premi Start, l’app pronuncia “1”, poi “2” quattro secondi dopo, e continua fino al numero impostato al tuo ritmo.',
          'È un conteggio vocale pianificato. L’app annuncia i numeri su un timer: non guarda, non ascolta e non misura se hai davvero completato ogni ripetizione. Ti muovi seguendo il conteggio, prodotto dal timer.',
        ],
      },
      howTo: {
        heading: 'Come impostare il conteggio vocale',
        steps: [
          'Apri Voice Rep Counter e crea una sessione Contatore ripetizioni.',
          'Inserisci il numero di ripetizioni desiderato.',
          'Scegli i secondi tra un numero e l’altro.',
          'Premi Start e segui il conteggio vocale.',
          'Metti in pausa, riprendi o ferma quando serve.',
        ],
      },
      limitations: {
        heading: 'Cosa è e cosa non è',
        body: [
          'Voice Rep Counter pronuncia un conteggio pianificato. Non rileva automaticamente le ripetizioni fisiche tramite fotocamera, microfono, sensori di movimento o dispositivi indossabili.',
          'Non valuta la forma, non conta le calorie e non corregge la tecnica. È uno strumento di ritmo, non un coach che osserva il movimento.',
        ],
      },
      image: 'voiceRepCounting',
      faqs: [
        {
          q: 'Quanto veloce può contare la voce?',
          a: 'Imposti tu l’intervallo tra i numeri in ogni sessione Contatore ripetizioni. Puoi anche regolare la velocità della voce nelle impostazioni vocali.',
        },
        {
          q: 'Rileva automaticamente ogni ripetizione?',
          a: 'No. Pronuncia i numeri secondo il ritmo che definisci tu. Non usa fotocamera o sensori per rilevare il movimento.',
        },
        {
          q: 'Posso mettere in pausa durante la serie?',
          a: 'Sì. Usa Pausa per fermare momentaneamente la sessione, poi Riprendi per continuare, oppure Stop per terminare prima.',
        },
      ],
      related: [
        { slug: 'rest-timer', label: 'Timer di riposo' },
        { slug: 'voice-settings', label: 'Impostazioni vocali' },
        { slug: 'custom-sessions', label: 'Sessioni personalizzate' },
      ],
    },
    'rest-timer': {
      slug: 'rest-timer',
      navLabel: 'Timer di riposo',
      cardDescription: 'Conta alla rovescia con tick e ultimi cinque secondi vocali.',
      metaTitle: 'Timer di riposo con conto alla rovescia vocale | Voice Rep Counter',
      metaDescription:
        'Un timer di riposo per l’allenamento con tick sonori e conto alla rovescia vocale finale. Crea una pausa da 60 secondi e ascolta 5-4-3-2-1 più zero.',
      h1: 'Un timer di riposo con conto alla rovescia vocale',
      lead:
        'Crea una sessione Timer di riposo dedicata alla pausa tra le serie. Riproduce tick sonori mentre scorre l’intervallo e pronuncia gli ultimi cinque secondi, più lo zero, così sai esattamente quando prepararti per la serie successiva.',
      example: {
        heading: 'Esempio: una pausa da 60 secondi',
        body: [
          'Imposta un Timer di riposo di 60 secondi e premi Start. Ascolti i tick mentre scorre l’intervallo, poi il conto alla rovescia vocale 5, 4, 3, 2, 1 e zero. La fine sonora evita di controllare continuamente lo schermo.',
          'Un annuncio di preparazione può essere configurato quando appropriato, ma viene riprodotto solo se lo hai impostato nell’app.',
        ],
      },
      howTo: {
        heading: 'Come impostare il conto alla rovescia',
        steps: [
          'Crea una sessione Timer di riposo.',
          'Imposta la durata desiderata, ad esempio 60 secondi.',
          'Configura eventualmente un annuncio di preparazione.',
          'Premi Start e ascolta i tick e il conto alla rovescia vocale.',
        ],
      },
      limitations: {
        heading: 'Comportamento verificato',
        body: [
          'Il conto alla rovescia vocale degli ultimi cinque secondi e l’annuncio dello zero fanno parte del Timer di riposo. I tick offrono un riferimento sonoro costante durante l’intervallo.',
          'L’app conta il tempo: non controlla se stai davvero riposando e non monitora la frequenza cardiaca.',
        ],
      },
      image: 'restTimer',
      faqs: [
        {
          q: 'Il timer pronuncia l’intero conto alla rovescia?',
          a: 'Riproduce i tick durante l’intervallo e pronuncia gli ultimi cinque secondi più lo zero, per una fine sonora chiara.',
        },
        {
          q: 'Posso combinare riposo e sessioni di ripetizioni?',
          a: 'Sì. Crea sessioni separate di ripetizioni e riposo, poi usa la riproduzione sequenziale o riproduci le sessioni nell’ordine configurato.',
        },
        {
          q: 'C’è un annuncio di preparazione?',
          a: 'Un annuncio di preparazione è disponibile se lo configuri. Viene riprodotto solo se lo hai attivato per la sessione.',
        },
      ],
      related: [
        { slug: 'voice-rep-counting', label: 'Conteggio vocale' },
        { slug: 'sequential-workouts', label: 'Allenamenti in sequenza' },
        { slug: 'custom-sessions', label: 'Sessioni personalizzate' },
      ],
    },
    'custom-sessions': {
      slug: 'custom-sessions',
      navLabel: 'Sessioni personalizzate',
      cardDescription: 'Crea, rinomina, organizza e riutilizza le tue sessioni.',
      metaTitle: 'Crea sessioni personalizzate di ripetizioni e riposo | Voice Rep Counter',
      metaDescription:
        'Crea sessioni personalizzate di contatore ripetizioni e timer di riposo. Assegna un nome, imposta obiettivi e intervalli, organizza per categoria e modifica, duplica o riordina.',
      h1: 'Crea sessioni personalizzate di ripetizioni e riposo',
      lead:
        'Costruisci una raccolta di sessioni che rispecchi il tuo modo di allenarti. Dai un nome a ogni sessione, scegli il tipo, imposta obiettivo e intervallo e organizzala in categorie, pronta per il prossimo allenamento.',
      example: {
        heading: 'Cosa contiene una sessione',
        body: [
          'Ogni sessione ha un nome, un tipo (Contatore ripetizioni o Timer di riposo) e i valori che la guidano: numero di ripetizioni e intervallo per il conteggio, oppure una durata per il riposo.',
          'Puoi modificare, duplicare, eliminare e riordinare le sessioni, e raggrupparle in categorie. Poiché sono salvate sul dispositivo, la tua routine è lì quando torni.',
        ],
      },
      howTo: {
        heading: 'Come creare una sessione',
        steps: [
          'Scegli Contatore ripetizioni o Timer di riposo.',
          'Inserisci un nome, ad esempio “Piegamenti” o “Riposo 60s”.',
          'Imposta il numero di ripetizioni e l’intervallo, oppure la durata del riposo.',
          'Salva la sessione e assegna eventualmente una categoria.',
          'Modifica, duplica, riordina o elimina le sessioni quando cambia la routine.',
        ],
      },
      limitations: {
        heading: 'Locale per progettazione',
        body: [
          'Le sessioni sono salvate localmente sul dispositivo. Non esiste sincronizzazione cloud basata su account.',
          'Puoi esportare e importare i modelli di sessione come backup JSON.',
        ],
      },
      image: 'customSessions',
      faqs: [
        {
          q: 'Posso duplicare una sessione?',
          a: 'Sì. Duplica una sessione esistente per usarla come base per una nuova variante.',
        },
        {
          q: 'Posso organizzare le sessioni in categorie?',
          a: 'Sì. Le sessioni possono essere raggruppate e classificate, poi riordinate in base alla tua routine.',
        },
        {
          q: 'Le sessioni sono sincronizzate sul cloud?',
          a: 'No. Sono salvate localmente sul dispositivo. Puoi farne il backup con esportazione e importazione JSON.',
        },
      ],
      related: [
        { slug: 'sequential-workouts', label: 'Allenamenti in sequenza' },
        { slug: 'workout-history', label: 'Storico' },
        { slug: 'voice-rep-counting', label: 'Conteggio vocale' },
      ],
    },
    'sequential-workouts': {
      slug: 'sequential-workouts',
      navLabel: 'Allenamenti in sequenza',
      cardDescription: 'Raggruppa le sessioni e riproducile in sequenza.',
      metaTitle: 'Sessioni in sequenza | Riproduci le sessioni una dopo l’altra',
      metaDescription:
        'Raggruppa sessioni di ripetizioni e riposo, riordinale e usa la riproduzione sequenziale opzionale o Play All per seguire una routine configurata.',
      h1: 'Riproduci le sessioni di allenamento in sequenza',
      lead:
        'Trasforma sessioni separate di ripetizioni e riposo in una routine fluida. Raggruppale, imposta l’ordine e usa la riproduzione sequenziale opzionale o Play All per passare da una sessione configurata alla successiva.',
      example: {
        heading: 'Da un esercizio al successivo',
        body: [
          'Potresti configurare una sessione di ripetizioni “Piegamenti”, un timer “Riposo 60s” e una sessione “Squat”. Con la riproduzione sequenziale attiva, l’app può passare alla sessione successiva quando una termina, senza ricostruire la routine ogni volta.',
          'L’ambito di riproduzione segue le regole dell’app: riproduci le sessioni organizzate per l’esecuzione, senza dare per scontato che ogni categoria venga sempre unita in un’unica playlist.',
        ],
      },
      howTo: {
        heading: 'Come costruire una sequenza',
        steps: [
          'Crea le singole sessioni di ripetizioni e riposo che vuoi usare.',
          'Assegna le categorie e riordina le sessioni nel flusso desiderato.',
          'Usa la riproduzione di gruppo o attiva l’impostazione opzionale Play Sequentially.',
          'Premi Play All per eseguire le sessioni configurate, con pausa e ripresa se serve.',
        ],
      },
      limitations: {
        heading: 'Come funziona la riproduzione',
        body: [
          'La riproduzione sequenziale avanza tra le sessioni che configuri per l’esecuzione. Il comportamento esatto di transizione e raggruppamento segue l’implementazione dell’app.',
          'È pianificazione, non riconoscimento degli esercizi. L’app non sa se hai completato un movimento.',
        ],
      },
      image: 'sequentialWorkouts',
      faqs: [
        {
          q: 'Qual è la differenza tra Play All e Play Sequentially?',
          a: 'Play All esegue le sessioni selezionate, mentre l’impostazione opzionale Play Sequentially controlla l’avanzamento automatico tra le sessioni. Il comportamento esatto segue le regole dell’app.',
        },
        {
          q: 'Posso mettere in pausa una sequenza?',
          a: 'Sì. Pausa e Riprendi sono supportate, così puoi sospendere una sequenza e riprenderla quando sei pronto.',
        },
        {
          q: 'Devo ricostruire la routine ogni volta?',
          a: 'No. Salva e ordina le sessioni una volta, poi riutilizza la sequenza quando ti alleni.',
        },
      ],
      related: [
        { slug: 'custom-sessions', label: 'Sessioni personalizzate' },
        { slug: 'rest-timer', label: 'Timer di riposo' },
        { slug: 'workout-history', label: 'Storico' },
      ],
    },
    'workout-history': {
      slug: 'workout-history',
      navLabel: 'Storico',
      cardDescription: 'Rivedi le sessioni completate ed esporta i modelli in JSON.',
      metaTitle: 'Storico allenamenti e backup JSON | Voice Rep Counter',
      metaDescription:
        'Rivedi le sessioni di allenamento completate salvate sul dispositivo ed esporta o ripristina i modelli con backup JSON. Nessun account cloud richiesto.',
      h1: 'Rivedi gli allenamenti completati ed esporta le sessioni',
      lead:
        'Tieni un semplice registro delle sessioni completate. Rivedi le voci dello storico locale, elimina quelle che non ti servono e fai il backup dei modelli in JSON, così le routine restano sul tuo dispositivo.',
      example: {
        heading: 'Storico locale e backup JSON',
        body: [
          'Le sessioni completate vengono registrate localmente sul dispositivo. Puoi aprire una voce per rivederne i dettagli ed eliminare quelle che non vuoi più conservare.',
          'Per i modelli di sessione, esporta un backup JSON in un file e importalo in seguito per ripristinare le routine su un dispositivo compatibile.',
        ],
      },
      howTo: {
        heading: 'Come rivedere ed esportare',
        steps: [
          'Apri la vista dello storico per vedere le sessioni completate.',
          'Apri una voce per rivederne i dettagli registrati.',
          'Elimina singole voci quando vuoi riordinare l’elenco.',
          'Usa l’esportazione JSON per salvare i modelli e l’importazione per ripristinarli.',
        ],
      },
      limitations: {
        heading: 'Salvato in locale, senza cloud',
        body: [
          'Storico e modelli di sessione sono salvati sul dispositivo. Non esiste sincronizzazione cloud basata su account.',
          'L’app registra ciò che hai configurato e completato; non produce grafici di prestazione né analizza l’output fisico.',
        ],
      },
      faqs: [
        {
          q: 'Dove viene salvato lo storico?',
          a: 'Lo storico delle sessioni completate è salvato localmente sul dispositivo.',
        },
        {
          q: 'Posso fare il backup delle sessioni?',
          a: 'Sì. Esporta i modelli di sessione come file JSON e importa quel file in seguito per ripristinarli.',
        },
        {
          q: 'Lo storico si sincronizza tra dispositivi?',
          a: 'No. Non esiste sincronizzazione cloud basata su account; i dati restano sul dispositivo, a meno che non sposti tu stesso un backup JSON.',
        },
      ],
      related: [
        { slug: 'custom-sessions', label: 'Sessioni personalizzate' },
        { slug: 'sequential-workouts', label: 'Allenamenti in sequenza' },
        { slug: 'voice-rep-counting', label: 'Conteggio vocale' },
      ],
    },
    'voice-settings': {
      slug: 'voice-settings',
      navLabel: 'Impostazioni vocali',
      cardDescription: 'Regola velocità, tono, volume, lingua e feedback aptico.',
      metaTitle: 'Impostazioni vocali regolabili | Voice Rep Counter',
      metaDescription:
        'Regola velocità, tono, volume, lingua parlata, feedback aptico e attenuazione audio in Voice Rep Counter. Il comportamento può variare in base al dispositivo.',
      h1: 'Regola la voce parlata del tuo allenamento',
      lead:
        'Personalizza la voce che ti guida. Regola velocità, tono e volume, scegli la lingua parlata disponibile e imposta feedback aptico e attenuazione audio per adattarli al tuo ambiente.',
      example: {
        heading: 'Cosa puoi regolare',
        body: [
          'La velocità cambia il ritmo con cui vengono pronunciati i numeri, mentre tono e volume modellano il suono della voce. Puoi anche scegliere tra le lingue TTS disponibili: nell’app verificata sono presenti inglese, italiano, spagnolo, francese e tedesco, con opzioni di localizzazione inglese.',
          'Sono disponibili feedback aptico e un’impostazione di attenuazione audio. Il comportamento reale della voce e dell’audio in background può variare in base a dispositivo e sistema operativo.',
        ],
      },
      howTo: {
        heading: 'Come regolare la voce',
        steps: [
          'Apri le impostazioni vocali nell’app.',
          'Regola velocità, tono e volume secondo le tue preferenze.',
          'Scegli la lingua parlata disponibile sul dispositivo.',
          'Attiva o disattiva feedback aptico e attenuazione audio se serve.',
        ],
      },
      limitations: {
        heading: 'Variazioni tra dispositivi',
        body: [
          'La disponibilità della voce e il comportamento dell’audio in background dipendono da dispositivo e sistema operativo. La build verificata non ha un servizio foreground Android dedicato, quindi il comportamento a schermo spento non è garantito su ogni telefono.',
          'Le lingue disponibili sono quelle dell’app: non si tratta di “lingue vocali illimitate”.',
        ],
      },
      faqs: [
        {
          q: 'Quali lingue parlate sono disponibili?',
          a: 'L’app verificata supporta inglese, italiano, spagnolo, francese e tedesco, con opzioni di localizzazione inglese. La disponibilità della voce può dipendere dal dispositivo.',
        },
        {
          q: 'Posso cambiare il volume della voce?',
          a: 'Sì. Volume, velocità e tono si regolano nelle impostazioni vocali.',
        },
        {
          q: 'Cos’è l’attenuazione audio?',
          a: 'Riduce l’audio di altre app mentre parla la voce. Il comportamento può variare in base a dispositivo e configurazione.',
        },
      ],
      related: [
        { slug: 'voice-rep-counting', label: 'Conteggio vocale' },
        { slug: 'rest-timer', label: 'Timer di riposo' },
        { slug: 'custom-sessions', label: 'Sessioni personalizzate' },
      ],
    },
  },
};
