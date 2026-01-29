import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const Button = ({ 
  children, 
  variant = 'primary', 
  className, 
  onClick,
  ...props 
}) => {
  const variants = {
    primary: 'btn-primary',
    accent: 'btn-accent',
    ghost: 'btn-ghost',
    outline: 'border border-border hover:bg-surface hover:text-text'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn("btn", variants[variant], className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};
