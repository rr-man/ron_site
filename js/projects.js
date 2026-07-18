/* ==========================================================================
   Project data — the single source of truth for the Projects section.
   Add, remove, or edit entries here; js/main.js renders them into the grid.
   Each project: { title, description, tags[], demo, repo }
     - demo: live GitHub Pages URL (enable Pages on the repo). Use null to hide
       the "Live demo" button until it's deployed.
     - repo: GitHub repository URL.
   ========================================================================== */
window.PROJECTS = [
  {
    title: "CLIR Analyzer",
    description:
      "A browser-based tool that parses PBXware/Asterisk call traces into a clear, structured view — caller identity, number classification, routing and trunk info, timing, and billing. Everything runs client-side, so call data never leaves the machine.",
    tags: ["JavaScript", "HTML", "Asterisk / PBXware", "Client-side", "Telecom"],
    demo: "https://rr-man.github.io/CLIR-Analyzer/",
    repo: "https://github.com/rr-man/CLIR-Analyzer",
  },
  {
    title: "Call Flow Builder",
    description:
      "An interactive map of how inbound calls travel through a PBXware system — from provider trunk, through DID processing and operation-time gates, to every destination (IVR, queue, ring groups, extensions, voicemail). Built-in speech-to-text transcribes IVR prompts, adding real context to each step of the flow — so account managers see not just where calls go, but what callers hear.",
    tags: ["JavaScript", "HTML", "SVG", "Speech-to-Text", "Asterisk / PBXware", "Telecom"],
    demo: "https://rr-man.github.io/Call-Flow-Builder/",
    repo: "https://github.com/rr-man/Call-Flow-Builder",
  },
];
