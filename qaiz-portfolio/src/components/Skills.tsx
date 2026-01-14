import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Palette,
  PenTool,
  Layers,
  Users,
  Figma,
  Sparkles,
  FileText,
  Zap,
} from "lucide-react";

const coreSkills = [
  {
    name: "UI/UX Design",
    icon: Palette,
    description: "Creating visually stunning and user-friendly interfaces",
  },
  {
    name: "Wireframing",
    icon: PenTool,
    description: "Structuring layouts with precision and clarity",
  },
  {
    name: "Prototyping",
    icon: Layers,
    description: "Building interactive prototypes for user testing",
  },
  {
    name: "User Research",
    icon: Users,
    description: "Understanding user needs through empathy and data",
  },
];

const tools = [
  { name: "Figma", icon: Figma },
  { name: "Framer", icon: Zap },
  { name: "Notion", icon: FileText },
  { name: "AI Tools", icon: Sparkles },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-muted/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">What I Excel At</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Skills & Tools</h2>
        </motion.div>

        {/* Core Skills */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {coreSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-card group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-8">Tools I Work With</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border hover:border-primary/50 transition-colors cursor-pointer"
              >
                <tool.icon size={20} className="text-primary" />
                <span className="font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-card to-secondary/10 border border-border"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <h4 className="text-xl font-semibold mb-2">
                QA Background = Better UX
              </h4>
              <p className="text-muted-foreground max-w-xl">
                My Salesforce QA experience means I naturally think about edge cases, 
                error states, and accessibility – creating designs that work for everyone.
              </p>
            </div>
            <a href="#contact" className="btn-primary whitespace-nowrap">
              Work With Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
