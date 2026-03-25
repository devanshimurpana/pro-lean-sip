import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const LocationsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          FIND A <span className="text-primary text-glow">MACHINE</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-12 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Our vending machines are placed at gyms, sports clubs, and fitness centers near you.
        </motion.p>

        <motion.div
          className="max-w-2xl mx-auto bg-card rounded-lg gradient-border p-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
          <h3 className="font-display text-2xl font-semibold mb-3">Expanding Soon</h3>
          <p className="text-muted-foreground mb-8">
            We're rolling out Pro Lean Sip machines across gyms and fitness centers. 
            Want a machine at your location?
          </p>
          <a
            href="mailto:enquiry@proleansip.com"
            className="inline-block bg-primary text-primary-foreground font-display px-8 py-3 rounded-sm tracking-widest uppercase hover:box-glow-intense transition-shadow duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsSection;
