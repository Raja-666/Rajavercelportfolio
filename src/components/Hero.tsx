import { ArrowDown, Github, Linkedin, Mail, Download , Eye} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import AnimatedText from '@/components/AnimatedText';
import  profile  from '../../public/profile';
import { useNavigate } from 'react-router-dom';

const Hero = () => {

  const navigate = useNavigate()
  const skills = ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML/CSS'];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-slide-up">
          {/* Profile Section */}
          <div className="mb-8">
            
    <div className="w-32 h-32 mx-auto mb-6 rounded-full p-1 shadow-glow bg-gradient-primary">
  <img
    src="/public/profile.jpeg"
    alt="Rajasekar"
    className="w-full h-full object-cover rounded-full border-4 border-surface"
  />


            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <AnimatedText text=" Hi, I'm Rajasekar.S" className="text-gradient" delay={0.8} letterDelay={0.1} />
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              <AnimatedText text="MERN Stack Developer..." delay={2.2} letterDelay={0.08} />
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate full-stack developer with 1.9 years of experience crafting modern web applications 
              using React, Node.js, Express.js, and MongoDB. I love turning complex problems into elegant solutions.
            </p>
          </div>

          {/* Skills Showcase */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {skills.map((skill, index) => (
                <Card key={skill} className="px-4 py-2 bg-surface-alt border-border hover-lift animate-fade-in" 
                      style={{animationDelay: `${index * 0.2}s`, color:"blue"}}>
                  <span className="text-sm font-mono font-medium">{skill}</span>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group" onClick={() => navigate("/contact")}>
              <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Get In Touch
            </Button>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group" onClick={() => navigate("/Resume")}>
                            <Eye className="mr-2 h-4 w-4" />
              View Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <Button variant="ghost" size="sm" className="hover-glow transition-all duration-300">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover-glow transition-all duration-300">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover-glow transition-all duration-300">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero