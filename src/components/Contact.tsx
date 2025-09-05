import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Zap,
  Terminal,
} from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "> System initialized...",
    "> Contact module loaded successfully",
    "> Ready to receive transmission",
  ]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTerminalOutput((prev) => [
      ...prev,
      "> Encrypting message...",
      "> Establishing secure connection...",
      "> Message transmitted successfully",
      "> Response expected within 24 hours",
    ]);

    setTimeout(() => {
      alert("Message transmitted successfully! I'll respond within 24 hours.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-void-900 via-surface-900 to-void-900 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-matrix-pattern opacity-20" />
      </div>

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-cyber">
            INITIATE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 to-electric-400 animate-glow">
              CONTACT
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-500 via-cyber-500 to-electric-500 mx-auto mt-6 mb-8 animate-pulse"></div>
          <p className="text-base sm:text-lg md:text-xl text-cyber-300 max-w-2xl mx-auto font-matrix">
            &gt; Ready to collaborate on innovative AI projects? Let’s connect!
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <div className="bg-void-800/50 border border-neon-500/30 rounded-2xl shadow-lg overflow-hidden hover:border-neon-500/60 transition-all">
            {/* Terminal Header */}
            <div className="bg-void-900/80 px-6 py-4 border-b border-neon-500/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-neon-500 rounded-full animate-pulse" />
                </div>
                <span className="text-neon-400 font-matrix text-sm">
                  contact_form.exe
                </span>
              </div>
              <Terminal className="w-5 h-5 text-neon-400" />
            </div>

            {/* Terminal Output + Form */}
            <div className="p-6 sm:p-8">
              {/* Terminal Messages */}
              <div className="mb-6 bg-void-900/50 rounded-lg p-4 font-matrix text-sm">
                {terminalOutput.map((line, index) => (
                  <div
                    key={index}
                    className="text-neon-400 mb-1 animate-fade-in"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {line}
                  </div>
                ))}
                <div className="text-neon-400 animate-pulse">$ _</div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-neon-400 mb-2 font-matrix"
                  >
                    &gt; SENDER_NAME:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-void-700/50 border border-neon-500/30 rounded-lg text-white font-matrix focus:ring-2 focus:ring-neon-500 focus:border-transparent transition"
                    placeholder="Enter identification..."
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-cyber-400 mb-2 font-matrix"
                  >
                    &gt; TRANSMISSION_ADDRESS:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-void-700/50 border border-cyber-500/30 rounded-lg text-white font-matrix focus:ring-2 focus:ring-cyber-500 focus:border-transparent transition"
                    placeholder="Enter communication channel..."
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-electric-400 mb-2 font-matrix"
                  >
                    &gt; MESSAGE_PAYLOAD:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-void-700/50 border border-electric-500/30 rounded-lg text-white font-matrix focus:ring-2 focus:ring-electric-500 focus:border-transparent transition resize-none"
                    placeholder="Compose your transmission..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-neon-500 to-cyber-500 text-white font-bold rounded-lg flex items-center justify-center gap-2 font-matrix group hover:shadow-lg hover:shadow-neon-500/30 transition"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:animate-pulse" />
                      SEND_MESSAGE()
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-void-800/50 border border-cyber-500/30 rounded-2xl p-8 hover:border-cyber-500/60 transition">
              <div className="flex items-center mb-6">
                <Zap className="w-6 h-6 text-cyber-400 mr-3 animate-pulse" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-cyber text-center mb-6 leading-tight">
                  CONTACT_PROTOCOLS
                </h3>
              </div>
              <div className="space-y-6">
                <ContactItem
                  icon={<Mail className="w-6 h-6 text-white" />}
                  title="EMAIL_CHANNEL"
                  value="sarawagishubam1@gmail.com"
                  color="from-neon-500 to-neon-600"
                />
                <ContactItem
                  icon={<Phone className="w-6 h-6 text-white" />}
                  title="VOICE_PROTOCOL"
                  value="+91 9163615663"
                  color="from-cyber-500 to-cyber-600"
                />
                <ContactItem
                  icon={<MapPin className="w-6 h-6 text-white" />}
                  title="LOCATION_DATA"
                  value="Kolkata, India"
                  color="from-electric-500 to-electric-600"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-void-800/50 border border-electric-500/30 rounded-2xl p-8 hover:border-electric-500/60 transition">
              <h3 className="text-xl font-bold text-white mb-6 font-cyber flex items-center">
                <Terminal className="w-5 h-5 mr-3 text-electric-400" />
                SOCIAL_NETWORK
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <SocialLink
                  href="https://github.com/SSARAWAGI05"
                  icon={<Github className="w-8 h-8 text-neon-400 mx-auto" />}
                  label="GITHUB"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/shubam-sarawagi-6434251b6/"
                  icon={<Linkedin className="w-8 h-8 text-cyber-400 mx-auto" />}
                  label="LINKEDIN"
                />
                <SocialLink
                  href="https://x.com/ShubamSarawagi"
                  icon={<Twitter className="w-8 h-8 text-electric-400 mx-auto" />}
                  label="TWITTER"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Small reusable components for cleaner alignment */
const ContactItem = ({
  icon,
  title,
  value,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  color: string;
}) => (
  <div className="flex items-start gap-4">
    <div
      className={`p-3 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center`}
    >
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-white mb-1 font-matrix">{title}</h4>
      <p className="text-cyber-300 font-matrix">{value}</p>
    </div>
  </div>
);

const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-6 bg-void-700/50 border border-gray-600/30 rounded-xl hover:bg-void-700/70 hover:border-neon-500/60 transition text-center"
  >
    <div className="mb-3">{icon}</div>
    <span className="text-sm text-white font-matrix">{label}</span>
  </a>
);

export default Contact;
