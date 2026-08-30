export const projects = [
  {
    id: 1,
    title: "CruiseLinx",
    tagline: "Peer-to-Peer Car Sharing & Rental Marketplace",
    description:
      "A P2P car-sharing marketplace where car owners (hosts) can list their vehicles for rent, and renters can browse, book, and securely pay using M-Pesa Daraja integration.",
    tech: ["TypeScript", "Next.js", "Convex", "Tailwind CSS", "Mapbox GL", "M-Pesa API"],
    image: "/cruiselinx.svg",
    github: "https://github.com/stanslausmuuo-spec/cruiselinx",
    live: "https://cruiselinx.vercel.app",
    gradient: "from-blue-600 to-cyan-500",
    caseStudy: {
      problem: "Traditional vehicle rental agencies have high overhead and limited peer-to-peer options, while car owners lack a secure platform to monetize their idle vehicles with local payment integration.",
      solution: "Engineered CruiseLinx as a P2P car-sharing marketplace connecting hosts and renters, built with Next.js 16 App Router, TypeScript, Convex real-time backend, Mapbox GL for vehicle location discovery, and Safaricom M-Pesa Daraja payments.",
      impact: "Empowered car owners to seamlessly monetize idle vehicles and gave renters a reliable, mobile-first marketplace with instant booking and secure M-Pesa checkout."
    }
  },
  {
    id: 2,
    title: "Project Jarvis (Drudge)",
    tagline: "Privacy-First Voice-Enabled Personal AI Assistant",
    description:
      "A privacy-first, voice-enabled personal AI assistant powered by LiveKit WebRTC transport, local Ollama LLMs, Whisper speech-to-text, and Piper text-to-speech services.",
    tech: ["TypeScript", "Next.js", "Python", "LiveKit", "Ollama", "Docker"],
    image: "/jarvis.svg",
    github: "https://github.com/stanslausmuuo-spec/drudge",
    live: "https://jarvisa1.vercel.app",
    gradient: "from-purple-600 to-indigo-500",
    caseStudy: {
      problem: "Cloud-based voice assistants often compromise user privacy by streaming raw audio and personal interactions to external servers.",
      solution: "Built Project Jarvis to run 100% locally using Docker Compose, combining Next.js frontend, LiveKit WebRTC server, Python agents SDK, and Ollama LLM execution.",
      impact: "Achieved zero data leakage with local speech processing while delivering real-time bidirectional voice conversations."
    }
  },
  {
    id: 3,
    title: "Enterprise Event Management System (EMS)",
    tagline: "Real-Time High-Concurrency Event & Ticket Platform",
    description:
      "A production-grade, highly scalable Event Management System featuring high-concurrency ticket sales with Redis distributed locks, live gate check-ins via Socket.io, and PWA offline support.",
    tech: ["JavaScript", "Node.js", "Express", "MongoDB", "Redis", "Socket.io", "React"],
    image: "/ems.svg",
    github: "https://github.com/stanslausmuuo-spec/EMS",
    live: "https://ems200.vercel.app",
    gradient: "from-emerald-600 to-teal-500",
    caseStudy: {
      problem: "High-traffic ticket sales frequently suffer from race conditions (overselling seats) and gate check-in bottlenecks during poor network connectivity.",
      solution: "Implemented Redis atomic distributed locks (`NX` locks with Lua scripts) for seat reservations, BullMQ asynchronous PDF generation, and PWA IndexedDB offline check-in synchronization.",
      impact: "Eliminated seat overselling under high concurrency and enabled offline gate scanner operations that auto-sync upon reconnection."
    }
  },
];
