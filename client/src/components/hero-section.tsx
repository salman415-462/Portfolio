import { Button } from "@/components/ui/button";
import { Download, Mail, Github, MessageCircle } from "lucide-react";
import { FaTwitter, FaTelegram, FaGithub } from "react-icons/fa";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeDownload = () => {
    // In a real application, this would download the actual resume
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Malik Muhammad Salman Zahid</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-300 mb-6">
              Cyber Threat Intelligence Analyst | OSINT Researcher | Python Automation
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Aspiring CTI analyst from Pakistan, passionate about solving cyber threats with Python, automation, and open-source intelligence. Focused on building regional CTI visibility and empowering local organizations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToContact}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                onClick={handleResumeDownload}
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className="flex space-x-6">
              <a 
                href="https://github.com/salman" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-blue-400 text-2xl transition-colors"
              >
                <FaGithub />
              </a>
              <a 
                href="https://t.me/salman" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-blue-400 text-2xl transition-colors"
              >
                <FaTelegram />
              </a>
              <a 
                href="https://twitter.com/salman" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-blue-400 text-2xl transition-colors"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-slate-800 border-2 border-blue-500 rounded-full flex items-center justify-center cyber-glow cursor-pointer hover:border-cyan-400 transition-colors">
                <div className="text-center">
                  <div className="text-6xl text-blue-500 mb-4">🛡️</div>
                  <p className="text-slate-400">Profile Image</p>
                  <p className="text-sm text-slate-500">Click to upload</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
