// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
// import { ExternalLink, Users, Target, Lightbulb, Check } from "lucide-react";
// import caseStudyImage from "../assets/case-study-learning-app.jpg";

// const Portfolio = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   const features = [
//     "Personalized home dashboard with reminders and saved courses",
//     "My Courses section for tracking progress",
//     "Search & Explore feature by category",
//     "Featured classes with ratings, duration, and instructor details",
//     "Visual learning overview with progress tracking",
//     "Profile section for account management and support",
//   ];

//   return (
//     <section id="portfolio" className="py-24 bg-muted/30" ref={ref}>
//       <div className="section-container">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <p className="text-primary font-medium mb-2">Featured Work</p>
//           <h2 className="text-3xl sm:text-4xl font-bold">Case Study</h2>
//         </motion.div>

//         {/* Case Study Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="card-glass overflow-hidden"
//         >
//           <div className="grid lg:grid-cols-2 gap-8">
//             {/* Image Section */}
//             <div className="relative p-8 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
//               <motion.img
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//                 src={caseStudyImage}
//                 alt="Mobile Learning App UI/UX Case Study"
//                 className="w-full max-w-md rounded-2xl shadow-2xl"
//               />
              
//               {/* Floating Labels */}
//               <motion.div
//                 animate={{ y: [0, -8, 0] }}
//                 transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute top-12 right-8 bg-card border border-border rounded-xl px-4 py-2 shadow-lg"
//               >
//                 <span className="text-sm font-medium">UI/UX Design</span>
//               </motion.div>
              
//               <motion.div
//                 animate={{ y: [0, 8, 0] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//                 className="absolute bottom-12 left-8 bg-primary text-primary-foreground rounded-xl px-4 py-2 shadow-lg"
//               >
//                 <span className="text-sm font-medium">Mobile App</span>
//               </motion.div>
//             </div>

//             {/* Content Section */}
//             <div className="p-8 lg:p-12">
//               <div className="flex items-center gap-2 mb-4">
//                 <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
//                   Case Study
//                 </span>
//               </div>
              
//               <h3 className="text-2xl sm:text-3xl font-bold mb-4">
//                 Mobile Learning App
//               </h3>
              
//               <p className="text-muted-foreground mb-6">
//                 A mobile learning platform designed to help users learn new skills, 
//                 track progress, and stay consistent. Built with user-centered design 
//                 principles to reduce friction in online learning.
//               </p>

//               {/* Key Points */}
//               <div className="grid sm:grid-cols-2 gap-4 mb-8">
//                 <div className="flex items-start gap-3">
//                   <Users className="text-primary mt-1 flex-shrink-0" size={20} />
//                   <div>
//                     <h4 className="font-medium text-sm">Target Audience</h4>
//                     <p className="text-sm text-muted-foreground">
//                       Students, beginners, and self-learners
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <Target className="text-primary mt-1 flex-shrink-0" size={20} />
//                   <div>
//                     <h4 className="font-medium text-sm">Design Goal</h4>
//                     <p className="text-sm text-muted-foreground">
//                       Make learning feel simple and achievable
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3 sm:col-span-2">
//                   <Lightbulb className="text-primary mt-1 flex-shrink-0" size={20} />
//                   <div>
//                     <h4 className="font-medium text-sm">Design Approach</h4>
//                     <p className="text-sm text-muted-foreground">
//                       Soft color palette, friendly illustrations, intuitive navigation, 
//                       strong visual hierarchy
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Features */}
//               <div className="mb-8">
//                 <h4 className="font-semibold mb-4">Key Features</h4>
//                 <div className="grid gap-2">
//                   {features.slice(0, 4).map((feature) => (
//                     <div key={feature} className="flex items-center gap-2 text-sm">
//                       <Check className="text-secondary flex-shrink-0" size={16} />
//                       <span className="text-muted-foreground">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <a
//                 href="#contact"
//                 className="btn-primary inline-flex items-center gap-2"
//               >
//                 Let's Discuss Your Project
//                 <ExternalLink size={16} />
//               </a>
//             </div>
//           </div>
//         </motion.div>

//         {/* More Projects Coming */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="text-center mt-12"
//         >
//           <p className="text-muted-foreground">
//             More case studies coming soon. Want to see more of my work?{" "}
//             <a href="#contact" className="text-primary hover:underline">
//               Get in touch
//             </a>
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;
