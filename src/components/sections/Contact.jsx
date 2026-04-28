import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="mb-12"
        >
           <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Let's Connect</h2>
           <p className="text-muted text-lg max-w-2xl">
              I'm open to Senior / Platform Engineer roles and technical leadership opportunities. 
              If you're building something complex at scale, I'd like to hear about it.
           </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.1 }}
           className="flex flex-col sm:flex-row gap-5"
        >
           <Button variant="accent" className="h-14 px-10 text-lg rounded-full shadow-xl shadow-accent/20 hover:shadow-accent/40" onClick={() => window.location.href = 'mailto:xxy1994212@gmail.com'}>
              Send me an email
           </Button>
        </motion.div>
      </div>
    </section>
  );
};
