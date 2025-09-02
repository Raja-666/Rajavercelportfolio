import Navigation from '@/components/Navigation';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'rajahulk@gmail.com',
      href: 'mailto:rajahulk@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8973517488',
      href: 'tel:+918973517488',
      description: 'Available Mon-Fri, 9AM-6PM IST'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Madurai, Tamil Nadu, India',
      href: '#',
      description: 'Available for remote work globally'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: '#',
      username: 'https://github.com/Raja-666/',
      color: 'hover:text-gray-600'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: '#',
      username: 'https://www.linkedin.com/in/raja-sekar-17a914180/',
      color: 'hover:text-blue-600'
    },
    
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="animate-slide-up">
              <Card className="bg-surface-alt border-border">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-2">
                    <Send className="h-6 w-6 text-primary" />
                    <span>Send Me a Message</span>
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Project Discussion" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project, ideas, or any questions you have..."
                      className="min-h-32"
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
                    <Send className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
              
              {/* Contact Details */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Let's <span className="text-gradient">Connect</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  I'm always excited to discuss new opportunities, innovative projects, or just chat 
                  about technology. Whether you're looking for a developer to join your team or need 
                  help with a specific project, I'd love to hear from you.
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="bg-surface border-border hover-lift">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                            <info.icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{info.title}</h3>
                            <a 
                              href={info.href}
                              className="text-primary hover:text-primary-dark transition-colors font-medium"
                            >
                              {info.value}
                            </a>
                            <p className="text-sm text-muted-foreground mt-1">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Follow <span className="text-gradient">Me</span>
                </h3>
                <div className="grid gap-4">
                  {socialLinks.map((social, index) => (
                    <Card key={index} className="bg-surface border-border hover-lift">
                      <CardContent className="p-4">
                        <a 
                          href={social.href}
                          target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-4 group"
      >
                          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:bg-gradient-primary transition-all duration-300">
                            <social.icon className={`h-5 w-5 ${social.color} group-hover:text-primary-foreground transition-colors`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">{social.name}</h4>
                            <p className="text-sm text-muted-foreground">{social.username}</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <Card className="bg-gradient-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Availability</h3>
                  <p className="opacity-90 leading-relaxed">
                    I'm currently available for full-time opportunities. 
                    Looking forward to working on exciting projects and contributing to innovative teams.
                  </p>
                  <div className="mt-4 p-3 bg-white/10 rounded-lg">
                    <p className="text-sm font-medium">
                      ✅ Available for immediate start
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your <span className="text-gradient">Project</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's schedule a call to discuss your requirements and how I can help bring your vision to life
          </p>
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            Schedule a Call
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;