import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Search, FileText, MessageSquare, Rss } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      icon: <Search className="text-3xl text-blue-500" />,
      title: "IOC Enricher",
      description: "Python tool for enriching IP addresses with WHOIS data, VirusTotal reports, and AbuseIPDB information. Automates threat intelligence gathering for security analysts.",
      tags: ["Python", "API Integration", "Threat Intel"],
      github: "https://github.com/salman/ioc-enricher"
    },
    {
      icon: <FileText className="text-3xl text-cyan-400" />,
      title: "Pastebin Scraper",
      description: "Automated scraper for monitoring Pastebin for leaked domains, emails, and credentials. Helps organizations detect data breaches affecting their assets.",
      tags: ["Python", "Web Scraping", "Monitoring"],
      github: "https://github.com/salman/pastebin-scraper"
    },
    {
      icon: <MessageSquare className="text-3xl text-blue-500" />,
      title: "Telegram Threat Tracker",
      description: "Real-time monitoring tool for Telegram groups using keyword detection. Tracks cybercriminal discussions and emerging threats in regional languages.",
      tags: ["Python", "Telegram API", "Real-time"],
      github: "https://github.com/salman/telegram-threat-tracker"
    },
    {
      icon: <Rss className="text-3xl text-cyan-400" />,
      title: "Threat Feed Aggregator",
      description: "Centralized platform aggregating Pakistan-specific threat intelligence feeds. Provides localized context for regional cybersecurity threats and incidents.",
      tags: ["Flask", "RSS Feeds", "Regional CTI"],
      github: "https://github.com/salman/threat-feed-aggregator"
    }
  ];

  const tagColors = {
    "Python": "bg-blue-500/20 text-blue-400",
    "API Integration": "bg-cyan-400/20 text-cyan-300",
    "Threat Intel": "bg-purple-500/20 text-purple-400",
    "Web Scraping": "bg-green-500/20 text-green-400",
    "Monitoring": "bg-red-500/20 text-red-400",
    "Telegram API": "bg-blue-500/20 text-blue-400",
    "Real-time": "bg-yellow-500/20 text-yellow-400",
    "Flask": "bg-blue-500/20 text-blue-400",
    "RSS Feeds": "bg-cyan-400/20 text-cyan-300",
    "Regional CTI": "bg-green-500/20 text-green-400"
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-slate-400">Open-source tools and research projects in cybersecurity</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-slate-100">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      className={`${tagColors[tag as keyof typeof tagColors]} border-0`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  asChild
                  className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                >
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
