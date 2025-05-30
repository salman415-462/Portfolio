import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { 
  Mail, 
  MessageCircle, 
  Github, 
  Send, 
  Loader2 
} from "lucide-react";
import { FaTwitter, FaTelegram, FaGithub } from "react-icons/fa";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-slate-400">Let's collaborate on cybersecurity projects or discuss threat intelligence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-slate-100">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="text-blue-500 text-xl mr-4" />
                <div>
                  <p className="font-semibold text-slate-100">Email</p>
                  <a 
                    href="mailto:salman@example.com" 
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    salman@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <FaTelegram className="text-blue-500 text-xl mr-4" />
                <div>
                  <p className="font-semibold text-slate-100">Telegram</p>
                  <a 
                    href="https://t.me/salman" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    @salman
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <FaTwitter className="text-blue-500 text-xl mr-4" />
                <div>
                  <p className="font-semibold text-slate-100">Twitter</p>
                  <a 
                    href="https://twitter.com/salman" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    @salman
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <FaGithub className="text-blue-500 text-xl mr-4" />
                <div>
                  <p className="font-semibold text-slate-100">GitHub</p>
                  <a 
                    href="https://github.com/salman" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    github.com/salman
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-slate-100">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-slate-200">Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="bg-slate-800 border-slate-700 text-slate-100 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-slate-200">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-slate-800 border-slate-700 text-slate-100 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-slate-200">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className="bg-slate-800 border-slate-700 text-slate-100 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-slate-200">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="bg-slate-800 border-slate-700 text-slate-100 focus:border-blue-500 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              >
                {contactMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
