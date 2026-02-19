import { Calendar, Clock, MapPin, ExternalLink, Zap } from "lucide-react";

const workshops = [
  {
    tag: "Python",
    tagColor: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
    dotColor: "bg-yellow-400",
    title: "Intro to Python",
    description:
      "Learn Python from scratch. We'll cover variables, loops, functions, and build a small project by the end of the session.",
    date: "Every Saturday",
    time: "2:00 PM – 4:00 PM",
    location: "CS Building, Room 204",
    level: "Beginner",
    sessions: [
      "Python basics & syntax",
      "Functions & modules",
      "File I/O & exceptions",
      "Mini project: build a CLI app",
    ],
  },
  {
    tag: "Java",
    tagColor: "bg-orange-400/10 text-orange-400 border-orange-400/20",
    dotColor: "bg-orange-400",
    title: "Java Fundamentals",
    description:
      "A deep dive into Java for beginners and those prepping for CS coursework. Object-oriented programming from the ground up.",
    date: "Every Wednesday",
    time: "5:00 PM – 7:00 PM",
    location: "Tech Hub, Lab 3",
    level: "Beginner – Intermediate",
    sessions: [
      "OOP principles & classes",
      "Interfaces & inheritance",
      "Collections & generics",
      "Data structures in Java",
    ],
  },
  {
    tag: "Web Dev",
    tagColor: "bg-primary/10 text-primary border-primary/20",
    dotColor: "bg-primary",
    title: "Web Development Bootcamp",
    description:
      "From HTML basics to building React apps. A practical bootcamp covering the modern web development stack.",
    date: "Every Friday",
    time: "3:00 PM – 5:30 PM",
    location: "Innovation Lab, Room 101",
    level: "All Levels",
    sessions: [
      "HTML & CSS foundations",
      "JavaScript essentials",
      "React & component design",
      "Deploy a full website",
    ],
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-24 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-widest uppercase">What's On</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            Upcoming <span className="text-gradient">Events</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join our weekly workshops and level up your skills — beginner or advanced, there's something for everyone.
          </p>
        </div>

        {/* Hackathon highlight */}
        <div className="mb-10 rounded-xl border border-primary/30 bg-primary/5 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs text-primary tracking-widest uppercase font-semibold">Hackathon</span>
                <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-bold animate-pulse">
                  OPEN
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">HackCS 2025 — 48-Hour Hackathon</h3>
              <p className="text-muted-foreground text-sm max-w-xl">
                Our flagship hackathon returns! Form a team of up to 4, build something amazing in 48 hours, and compete for prizes worth $5,000+. Open to all skill levels.
              </p>
              <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-primary" /> April 18–20, 2025</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-primary" /> Engineering Hall</span>
              </div>
            </div>
          </div>
          <a
            href="https://devpost.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 glow transition-all duration-200 shrink-0"
          >
            Register Now
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Workshop cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workshops.map((workshop) => (
            <div
              key={workshop.title}
              className="card-gradient rounded-xl border border-border p-6 glow-card hover:border-primary/40 transition-all duration-300 flex flex-col"
            >
              {/* Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-2.5 py-1 rounded-full border text-xs font-semibold font-mono ${workshop.tagColor}`}>
                  {workshop.tag}
                </span>
                <span className="text-xs text-muted-foreground">{workshop.level}</span>
              </div>

              <h3 className="text-lg font-bold mb-2">{workshop.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{workshop.description}</p>

              {/* What you'll learn */}
              <div className="mb-5">
                <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">What you'll learn</p>
                <ul className="space-y-1.5">
                  {workshop.sessions.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full ${workshop.dotColor} shrink-0`} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Meta */}
              <div className="pt-4 border-t border-border space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
                  {workshop.date}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                  {workshop.time}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  {workshop.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
