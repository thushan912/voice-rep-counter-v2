/**
 * Single source of truth for site-wide configuration and verified product facts.
 *
 * Store URLs are recorded from the build specification and MUST be re-verified
 * against the live store listings before public release.
 */
export const SITE = {
  url: 'https://voicerepcounter.com',
  name: 'Voice Rep Counter',
  storeName: 'Voice Rep Counter Coach',
  contactEmail: 'contact@codeneir.com',
  // Legal ownership pending final human review before publishing.
  legalOwner: 'Dimuthu Thushan Lankadewa / Codeneir',
} as const;

export const APP_LINKS = {
  googlePlay: 'https://play.google.com/store/apps/details?id=com.voiceRepCounter.app',
  appStore: 'https://apps.apple.com/it/app/voice-rep-counter-coach/id6757661700',
} as const;

export const OG_IMAGE = {
  src: '/assets/images/og-cover.jpg',
  width: 1200,
  height: 630,
  alt: 'Voice Rep Counter — a voice-guided workout rep and rest timer',
} as const;

export interface ImageAsset {
  src: string;
  width: number;
  height: number;
  alt: string;
  decorative?: boolean;
}

export const IMAGES = {
  heroBackground: {
    src: '/assets/images/Desktop-Hero-Background.webp',
    width: 1672,
    height: 941,
    alt: '',
    decorative: true,
  } satisfies ImageAsset,
  appMockup: {
    src: '/assets/images/Main-App-Mockup.webp',
    width: 971,
    height: 1619,
    alt: 'Illustration of the Voice Rep Counter app interface for voice-guided workout pacing.',
  } satisfies ImageAsset,
  voiceRepCounting: {
    src: '/assets/images/Voice-Rep-Counting.webp',
    width: 1586,
    height: 992,
    alt: 'Illustration of voice-guided workout pacing with a spoken repetition count.',
  } satisfies ImageAsset,
  restTimer: {
    src: '/assets/images/Rest-Timer.webp',
    width: 1585,
    height: 992,
    alt: 'Illustration of the rest timer with a spoken countdown.',
  } satisfies ImageAsset,
  customSessions: {
    src: '/assets/images/Custom-Workout-Sessions.webp',
    width: 1586,
    height: 992,
    alt: 'Illustration of custom workout session organization.',
  } satisfies ImageAsset,
  socialSharing: {
    src: '/assets/images/Social-Sharing-Image.webp',
    width: 1731,
    height: 909,
    alt: 'Voice Rep Counter social sharing preview image.',
  } satisfies ImageAsset,
} as const;

export type Locale = 'en' | 'it';
