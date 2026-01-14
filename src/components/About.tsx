import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Sparkles } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      year: "2021 - 2025",
      title: "Bachelor of Technology",
      subtitle: "Computer Science",
      icon: GraduationCap,
      color: "primary",
    },
    {
      year: "2025",
      title: "UI/UX Design Course",
      subtitle: "CDA Academy",
      icon: BookOpen,
      color: "secondary",
    },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">Get To Know</p>
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              A Designer Who Thinks Like a{" "}
              <span className="gradient-text">Problem Solver</span>
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My journey into UI/UX design began from an unexpected place – Salesforce QA. 
                While most designers start with visuals, I started by understanding how 
                systems break and why users struggle. This unique perspective shapes every 
                design decision I make.
              </p>
              
              <p>
                In QA, I learned to think about edge cases, accessibility concerns, and 
                the countless ways a user might interact with an interface. Now, as a 
                UI/UX designer, I bring that same meticulous attention to creating 
                experiences that are not just beautiful, but genuinely usable.
              </p>
              
              <p>
                I believe great design is invisible – it guides users so naturally that 
                they never have to think about the interface. My goal is to simplify 
                complex workflows and create digital experiences that feel effortless.
              </p>
            </div>
          </motion.div>

          {/* Education Timeline - Updated to match image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Education Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="relative">
                <Sparkles className="text-primary" size={28} />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              </div>
              <div>
                <h4 className="text-2xl font-bold tracking-tight">Education Journey</h4>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mt-2"></div>
              </div>
            </div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                  className="relative"
                >
                  {/* Year Badge */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`text-sm font-semibold px-4 py-1 rounded-full ${
                      item.color === 'primary' 
                        ? 'bg-primary/10 text-primary border border-primary/20' 
                        : 'bg-secondary/10 text-secondary border border-secondary/20'
                    }`}>
                      {item.year}
                    </span>
                    <div className={`h-px flex-1 bg-gradient-to-r ${
                      item.color === 'primary'
                        ? 'from-primary/30 to-transparent'
                        : 'from-secondary/30 to-transparent'
                    }`}></div>
                  </div>

                  {/* Content Card */}
                  <div className={`card-glass p-6 rounded-2xl hover-lift border-l-4 ${
                    item.color === 'primary'
                      ? 'border-l-primary/50 hover:border-l-primary'
                      : 'border-l-secondary/50 hover:border-l-secondary'
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${
                        item.color === 'primary'
                          ? 'bg-primary/10'
                          : 'bg-secondary/10'
                      }`}>
                        <item.icon className={
                          item.color === 'primary'
                            ? 'text-primary'
                            : 'text-secondary'
                        } size={24} />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-xl font-bold text-foreground mb-1">
                          {item.title}
                        </h5>
                        <p className="text-muted-foreground mb-4">{item.subtitle}</p>
                        
                        {/* Horizontal Divider */}
                        <div className="h-px w-full bg-border/50 my-4"></div>
                        
                        {/* Additional details (if any) */}
                        {index === 0 && (
                          <p className="text-sm text-muted-foreground/80">
                            Focus on software engineering, algorithms, and system design
                          </p>
                        )}
                        {index === 1 && (
                          <p className="text-sm text-muted-foreground/80">
                            Specialized in user research, wireframing, and prototyping
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 relative"
            >
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl -z-10 blur-xl"></div>
              
              <div className="card-glass p-8 rounded-2xl border border-primary/20 relative overflow-hidden">
                {/* Top-left accent */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent rounded-br-full"></div>
                
                {/* Bottom-right accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-secondary/10 to-transparent rounded-tl-full"></div>
                
                <div className="relative">
                  <div className="text-4xl text-primary/20 mb-2">"</div>
                  <p className="text-lg text-foreground/90 italic leading-relaxed mb-4">
                    I believe that understanding how things can go wrong is the first step to designing things that go right.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-secondary/30"></div>
                    <p className="gradient-text font-semibold text-lg">— Qaiz Naushad</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;