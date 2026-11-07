import type { Locale } from './site';

export interface HowItWorksContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  examples: {
    title: string;
    intro: string;
    steps: string[];
    note: string;
  }[];
  screenshotNote: string;
}

export const howItWorks: Record<Locale, HowItWorksContent> = {
  en: {
    metaTitle: 'How Voice Rep Counter Works | A Step-by-Step Tutorial',
    metaDescription:
      'Learn how to use Voice Rep Counter: create rep counter and rest timer sessions, set your pace, and build grouped routines with sequential playback.',
    h1: 'How Voice Rep Counter works',
    lead:
      'Voice Rep Counter is a timer-based, voice-guided rep pacer. You configure sessions, press Start, and listen as the app speaks each number or counts down your rest. Here are three real workflows.',
    examples: [
      {
        title: 'Push-up voice pace',
        intro: 'Set a spoken pace for a push-up set.',
        steps: [
          'Open the app and choose or create a Reps Counter session.',
          'Name it “Push-ups”.',
          'Choose 12 repetitions.',
          'Set an interval of 4 seconds between counts.',
          'Press Start and hear each number spoken while you exercise.',
          'Finish the session and review it in your history.',
        ],
        note: 'This is an illustrative configuration. The app speaks a scheduled count; it is not physically sensing completed push-ups.',
      },
      {
        title: 'Rest between sets',
        intro: 'Use a rest timer with an audible ending.',
        steps: [
          'Create a Rest Timer session.',
          'Set a duration of 60 seconds.',
          'Press Start and hear the tick sound as the interval runs.',
          'Listen for the final spoken countdown: 5, 4, 3, 2, 1, zero.',
          'Start or transition to the next configured session when applicable.',
        ],
        note: 'The spoken final countdown plus zero is part of the Rest Timer behavior.',
      },
      {
        title: 'Grouped routine',
        intro: 'Combine several sessions into a guided sequence.',
        steps: [
          'Create sessions for different exercises and rests.',
          'Assign categories to keep them organized.',
          'Reorder the sessions into your preferred flow.',
          'Use group play or enable Play Sequentially.',
          'Pause and resume as needed during the run.',
        ],
        note: 'Playback scope follows the app’s implementation rules. Not all groups are always executed in a single cross-category playlist.',
      },
    ],
    screenshotNote:
      'The images on this site are marketing illustrations. Interface details may differ from the currently published app. Authentic product screenshots will be added as they become available.',
  },
  it: {
    metaTitle: 'Come funziona Voice Rep Counter | Tutorial passo passo',
    metaDescription:
      'Scopri come usare Voice Rep Counter: crea sessioni di contatore ripetizioni e timer di riposo, imposta il ritmo e costruisci routine raggruppate con riproduzione sequenziale.',
    h1: 'Come funziona Voice Rep Counter',
    lead:
      'Voice Rep Counter è un contatore di ripetizioni vocale basato su timer. Configuri le sessioni, premi Start e ascolti l’app pronunciare ogni numero o contare alla rovescia le pause. Ecco tre flussi reali.',
    examples: [
      {
        title: 'Ritmo vocale per i piegamenti',
        intro: 'Imposta un ritmo vocale per una serie di piegamenti.',
        steps: [
          'Apri l’app e scegli o crea una sessione Contatore ripetizioni.',
          'Chiamala “Piegamenti”.',
          'Scegli 12 ripetizioni.',
          'Imposta un intervallo di 4 secondi tra un conteggio e l’altro.',
          'Premi Start e ascolta ogni numero pronunciato mentre ti alleni.',
          'Termina la sessione e rivedila nello storico.',
        ],
        note: 'Questa è una configurazione illustrativa. L’app pronuncia un conteggio pianificato: non rileva fisicamente i piegamenti completati.',
      },
      {
        title: 'Riposo tra le serie',
        intro: 'Usa un timer di riposo con fine sonora.',
        steps: [
          'Crea una sessione Timer di riposo.',
          'Imposta una durata di 60 secondi.',
          'Premi Start e ascolta il tick mentre scorre l’intervallo.',
          'Ascolta il conto alla rovescia finale: 5, 4, 3, 2, 1, zero.',
          'Avvia o passa alla sessione successiva quando previsto.',
        ],
        note: 'Il conto alla rovescia finale più lo zero fa parte del comportamento del Timer di riposo.',
      },
      {
        title: 'Routine raggruppata',
        intro: 'Combina più sessioni in una sequenza guidata.',
        steps: [
          'Crea sessioni per esercizi e pause diverse.',
          'Assegna categorie per mantenerle organizzate.',
          'Riordina le sessioni nel flusso che preferisci.',
          'Usa la riproduzione di gruppo o attiva Play Sequentially.',
          'Metti in pausa e riprendi secondo necessità.',
        ],
        note: 'L’ambito di riproduzione segue le regole dell’app. Non tutti i gruppi vengono sempre eseguiti in un’unica playlist tra categorie.',
      },
    ],
    screenshotNote:
      'Le immagini di questo sito sono illustrazioni promozionali. I dettagli dell’interfaccia possono differire dall’app attualmente pubblicata. Le schermate reali verranno aggiunte quando disponibili.',
  },
};
