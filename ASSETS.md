# Assets to drop in

Every graphic on the page is a slot in [`src/data/assets.ts`](src/data/assets.ts). While a slot is `null` the site renders a labelled striped placeholder. To wire a real file in:

1. Put the file in `public/assets/` (any name).
2. Set the slot to its public path, e.g. `heroScreen1: "/assets/hero-screen-1.png"`.

The "Framer file" column is the exact asset the live site serves today, in case you want to reuse it directly (open the URL and save the image).

## Logo — DONE

`public/assets/logo-mark.png` (1024×1024) is wired to `logoMark` and shown at 34×34 in the nav and footer. A 256px copy at `src/app/icon.png` serves as the favicon.

## Phone frame — DONE

`public/assets/phone-frame.webp` (980×2000, transparent screen cut-out) is wired to `phoneFrame` and used by every phone: hero, benefits, features and pricing. Pricing crops the full frame with its wrapper, so it no longer needs the separate cropped frame the live site uses.

The screen rectangle behind the cut-out is measured from this file and set in `SCREEN` in [`src/components/ui/PhoneMockup.tsx`](src/components/ui/PhoneMockup.tsx). If the frame is swapped for a different image, re-measure and update it there.

## App screenshots (all 1320×2868 PNG, iPhone 17 Pro Max)

| Slot | Where | Screen | Framer file |
| --- | --- | --- | --- |
| `heroScreen1` | hero, left tilted phone | Home: "Recent Notes" + Folders | https://framerusercontent.com/images/w7iOiOKLrayfjXCCJadZBFh7E.png |
| `heroScreen2` | hero, right tilted phone | Transcript tab ("Church is not just an Event") | https://framerusercontent.com/images/78I76Ms5mvEsPlq1rZP9Zk3GAHc.png |
| `benefitsNotesScreen` | Benefits card 1 | Summary tab ("Abiding in the Vine") | https://framerusercontent.com/images/iS90vEenF11J4RvwL4MnqmtA8.png |
| `benefitsRecordScreen` | Benefits card 2 (peeks from top) | Same file as `heroScreen2` | https://framerusercontent.com/images/78I76Ms5mvEsPlq1rZP9Zk3GAHc.png |
| `benefitsReferencesScreen` | Benefits card 3 | References tab | https://framerusercontent.com/images/laTnM4q5rdq9oWdkndGYZRkWDGg.png |
| `featuresScreen` | Features, center phone | Same file as `benefitsReferencesScreen` | https://framerusercontent.com/images/laTnM4q5rdq9oWdkndGYZRkWDGg.png |
| `pricingScreen` | Pricing, phone between the cards | Summary tab with the "Selah" banner | https://framerusercontent.com/images/N2K90xhh4Wegs3MK7MeVGGbZs.png |

## "Three ways to revisit" illustrations (1254×1254 PNG, blue gradient background)

| Slot | Card | Framer file |
| --- | --- | --- |
| `intelligenceStructured` | Structured Notes | https://framerusercontent.com/images/MpQk3Ixn3gGNJq1ooJXTHGnm0.png |
| `intelligenceTimeline` | Scripture Timeline | https://framerusercontent.com/images/fcJASYFhoMI1H0fIFdFf8WZNU.png |
| `intelligenceTranscript` | Full Transcript | https://framerusercontent.com/images/76xZZ40yVmeUeXwjQUoUgmik4Sw.png |

## "Connect" app icons — DONE

Already in `public/assets/` and wired up (`app-chatgpt.png`, `app-hallow.png`, `app-bible.png`, `app-glorify.png`, `app-pray.png`, `app-notes.png`). Slot sizes on the ring: ChatGPT 72, Hallow 88, Glorify 72, Apple Notes 88, PRAY 88, Bible 72.

## Reviewer profile pictures — DONE

In `public/assets/` as JPEGs and wired up: `avatar-richwithpassion.jpg`, `avatar-bella.jpg`, `avatar-omari.jpg`, `avatar-brandon.jpg`. They are shown at 45×45 in black and white, like the live site.

Reviews themselves live in `src/data/content.ts` (`reviews.items`). Each entry's `id` must match a key in `assets.avatars`; initials are shown for any review without a picture.
