export const projects = [
  {
    id: 1,
    title: "CruiseLinx",
    tagline: "Premium P2P Car Rental Marketplace & Booking Platform",
    description:
      "A premium P2P car rental marketplace enabling users to browse, book, and drive verified vehicles with offline-capable, mobile-first architecture and M-Pesa Daraja payment integration.",
    tech: ["TypeScript", "Next.js", "Convex", "Tailwind CSS", "Mapbox GL", "M-Pesa API"],
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/stanslausmuuo-spec/cruiselinx",
    live: "https://cruiselinx.vercel.app",
    gradient: "from-blue-600 to-cyan-500",
    caseStudy: {
      problem: "Traditional vehicle rental platforms lack integrated local payment gateways like M-Pesa and reliable offline PWA capabilities for remote locations.",
      solution: "Engineered CruiseLinx using Next.js 16 App Router, TypeScript, Convex real-time backend, and Safaricom M-Pesa Daraja payment gateway integration with secure webhook verification.",
      impact: "Delivered a lightning-fast, production-grade car rental marketplace with zero-downtime serverless database queries and robust Zod input validation."
    }
  },
  {
    id: 2,
    title: "Project Jarvis (Drudge)",
    tagline: "Privacy-First Voice-Enabled Personal AI Assistant",
    description:
      "A privacy-first, voice-enabled personal AI assistant powered by LiveKit WebRTC transport, local Ollama LLMs, Whisper speech-to-text, and Piper text-to-speech services.",
    tech: ["TypeScript", "Next.js", "Python", "LiveKit", "Ollama", "Docker"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
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
