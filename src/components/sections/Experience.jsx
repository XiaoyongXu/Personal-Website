import { motion } from "framer-motion";
import { experience } from "../../data/experience";

export const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-surface/30">
      <div className="container-custom">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="mb-12"
        >
           <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Work Experience</h2>
        </motion.div>
        
        <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
             {experience.map((item, index) => (
                <motion.div 
                   key={index} 
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: index * 0.1 }}
                   className="relative pl-8 md:pl-12"
                >
                   {/* Timeline Dot */}
                   <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg" />
                   
                   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                      <div>
                         <h3 className="text-xl font-bold font-display text-text">{item.role}</h3>
                         <div className="text-base font-medium text-accent">{item.company}</div>
                      </div>
                      <span className="text-sm font-medium text-muted bg-surface px-3 py-1 rounded-full border border-border w-fit">
                         {item.range}
                      </span>
                   </div>
                   
                   <ul className="space-y-3">
                      {item.bullets.map((bullet, i) => (
                         <li key={i} className="text-muted leading-relaxed text-base flex gap-3">
                            <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-border flex-shrink-0" />
                            <span>{bullet}</span>
                         </li>
                      ))}
                   </ul>
                </motion.div>
             ))}
        </div>
      </div>
    </section>
  );
};
