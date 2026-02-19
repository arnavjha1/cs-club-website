import { Code, Users, Lightbulb, Trophy, Laptop, Globe } from "lucide-react";

const activities = [
  {
    icon: Code,
    title: "Code Camps",
    description: "Intensive one-week programs to learn new programming languages, frameworks, and tools.",
    items: ["Python Fundamentals", "Web development", "Java basics", "Advanced Python & Machine Learning"],
  },
  {
    icon: Trophy,
    title: "Hackathons",
    description: "Compete in 24-48 hour events to build real projects and win prizes, with mentorship and team formation support.",
    items: ["Local hackathons", "Training sessions", "Internal club hackathons", "Team formation help"],
  },
  {
    icon: Users,
    title: "Coding Workshops",
    description: "Hands-on sessions covering Python, Java, web development, and more — for all skill levels.",
    items: ["Python for beginners", "Java fundamentals", "Full-stack web dev", "Data structures & algorithms"],
  },
  {
    icon: Laptop,
    title: "Competitions",
    description: "Sharpen your skills in competitive programming and coding challenges.",
    items: ["USACO training", "Codeforces practice", "Guided practice sessions"],
  },
  {
    icon: Lightbulb,
    title: "AP CSA & AP CSP Preparation",
    description: "Get ready for your Advanced Placement Computer Science exams with our specialized preparation sessions.",
    items: ["AP CSA review", "AP CSP concepts", "Practice problems", "Exam strategies"],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-widest uppercase">Who We Are</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            What We Do at <span className="text-gradient">CS Club</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're a student-led community dedicated to making computer science accessible, 
            exciting, and collaborative for everyone on campus.
          </p>
        </div>

        {/* Activity grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div
                key={activity.title}
                className="card-gradient rounded-xl border border-border p-6 glow-card hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{activity.description}</p>
                <ul className="space-y-1.5">
                  {activity.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
