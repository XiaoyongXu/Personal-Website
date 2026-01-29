import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/Button";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding pt-0 pb-0">
      
      {/* Background Blobs (keeping these as they add nice volume behind the 3D stars) */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
         <motion.div style={{ y: y1 }} className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
         <motion.div style={{ y: y2 }} className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[140px] mix-blend-screen opacity-40" />
      </div>

      <div className="container-custom text-center relative z-10 flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-8 relative group cursor-pointer"
        >
           {/* Avatar Container - Nature/Organic Fit */}
           <div className="relative w-40 h-40 md:w-52 md:h-52">
              {/* Organic Blob Shape Background Layer 1 */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-blue-200 dark:from-accent/40 dark:to-purple-500/40 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-md animate-[spin_8s_linear_infinite]" />
              
              {/* Organic Blob Shape Background Layer 2 (Reverse Spin) */}
              <div className="absolute inset-1 bg-gradient-to-bl from-blue-200 to-purple-200 dark:from-accent/30 dark:to-blue-500/30 rounded-[40%_60%_70%_30%/40%_70%_30%_60%] blur-md animate-[spin_10s_linear_infinite_reverse]" />

              {/* Image Clipper - Squircle/Organic Shape */}
              <div className="relative w-full h-full overflow-hidden rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-2xl border-4 border-surface/50 transition-all duration-500 group-hover:rounded-full group-hover:scale-105">
                 <img 
                   src="/photo.jpg" 
                   alt="Xiaoyong (Tony) Xu" 
                   className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-700" 
                 />
                 {/* Shine Effect */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
           </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-display font-bold mb-6 tracking-tight leading-none"
        >
          Building <br className="hidden md:block"/>
          <span className="text-gradient-accent">exceptional</span>
          <br className="hidden md:block"/> digital experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-2xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          I'm a Full Stack Developer specializing in scalable architecture and intuitive UI. 
          Currently transforming logistics at <span className="text-text font-medium relative inline-block">
             Uni Express
             <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent/50 rounded-full"></span>
          </span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto"
        >
          <Button variant="accent" className="h-14 px-10 text-lg rounded-full shadow-xl shadow-accent/20 hover:shadow-accent/40" onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>
            View Projects
          </Button>
          <Button variant="outline" className="h-14 px-10 text-lg rounded-full backdrop-blur-md bg-surface/30 border-text/10" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
            Contact Me
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
         initial={{ opacity: 0 }} 
         animate={{ opacity: 1, y: [0, 10, 0] }} 
         transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
         className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted/50"
      >
         <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
         <div className="w-[1px] h-12 bg-gradient-to-b from-muted/50 to-transparent"></div>
      </motion.div>
    </section>
  );
};
