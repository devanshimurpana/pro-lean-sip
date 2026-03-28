import { motion } from "framer-motion";
import { Zap, Dumbbell, Snowflake, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "High Protein",
    description: "Packed with premium whey protein to fuel your workouts and recovery.",
  },
  {
    icon: ShieldCheck,
    title: "Low Sugar",
    description: "Minimal sugar content without compromising on taste. Guilt-free energy.",
  },
  {
    icon: Dumbbell,
    title: "Muscle Recovery",
    description: "Formulated with BCAAs and essential nutrients for faster muscle recovery.",
  },
  {
    icon: Snowflake,
    title: "Ice Cold",
    description: "Every shake is served perfectly chilled, straight from our vending machines.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section id="why" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          WHY <span className="text-primary text-glow">PRO LEAN SIP</span>?
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center mb-16 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Every shake is crafted for athletes, gym-goers, and anyone who takes their nutrition seriously.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="bg-card p-8 rounded-lg gradient-border hover:box-glow transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
