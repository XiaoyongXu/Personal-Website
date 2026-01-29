import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container-custom max-w-4xl">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="bg-surface border border-border rounded-3xl p-8 md:p-12 text-center"
        >
           <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Let's work together</h2>
           <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
              I'm currently available for new projects and collaborations. 
              If you have a project in mind or just want to chat, feel free to reach out.
           </p>
           
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" className="h-14 px-8 text-lg" onClick={() => window.location.href = 'mailto:xxy1994212@gmail.com'}>
                 Send me an email
              </Button>
           </div>
        </motion.div>
      </div>
    </section>
  );
};
