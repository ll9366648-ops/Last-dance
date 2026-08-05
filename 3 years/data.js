/*
  ============================================================
  EDIT THIS FILE ONLY. Everything else you can leave alone.
  ============================================================

  Add one object per photo or video, in the order you took them
  (oldest first — the code sorts page 2 newest-first automatically).

  type: "image" or "video"
  src:  the file path — put your actual files in the /media folder
        next to this one, e.g. media/2024-02-14.jpg
  date: whatever you want shown, e.g. "Feb 14, 2024"
  caption: one short line about that memory (keep it short, it hits harder)

  The very first entry becomes "Day 1" on page 1.
  The very last entry becomes "Today" on page 1.
  ALL entries (photos + videos) show on page 2, newest to oldest.
*/

const STORY = [
  {
    type: "image",
    src: "./p/WhatsApp Image 2026-08-05 at 8.47.19 PM(5).jpeg",
    date: "Day 1 — Jan 1, 2024",
    caption: "The first photo of us."
  },
  {
    type: "image",
    src: "./p/WhatsApp Image 2026-08-05 at 8.47.19 PM(4).jpeg",
    date: "Nov 7, 2023",
    caption: "Our first date."
  },
  {
    type: "image",
    src: "./p/WhatsApp Image 2026-08-05 at 8.47.19 PM(3).jpeg",
    date: "Nov 13, 2023",
    caption: "Walking home, just us two."
  },
  {
    type: "image",
    src: "./p/WhatsApp Image 2026-08-05 at 8.47.19 PM(2).jpeg",
    date: "Nov 21, 2023",
    caption: "Second date."
  },
  {
    type: "image",
    src: "./p/WhatsApp Image 2026-08-05 at 8.47.19 PM(1).jpeg",
    date: "Dec 12, 2023",
    caption: "Third date."
  },
  {
    type: "image",
    src: "./p/WhatsApp Image 2026-08-05 at 8.47.18 PM(2).jpeg",
    date: "Feb 29, 2024",
    caption: "First 3abat pose."
  },
  {
    type: "image",
    src: "./p/WhatsApp Image 2026-08-05 at 8.47.18 PM(3).jpeg",
    date: "Dec 25, 2024",
    caption: "Shopping time."
  },
  {
    type: "image",
    src: "./p/WhatsApp Image 2026-08-05 at 8.47.18 PM(1).jpeg",
    date: "Feb 29, 2024",
    caption: "Pharma date."
  },
  {
    type: "image",
    src: "./p/WhatsApp Image 2026-08-05 at 8.47.18 PM.jpeg",
    date: "Jun 2, 2024",
    caption: "Dr.hala ebrahem gift"
  },
  {
    type: "image",
    src: "./p/WhatsApp Image 2026-08-05 at 8.47.17 PM(4).jpeg",
    date: "Jun 2, 2024",
    caption: "Perfect match."
  },
  {
    type: "image",
    src: "./p/WhatsApp Image 2026-08-05 at 8.47.17 PM(3).jpeg",
    date: "Feb 13, 2024",
    caption: "Our baby (talia & marwan)."
  },
  {
    type: "image",
    src: "./p/WhatsApp Image 2026-08-05 at 8.47.17 PM(1).jpeg",
    date: "Feb 11, 2024",
    caption: "Valantine day."
  },
  {
    type: "image",
    src: "./p/WhatsApp Image 2026-08-05 at 8.47.16 PM.jpeg",
    date: "mar 10, 2025",
    caption: "2 year anniversary."
  },
  {
    type: "image",
    src: "./p/WhatsApp Image 2026-08-05 at 8.50.29 PM.jpeg",
    date: "jun 12, 2026",
    caption: "Last photo together."
  },
   {
    type: "image",
    src: "./p/WhatsApp Image 2026-08-05 at 8.47.46 PM.jpeg",
    date: "july 15, 2026",
    caption: "We"
  }

  // ↓ Keep copying the pattern above for every extra photo/video.
  // With 30+ just paste more objects here, comma-separated.
];


const MEMORIES = [
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.27 PM(3).jpeg",
    date: "April, 2023",
    caption: "WhatsApp memories"
  },
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.00 PM(1).jpeg",
    date: "April, 2023",
    caption: "Blabn date (Bl2 bl2 bl2)"
  },
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.29 PM(1).jpeg",
    date: "April, 2023",
    caption: "WhatsApp memories"
  },
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.25 PM.jpeg",
    date: "April, 2023",
    caption: "Dr. Hala Ebrahem"
  },
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.29 PM.jpeg",
    date: "April, 2023",
    caption: "WhatsApp memories"
  },
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.02 PM.jpeg",
    date: "March, 2025",
    caption: "anniversary"
  },
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.28 PM(6).jpeg",
    date: "April, 2023",
    caption: "WhatsApp memories"
  },
  {
    type: "video",
    src: "./p2/WhatsApp Video 2026-08-05 at 10.43.04 PM.mp4",
    date: "may 20, 2024",
    caption: "Studing"
  },
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.28 PM(5).jpeg",
    date: "April, 2023",
    caption: "WhatsApp memories"
  },
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.03 PM(1).jpeg",
    date: "April, 2023",
    caption: "Pharma date"
  },
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.28 PM(4).jpeg",
    date: "April, 2023",
    caption: "WhatsApp memories"
  },
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.26 PM(3).jpeg",
    date: "Feb 29, 2024",
    caption: "Duck boz"
  },
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.28 PM(3).jpeg",
    date: "April, 2023",
    caption: "WhatsApp memories"
  },
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.26 PM.jpeg",
    date: "March 6, 2024",
    caption: "Sholder sleep"
  },
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.28 PM(2).jpeg",
    date: "April, 2023",
    caption: "WhatsApp memories"
  },
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.03 PM(2).jpeg",
    date: "April, 2023",
    caption: "Dr. lola coffee"
  },
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.28 PM(1).jpeg",
    date: "April, 2023",
    caption: "WhatsApp memories"
  },
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.05 PM.jpeg",
    date: "April, 2024",
    caption: "Perfetroll"
  },
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.28 PM.jpeg",
    date: "April, 2023",
    caption: "WhatsApp memories"
  },
  {
  type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.26 PM(1).jpeg",
    date: "Feb 29, 2024",
    caption: "Dr. belo"
  },
  {
    type: "video",
    src: "./p2/WhatsApp Video 2026-08-05 at 10.43.21 PM.mp4",
    date: "june 2, 2024",
    caption: "43rk baz mn 7od"
  },
  {
    type: "video",
    src: "./p2/WhatsApp Video 2026-08-05 at 10.43.25 PM.mp4",
    date: "April, 2024",
    caption: "kan nfse 2gy"
  },
  {
    type: "video",
    src: "./p2/WhatsApp Video 2026-08-05 at 10.43.17 PM.mp4",
    date: "june 2, 2024",
    caption: "habd time"
  },
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.27 PM(4).jpeg",
    date: "April, 2023",
    caption: "WhatsApp memories"
  },
  {
    type: "video",
    src: "./p2/WhatsApp Video 2026-08-05 at 10.43.26 PM.mp4",
    date: "june 2, 2024",
    caption: "mnk llallah ya 5alto"
  },
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.27 PM(3).jpeg",
    date: "April, 2023",
    caption: "WhatsApp memories"
  },
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.27 PM(2).jpeg",
    date: "Nov 21, 2023",
    caption: "Coffee drink"
  },
  {
    type: "video",
    src: "./p2/WhatsApp Video 2026-08-05 at 10.43.27 PM.mp4",
    date: "june 2, 2024",
    caption: "4ab kazem date"
  },
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.27 PM(1).jpeg",
    date: "Nov 21, 2023",
    caption: "3abat pose"
  },
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.27 PM.jpeg",
    date: "Dec 12, 2023",
    caption: "Yoo yoo"
  },
  {
    type: "video",
    src: "./p2/WhatsApp Video 2026-08-05 at 10.43.27 PM(1).mp4",
    date: "june 2, 2024",
    caption: "I wish"
  },
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.26 PM(6).jpeg",
    date: "Dec 12, 2023",
    caption: "Tram (Tarek 'ya set kol')"
  },
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.26 PM(5).jpeg",
    date: "Feb 21, 2024",
    caption: "3abat pose 2"
  },
  {
    type: "video",
    src: "./p2/WhatsApp Video 2026-08-05 at 10.44.49 PM.mp4",
    date: "june 11, 2026",
    caption: "3ala seka w do8ry last tik tok"
  },
  {
    type: "video",
    src: "./p2/WhatsApp Video 2026-08-05 at 10.44.44 PM.mp4",
    date: "june 11, 2026",
    caption: "3wgt lesan last tik tok"
  },
  {
    type: "image",
    src: "./p2/WhatsApp Image 2026-08-05 at 10.43.26 PM(4).jpeg",
    date: "Feb 29, 2024",
    caption: "Eye glasses"
  }
  ];
