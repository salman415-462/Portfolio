import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Search, 
  Shield, 
  Globe, 
  Server, 
  GitBranch 
} from "lucide-react";

export default function SkillsSection() {
  const skills = [
    {
      icon: <Code className="text-4xl text-blue-500 mb-4" />,
      title: "Python Development",
      description: "requests, BeautifulSoup, APIs, pandas for threat analysis and automation"
    },
    {
      icon: <Search className="text-4xl text-cyan-400 mb-4" />,
      title: "Web Scraping",
      description: "Data extraction from threat intelligence sources and dark web monitoring"
    },
    {
      icon: <Globe className="text-4xl text-blue-500 mb-4" />,
      title: "OSINT Tools",
      description: "Spiderfoot, Maltego, theHarvester for intelligence gathering"
    },
    {
      icon: <Shield className="text-4xl text-cyan-400 mb-4" />,
      title: "Cyber Threat Intelligence",
      description: "MITRE ATT&CK framework, IOC enrichment, threat hunting"
    },
    {
      icon: <Server className="text-4xl text-blue-500 mb-4" />,
      title: "Flask Development",
      description: "Building web applications and APIs for threat intelligence tools"
    },
    {
      icon: <GitBranch className="text-4xl text-cyan-400 mb-4" />,
      title: "Version Control",
      description: "GitHub and Git for project collaboration and code management"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-slate-400">Technologies and tools I use to analyze and combat cyber threats</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="skill-card bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-100">{skill.title}</h3>
                <p className="text-slate-400">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
