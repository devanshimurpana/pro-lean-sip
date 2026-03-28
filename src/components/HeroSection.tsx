import { motion } from "framer-motion";
import heroImage from "@/assets/hero-shake.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Pro Lean Sip protein shake"
          className="w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.img
          src={logo}
          alt="Pro Lean Sip logo"
          className="w-32 h-32 mx-auto mb-8 drop-shadow-[0_0_20px_hsl(62,100%,50%,0.4)]"
          width={512}
          height={512}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 tracking-tight"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          PRO <span className="text-primary text-glow">LEAN</span> SIP
        </motion.h1>

        <motion.p
          className="font-display text-xl md:text-3xl text-primary tracking-[0.2em] mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          FUEL YOUR GAME
        </motion.p>

        <motion.p
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body font-light"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Premium protein shakes on demand. High protein, low sugar — served 
          straight from our vending machines.
        </motion.p>

        <motion.a
          href="#menu"
          className="inline-block bg-primary text-primary-foreground font-display text-lg px-10 py-4 rounded-sm tracking-widest uppercase hover:box-glow-intense transition-shadow duration-300 animate-pulse-glow"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          See Our Menu
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
