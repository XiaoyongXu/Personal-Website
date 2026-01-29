import { motion } from "framer-motion";

const skills = [
  "React", "Node.js", "TypeScript", "Next.js",
  "PostgreSQL", "GraphQL", "Tailwind CSS", "Docker", "Kafka",
  "MongoDB", "Redis", "CI/CD", "Serverless", "Microservices", "AWS", "GCP","Prisma"
];

export const About = () => {
  return (
    <section id="about" className="section-padding bg-bg relative">
      <div className="container-custom">
         
         <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
            {/* Text Content */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="md:w-2/3"
            >
               <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">About Me</h2>
               <div className="space-y-4 text-muted text-lg leading-relaxed">
                  <p>
                    I’m a full-stack engineer who thrives on building robust systems and making them scale. My work spans API design, backend performance tuning, cloud infrastructure, and creating smooth, responsive experiences on the front end.
                  </p>
                  <p>
                    Currently, I lead architectural decisions at <span className="text-accent font-medium">Uni Express</span>, optimizing logistics for thousands of daily shipments. I love breaking down complex problems—whether it's reducing API latency or designing a pixel-perfect component system.
                  </p>
               </div>
            </motion.div>
            
            {/* Stats */}
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="md:w-1/3 flex flex-col justify-center gap-6"
            >
                <div className="p-6 bg-surface rounded-2xl border border-border/50 shadow-sm hover:border-accent/30 transition-colors">
                     <div className="text-4xl font-bold text-accent mb-1">6+</div>
                     <div className="text-sm text-muted font-medium uppercase tracking-wider">Years Experience</div>
                 </div>
                 <div className="p-6 bg-surface rounded-2xl border border-border/50 shadow-sm hover:border-accent/30 transition-colors">
                     <div className="text-4xl font-bold text-accent mb-1">50+</div>
                     <div className="text-sm text-muted font-medium uppercase tracking-wider">Projects Delivered</div>
                 </div>
            </motion.div>
         </div>

         {/* Marquee / Skills */}
         <div className="mt-20">
            <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-6">Technologies I work with</h3>
            <div className="flex flex-wrap gap-3">
               {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="px-4 py-2 bg-surface border border-border rounded-full text-sm font-medium text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
               ))}
            </div>
         </div>

      </div>
    </section>
  );
};
