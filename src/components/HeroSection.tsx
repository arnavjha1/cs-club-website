import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/75" />
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono font-medium mb-6 tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          OPEN TO ALL STUDENTS
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
          Learn. Build.{" "}
          <span className="text-gradient">Connect.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          The Computer Science Club is your gateway to coding workshops, hackathons, code camps
          and a passionate community of developers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#events"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 glow transition-all duration-200"
          >
            Explore Events
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-md border border-border bg-secondary text-foreground font-semibold text-base hover:border-primary/50 transition-all duration-200"
          >
            About the Club
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto">
          {[
            { value: "50+", label: "Members" },
            { value: "750+", label: "Students Taught" },
            { value: "5+", label: "Events Hosted / Year" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1 font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
