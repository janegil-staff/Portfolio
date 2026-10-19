// src/data/projects.js
// All portfolio text, links and images live here. Edit this file to change the site.
// Images go in /public/screens. Set an image to null to show a placeholder frame instead.

export const site = {
  name: "Jan Egil Staff",
  studio: "Qup DA",
  role: "App developer",
  location: "Norway",
  email: "jan.egil.staff@qupda.com",
  intro:
    "I build complete apps on my own: the iPhone and Android app, the web app and the server behind them. Two of them are live today.",
};

export const projects = [
  {
    id: "recover",
    name: "Qup Recover",
    tagline: "A daily companion for recovery from substance use.",
    accent: "#4A7AB5",
    accentSoft: "#DCE6F2",
    icon: "/screens/recover-icon.png",
    description: [
      "Recovery looks different for everyone. Qup Recover gives people a calm place to check in every day: what they used, how strong the cravings were, their mood and wellbeing, side effects and medication.",
      "Over time the check-ins become a calendar and a diary that show patterns at a glance. When the person is ready, they can share their data with a doctor or counsellor using a one-time code. The clinician opens it in the web dashboard, with graphs, summaries and a PDF export.",
    ],
    features: [
      {
        title: "Daily check-ins",
        text: "Substances, cravings, mood, wellbeing, side effects and notes in under a minute.",
      },
      {
        title: "Calendar and diary",
        text: "Each day is coloured by craving level, with a monthly summary and breakdown.",
      },
      {
        title: "Validated questionnaires",
        text: "GAD-7, PHQ-9, AUDIT, DAST-10, CAGE and readiness to change.",
      },
      {
        title: "Medications and reminders",
        text: "Track medicines taken each day and get notified when it's time.",
      },
      {
        title: "Share with a clinician",
        text: "A one-time code opens the data in a web dashboard with graphs and PDF export.",
      },
      {
        title: "Private by design",
        text: "PIN lock, light and dark themes, and 12 languages.",
      },
    ],
    screens: [
      { src: "/screens/recover-home.webp", alt: "Qup Recover home screen with 30-day summary" },
      { src: "/screens/recover-diary.webp", alt: "Qup Recover calendar coloured by craving level" },
      { src: "/screens/recover-login.webp", alt: "Qup Recover sign-in screen" },
    ],
    web: {
      url: "recover-online.com",
      // Several web screenshots are shown side by side
      shots: [
        { src: "/screens/recover-web-calendar.webp", alt: "Qup Recover doctor view: wellness index and calendar" },
        { src: "/screens/recover-web-graphs.webp", alt: "Qup Recover doctor view: sober streaks and substance mix" },
      ],
    },
    links: [
      { label: "App Store", href: "https://apps.apple.com/app/id6762452909" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.qupda.recover" },
      { label: "recover-online.com", href: "https://recover-online.com" },
    ],
    stack: ["Expo / React Native", "Next.js", "Node.js API", "MongoDB", "Recharts"],
  },
  {
    id: "pulse",
    name: "Qup Pulse",
    tagline: "What's happening right around you.",
    accent: "#E8457F",
    accentSoft: "#2A1650",
    dark: true, // this section uses the app's own dark look
    icon: "/screens/pulse-icon.png",
    banner: { src: "/screens/pulse-hero.webp", alt: "Two people watching the sunset over a city" },
    description: [
      "Qup Pulse is the pulse of whatever neighbourhood you're in. Post to the people who are actually near you, and see what's happening right now, whether you're in Bergen, Berlin or Bangkok.",
      "The feed ranks posts by how close to you they were made, and you decide the range: just the blocks around you or the whole world. When you meet someone interesting, you can follow them, chat, or start a voice or video call, on your phone or at quppulse.com.",
    ],
    features: [
      {
        title: "Local or global",
        text: "Set your feed to the streets around you or the whole world, whenever you like.",
      },
      {
        title: "Right now",
        text: "Posts are about the present moment, from the people sharing your space.",
      },
      {
        title: "People nearby",
        text: "Check in to be found by people close by. You can also pick a place by hand.",
      },
      {
        title: "Chat and calls",
        text: "Messages plus voice and video calls with the people you've matched with.",
      },
      {
        title: "Built for safety",
        text: "Report and block in one tap. Your profile shows your area, never your exact position.",
      },
      {
        title: "Phone and web",
        text: "The same account on iPhone, Android and quppulse.com, in 12 languages.",
      },
    ],
    screens: [
      { src: "/screens/pulse-splash.webp", alt: "Qup Pulse start screen" },
      { src: null, alt: "Qup Pulse local feed" }, // add a screenshot, e.g. "/screens/pulse-feed.webp"
      { src: null, alt: "Qup Pulse people nearby" }, // add a screenshot, e.g. "/screens/pulse-nearby.webp"
    ],
    web: {
      url: "quppulse.com",
      // Several web screenshots are shown side by side
      shots: [
        { src: "/screens/pulse-web-discover.webp", alt: "Qup Pulse on the web: people nearby in Bergen" },
        { src: "/screens/pulse-web-feed.webp", alt: "Qup Pulse on the web: the nearby feed" },
      ],
    },
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/qup-pulse/id6790453535" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.qup.pulse" },
      { label: "quppulse.com", href: "https://quppulse.com" },
    ],
    stack: ["Expo / React Native", "WebRTC", "Next.js", "Node.js API", "MongoDB", "DigitalOcean"],
  },
];

export const skills = [
  {
    title: "Mobile apps",
    text: "One codebase in Expo and React Native for iPhone and Android, taken all the way through App Store and Google Play review.",
  },
  {
    title: "Web apps",
    text: "Next.js sites and dashboards that share the same account and data as the mobile app.",
  },
  {
    title: "Servers and data",
    text: "Node.js APIs with MongoDB, sign-in, admin tools and hosting on DigitalOcean.",
  },
];
