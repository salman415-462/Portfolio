import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

export default function BlogSection() {
  const blogPosts = [
    {
      category: "Tutorial",
      title: "How I Built an IOC Lookup Tool in Python",
      description: "Step-by-step guide to building a threat intelligence tool using Python APIs for automated IOC enrichment.",
      readTime: "5 min read",
      categoryColor: "bg-blue-500/20 text-blue-400"
    },
    {
      category: "OSINT",
      title: "Top OSINT Tools for Urdu-Speaking CTI Analysts",
      description: "Comprehensive guide to open-source intelligence tools with focus on regional language capabilities.",
      readTime: "8 min read",
      categoryColor: "bg-cyan-400/20 text-cyan-300"
    },
    {
      category: "Analysis",
      title: "Weekly CTI Roundup: Threats Targeting Pakistani Banks",
      description: "Analysis of recent cyber threats targeting the Pakistani banking sector with attribution and IOCs.",
      readTime: "12 min read",
      categoryColor: "bg-purple-500/20 text-purple-400"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Latest Blog Posts</span>
          </h2>
          <p className="text-xl text-slate-400">Insights and tutorials on cybersecurity and threat intelligence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge className={`${post.categoryColor} border-0`}>
                    {post.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-100">{post.title}</h3>
                <p className="text-slate-400 mb-4">{post.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-500">
                    <Clock className="mr-1 h-4 w-4" />
                    {post.readTime}
                  </div>
                  <Button 
                    variant="ghost" 
                    className="text-blue-400 hover:text-blue-300 p-0"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
