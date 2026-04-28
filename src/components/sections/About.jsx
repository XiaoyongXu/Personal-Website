import { motion } from "framer-motion";

const skills = [
  "TypeScript", "Node.js", "AWS Lambda", "Prisma", "PostgreSQL",
  "Kafka", "Docker", "Kubernetes", "GCP", "MongoDB",
  "Redis", "CI/CD", "Serverless", "Zod", "React",
  "Terraform", "GraphQL", "Claude Code", "Codex",
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
                    I'm a software and platform engineer who builds systems that move real things — packages, payments, carrier integrations — across borders and at scale. My work spans the full stack, from React frontends to serverless microservices to Kubernetes infrastructure. My focus is on making complex logistics systems reliable, observable, and safe to change.
                  </p>
                  <p>
                    At <span className="text-accent font-medium">UniUni</span>, I own the platform powering cross-border shipping between Canada and the U.S., including duty automation, webhook systems, analytics pipelines, and regional deployment operations. Before that, I built inventory orchestration and event-driven systems for high-traffic e-commerce at <span className="text-accent font-medium">Orium</span>.
                  </p>
                  <p>
                    I use AI tools — Claude Code, Codex, Gemini — as practical engineering leverage for planning, debugging, and accelerating delivery. Not as a novelty, but as part of how I ship.
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
                     <div className="text-4xl font-bold text-accent mb-1">7+</div>
                     <div className="text-sm text-muted font-medium uppercase tracking-wider">Years in Production Systems</div>
                 </div>
                 <div className="p-6 bg-surface rounded-2xl border border-border/50 shadow-sm hover:border-accent/30 transition-colors">
                     <div className="text-4xl font-bold text-accent mb-1">3</div>
                     <div className="text-sm text-muted font-medium uppercase tracking-wider">Cloud Platforms Operated</div>
                 </div>
                 <div className="p-6 bg-surface rounded-2xl border border-border/50 shadow-sm hover:border-accent/30 transition-colors">
                     <div className="text-4xl font-bold text-accent mb-1">0</div>
                     <div className="text-sm text-muted font-medium uppercase tracking-wider">Black Friday Incidents</div>
                 </div>
            </motion.div>
         </div>

         {/* Skills */}
         <div className="mt-20">
            <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-6">Core Technologies</h3>
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
