import presidentImg from "@/assets/board-president.jpg";
import vpImg from "@/assets/board-vp.jpg";
import treasurerImg from "@/assets/board-treasurer.jpg";
import secretaryImg from "@/assets/board-secretary.jpg";
import { Github, Linkedin } from "lucide-react";

const boardMembers = [
  {
    name: "Aisha Nguyen",
    role: "President",
    major: "Computer Science, Senior",
    bio: "Passionate about making CS accessible to all students. Loves machine learning and competitive programming.",
    image: presidentImg,
    github: "#",
    linkedin: "#",
  },
  {
    name: "Marcus Rivera",
    role: "Vice President",
    major: "Computer Science, Junior",
    bio: "Full-stack developer and hackathon enthusiast. Leads our web development workshops.",
    image: vpImg,
    github: "#",
    linkedin: "#",
  },
  {
    name: "Kevin Chen",
    role: "Treasurer",
    major: "CS & Math, Junior",
    bio: "Manages club finances and sponsors. Interested in algorithms and quantitative finance.",
    image: treasurerImg,
    github: "#",
    linkedin: "#",
  },
  {
    name: "Sofia Park",
    role: "Secretary",
    major: "Computer Science, Sophomore",
    bio: "Coordinates events and communications. Passionate about UX design and Python development.",
    image: secretaryImg,
    github: "#",
    linkedin: "#",
  },
];

const BoardSection = () => {
  return (
    <section id="board" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-widest uppercase">The Team</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            Meet the <span className="text-gradient">Board</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Your club is run by dedicated students who are passionate about building a great CS community.
          </p>
        </div>

        {/* Board grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {boardMembers.map((member) => (
            <div
              key={member.name}
              className="card-gradient rounded-xl border border-border overflow-hidden glow-card hover:border-primary/40 transition-all duration-300 group flex flex-col"
            >
              {/* Photo */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                {/* Role badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold font-mono">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-xs text-muted-foreground font-mono mt-0.5 mb-3">{member.major}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{member.bio}</p>
                {/* Social links */}
                <div className="flex gap-3 mt-4 pt-4 border-t border-border">
                  <a
                    href={member.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardSection;
