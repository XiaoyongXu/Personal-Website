import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="py-8 mt-20 border-t border-border/50 bg-bg relative z-10">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted text-sm font-medium">
          © {new Date().getFullYear()} Xiaoyong (Tony) Xu. All rights reserved.
        </p>
        <div className="flex gap-6 items-center">
          <a
            href="https://github.com/XiaoyongXu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors duration-300"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/tonyx258"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="mailto:xxy1994212@gmail.com"
            className="text-muted hover:text-accent transition-colors duration-300"
            aria-label="Email"
          >
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
