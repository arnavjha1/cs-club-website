import { useState } from "react";
import { Mail, MessageSquare, Send, Instagram, Twitter, Github, Disc } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/20 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-widest uppercase">Reach Out</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Have a question? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email Us</p>
                  <a href="mailto:csclubrhs@gmail.com" className="text-primary hover:underline text-sm">
                    csclubrhs@gmail.com
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">We typically respond within 48 hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Join our Discord</p>
                  <a href="https://discord.gg/BZAJqmV9ap" className="text-primary hover:underline text-sm">
                    discord.gg/BZAJqmV9ap
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">Real-time chat, announcements, and help channels.</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Follow us</p>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/redmond.csclub/" },
                  { icon: Disc, label: "Discord", href: "https://discord.gg/BZAJqmV9ap" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-lg card-gradient border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default ContactSection;
