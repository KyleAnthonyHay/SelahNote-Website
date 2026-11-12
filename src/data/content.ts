export const links = {
  appStore: "https://apps.apple.com/us/app/selahnote/id6747624373",
  email: "mailto:info@selahnote.app",
  facebook: "https://www.facebook.com/profile.php?id=61575357256909",
  instagram: "https://www.instagram.com/selahnote.app/",
  author: "https://www.instagram.com/kyleanthonyhay/",
};

export const nav = [
  { label: "Benefits", href: "#benefits" },
  { label: "Features", href: "#features" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
];

export const hero = {
  titleMuted: "Stay present.",
  title: "Keep the message.",
  body: "SelahNote records your sermon, finds every Scripture reference, so you can focus on listening instead of writing.",
};

export const challenge = {
  eyebrow: "The Challenge",
  muted:
    "Taking notes during sermons can distract you from the message and its meaning. ",
  strong: "SelahNote turns every sermon into notes you can revisit.",
};

export const benefits = {
  eyebrow: "Why SelahNote",
  titleMuted: "Smarter",
  title: "Sermon Capture",
  cards: [
    {
      title: "AI-Powered Sermon Notes",
      body: "Automatically turns every sermon into clear notes and meaningful takeaways.",
    },
    {
      title: "Record Sermons",
      body: "Capture every word with a live, searchable transcript.",
    },
    {
      title: "Smart References",
      body: "References from the sermon are detected and ready to revisit.",
    },
  ],
};

export const features = {
  eyebrow: "Features",
  titleMuted: "Built for deeper listening.",
  title: "Captured Intelligently.",
  left: [
    {
      icon: "aiNotes",
      title: "AI Sermon Notes",
      body: "Turn sermon transcripts into key takeaways.",
    },
    {
      icon: "mic",
      title: "Live Transcript",
      body: "Follow a live transcript as you record the sermon.",
    },
    {
      icon: "scripture",
      title: "Scripture Detection",
      body: "Find Scripture quotes and references throughout the sermon.",
    },
  ],
  right: [
    {
      icon: "cloudUpload",
      title: "Flexible Capture",
      body: "Record live, upload audio, or import a sermon from YouTube.",
    },
    {
      icon: "folder",
      title: "Search & Folders",
      body: "Search sermon notes and organize them into folders.",
    },
    {
      icon: "share",
      title: "Share Notes",
      body: "Share notes, transcripts, and references with others.",
    },
  ],
} as const;

export const intelligence = {
  eyebrow: "Intelligence Powered",
  titleMuted: "One message.",
  title: "Three ways to revisit.",
  cards: [
    {
      title: "Structured Notes",
      body: "Review organized notes with the sermon’s key ideas and takeaways.",
    },
    {
      title: "Scripture Timeline",
      body: "See quotes and references in the order they were mentioned.",
    },
    {
      title: "Full Transcript",
      body: "Return to the sermon’s wording whenever you need more context.",
    },
  ],
};

export const connect = {
  eyebrow: "Connect",
  titleMuted: "Works perfectly with",
  title: "the way you study.",
  body: "Keep using the Bible and note-taking apps you love. SelahNote keeps each sermon’s notes, transcript, and references together.",
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

export const reviews = {
  eyebrow: "Hear from the people",
  titleMuted: "Trusted by",
  title: "dedicated believers.",
  items: [
    {
      id: "richwithpassion",
      quote:
        "\"I love that I don't have to worry about taking notes during the sermon because SelahNote is taking notes and summarizing everything for me.\"",
      name: "@Richwithpassion",
      role: "Influencer(130K+)",
    },
    {
      id: "bella",
      quote:
        "\"The interface is stunningly minimal. It feels like an extension of my mental space rather than a cluttered tool.\"",
      name: "Bella Signorelli",
      role: "Media Manager/Creative Director",
    },
    {
      id: "omari",
      quote:
        "\"Selah has genuinely come in super clutch. Especially the days when I’m too tired to write but I have enough energy to listen.\"",
      name: "Omari Prince",
      role: "Worship Leader",
    },
    {
      id: "brandon",
      quote:
        "“SelahNote was created by someone who truly cares about helping people grow in their faith, not just making a quick buck.”",
      name: "Brandon",
      role: "Waiter",
    },
  ] satisfies Testimonial[],
};

export const pricing = {
  free: {
    name: "Free",
    price: "$0",
    suffix: "to start",
    features: [
      { icon: "wand", text: "free credit" },
      { icon: "receipt", text: "AI notes, transcript, and Scripture references" },
      { icon: "folderMinus", text: "Organize, sync, search, and share notes" },
    ],
    cta: "Start Free",
  },
  pro: {
    name: "Pro",
    monthly: { price: "$7", suffix: "/month" },
    yearly: { price: "$2.50", suffix: "/month", label: "$29.99 per year" },
    toggleLabel: "Save with the yearly plan",
    features: [
      { icon: "chart", text: "12 credits every month" },
      { icon: "alarm", text: "Complete SelahNote workflow" },
      { icon: "note", text: "Designed for a steady weekly rhythm" },
    ],
    cta: "Choose Pro",
  },
} as const;

export const faqs = {
  eyebrow: "FAQs",
  titleMuted: "Got questions?",
  title: "Here are the answers.",
  items: [
    {
      q: "What does SelahNote do?",
      a: "SelahNote records or imports sermons, creates a transcript, generates organized notes, and identifies Scripture references so you can revisit the message later.",
    },
    {
      q: "Does SelahNote automatically find Scripture references?",
      a: "Yes. SelahNote identifies quoted verses and mentioned references, then organizes them in a sermon timeline. Because detection uses AI, you should review important references.",
    },
    {
      q: "How accurate are the transcript and notes?",
      a: "Accuracy depends on audio quality, background noise, accents, and overlapping speakers. SelahNote helps capture the message, but AI-generated content may occasionally need correction.",
    },
    {
      q: "What is a credit?",
      a: "Credits determine how many new sermons you can process. Free includes one lifetime credit, Pro includes 12 credits each month, and Pro Plus includes 50 credits each month.",
    },
    {
      q: "What happens to my notes if I cancel?",
      a: "Your existing notes remain available. When the subscription period ends, your account returns to the Free plan’s processing limit.",
    },
  ],
  helpPrefix: "If you can’t find the answer or need help, email us at ",
  helpEmail: "info@selahnote.app",
};

export const footer = {
  description:
    "SelahNote records, transcribes, and organizes your sermon notes so you can focus on staying present during church.",
  columns: [
    {
      title: "Product",
      links: [
        { label: "Benefits", href: "#benefits" },
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Download", href: "#download" },
      ],
    },
    {
      title: "More",
      links: [
        { label: "Integration", href: "#connect" },
        { label: "Questions", href: "#faqs" },
        { label: "Reviews", href: "#reviews" },
        { label: "Support", href: links.email, external: true },
      ],
    },
  ],
  copyright: "SelahNote © 2026. All rights reserved.",
  madeWith: "made with <3, ",
  author: "Kyle-Anthony",
};
