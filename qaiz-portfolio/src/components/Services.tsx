import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Globe, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    icon: Palette,
    description:
      "End-to-end design process from user research and wireframes to high-fidelity prototypes. I create intuitive interfaces that balance aesthetics with usability, ensuring every interaction feels natural and purposeful.",
    features: [
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Visual Design Systems",
      "Usability Testing",
    ],
  },
  {
    title: "Web Design",
    icon: Globe,
    description:
      "Modern, responsive websites that look stunning on every device. I focus on clean layouts, thoughtful typography, and seamless user journeys that convert visitors into engaged users.",
    features: [
      "Responsive Design",
      "Landing Pages",
      "Design Systems",
      "Interactive Prototypes",
    ],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">What I Offer</p>
          <h2 className="text-3xl sm:text-4xl font-bold">My Services</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I transform your vision into captivating digital reality. Let me help 
            your digital presence stand out with user-centered design solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group card-glass p-8 hover-lift cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={32} />
                </div>
                <ArrowUpRight
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  size={24}
                />
              </div>

              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              <div className="space-y-2">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold text-center mb-12">My Design Process</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Discover", "Define", "Design", "Deliver"].map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="relative p-6 rounded-2xl bg-muted/30 border border-border text-center group hover:border-primary/50 transition-colors"
              >
                <div className="text-5xl font-bold gradient-text opacity-30 mb-4">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h4 className="text-lg font-semibold">{step}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
