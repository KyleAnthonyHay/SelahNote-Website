/**
 * Asset slots for every graphic on the page.
 *
 * Every entry is `null` until the file is dropped into `public/assets/` and the
 * path is filled in here, e.g. `heroScreen1: "/assets/hero-screen-1.png"`.
 * While a slot is `null` the page renders a labelled placeholder in its place.
 *
 * See ASSETS.md for the full list with sizes.
 */
export type AssetSrc = string | null;

export const assets = {
  /** 1024×1024 PNG. White rounded square with the SelahNote mark. Shown at 34×34 in nav + footer. */
  logoMark: "/assets/logo-mark.png" as AssetSrc,

  /** 980×2000 WebP with a transparent screen cut-out. Used by every phone mockup; the
   *  screen geometry behind the cut-out lives in PhoneMockup, so update both together. */
  phoneFrame: "/assets/phone-frame.webp",

  /* App screenshots, all 1320×2868 PNG (iPhone 17 Pro Max). */
  heroScreen1: null as AssetSrc, // Home: "Recent Notes" + Folders
  heroScreen2: null as AssetSrc, // Note: Transcript tab (Church is not just an Event)
  benefitsNotesScreen: null as AssetSrc, // Note: Summary tab (Abiding in the Vine)
  benefitsRecordScreen: null as AssetSrc, // Recording in progress with pause button
  benefitsReferencesScreen: null as AssetSrc, // Note: References tab
  featuresScreen: null as AssetSrc, // Note: References tab (large, center of Features)
  pricingScreen: null as AssetSrc, // Note: Summary tab with "Selah" banner

  /* 1254×1254 PNG illustrations on a blue gradient. */
  intelligenceStructured: null as AssetSrc,
  intelligenceTimeline: null as AssetSrc,
  intelligenceTranscript: null as AssetSrc,

  /* App icons for the "Connect" ring. Square PNGs, shown at 72 or 88 px. */
  appChatGPT: "/assets/app-chatgpt.png" as AssetSrc,
  appHallow: "/assets/app-hallow.png" as AssetSrc,
  appBible: "/assets/app-bible.png" as AssetSrc,
  appGlorify: "/assets/app-glorify.png" as AssetSrc,
  appPray: "/assets/app-pray.png" as AssetSrc,
  appNotes: "/assets/app-notes.png" as AssetSrc,

  /* Reviewer profile pictures. Square, shown at 45×45. */
  avatars: {
    richwithpassion: "/assets/avatar-richwithpassion.jpg",
    bella: "/assets/avatar-bella.jpg",
    brandon: "/assets/avatar-brandon.jpg",
    omari: "/assets/avatar-omari.jpg",
  } as Record<string, AssetSrc>,
};
