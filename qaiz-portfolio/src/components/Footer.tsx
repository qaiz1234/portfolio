import { motion } from "framer-motion";
import { Linkedin, Mail} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
<a href="#home" className="text-2xl font-bold no-underline">
  <span className="gradient-text">Q</span>
  <span className="text-white">aiz</span>
</a>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            {["Home", "About", "Skills", "Services", "Portfolio", "Contact"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              )
            )}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/qaiz-naushad-29041127b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:qaiza2z@gmail.com"
              className="p-2.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} Qaiz Naushad.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
