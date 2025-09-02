'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { Calendar, Code, Award, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress'; // Ensure this supports Tailwind transition styles

const About = () => {
  const baseSkills = [
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 80, category: 'Language' },
    { name: 'Node.js', level: 90, category: 'Backend' },
    { name: 'Express.js', level: 90, category: 'Backend' },
    { name: 'MongoDB', level: 90, category: 'Database' },
    { name: 'HTML/CSS', level: 80, category: 'Frontend' },
  ];

  const [skills, setSkills] = useState(
    baseSkills.map(skill => ({ ...skill, level: 0 }))
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setSkills(baseSkills);
    }, 300); // start animation after 300ms
    return () => clearTimeout(timer);
  }, []);

  const experience = [
    {
      period: '2024 - Present',
      title: 'MERN Stack Developer',
      description:
        'Building modern web applications with React, Node.js, Express.js, and MongoDB. Focused on creating scalable solutions and optimizing user experiences.',
      achievements: [
        'Developed 7+ full-stack applications',
        'Optimized application performance by 40%',
        'Collaborated with cross-functional teams',
      ],
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
              About <span className="text-gradient">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Passionate developer with a love for creating innovative web solutions
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-surface-alt border-border animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <Code className="h-6 w-6 text-primary" />
                  <span>My Journey</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Hello! I'm Rajasekar.S, a passionate MERN stack developer with 1.9 years of experience
                  in creating dynamic, responsive, and user-friendly web applications. My journey in web
                  development started with a curiosity about how websites work, and it has evolved into
                  a deep passion for building exceptional digital experiences.
                </p>
                <p className="text-lg leading-relaxed">
                  I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have a strong
                  foundation in HTML, CSS, and JavaScript. I enjoy tackling complex problems and turning
                  them into simple, elegant solutions. My goal is to write clean, efficient code that
                  not only works well but is also maintainable and scalable.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>1.9 Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Award className="h-5 w-5 text-primary" />
                    <span>MERN Stack Specialist</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Technical <span className="text-gradient">Skills</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Technologies I work with to bring ideas to life
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <Card
                  key={skill.name}
                  className="bg-surface-alt border-border hover-lift animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                        <p className="text-sm text-muted-foreground">{skill.category}</p>
                      </div>
                      <span className="text-2xl font-bold text-primary">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 transition-all duration-1000 ease-in-out" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Professional <span className="text-gradient">Experience</span>
              </h2>
              <p className="text-xl text-muted-foreground">My journey in web development</p>
            </div>

            {experience.map((exp, index) => (
              <Card key={index} className="bg-surface-alt border-border animate-slide-up">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg mt-1">{exp.period}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed mb-6">{exp.description}</p>
                  <div>
                    <h4 className="font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your next project and bring your ideas to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="shadow-lg">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
