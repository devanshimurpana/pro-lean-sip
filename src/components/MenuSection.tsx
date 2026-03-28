import { motion } from "framer-motion";
import { Snowflake, Leaf, Droplets } from "lucide-react";

const menuItems = [
  {
    slot: "A",
    name: "Coffee Yeast Protein",
    price: 149,
    type: "cold" as const,
    protein: "25g",
    carbs: "7g",
    fat: "1.57g",
    calories: "139 kcal",
    sugar: "0g",
    tags: ["Vegan", "Lactose Free"],
    usp: "Fermented yeast + probiotics",
  },
  {
    slot: "B",
    name: "Chocolate Yeast Protein",
    price: 149,
    type: "cold" as const,
    protein: "25g",
    carbs: "7g",
    fat: "1.57g",
    calories: "139 kcal",
    sugar: "0g",
    tags: ["Vegan", "Lactose Free"],
    usp: "Fermented yeast + probiotics",
  },
  {
    slot: "C",
    name: "Lemon Mint Electrolyte",
    price: 99,
    type: "cold" as const,
    protein: "0.09g",
    carbs: "5.21g",
    fat: "0g",
    calories: "21 kcal",
    sugar: "0.07g",
    tags: ["No Caffeine"],
    usp: "Refreshing hydration boost",
  },
  {
    slot: "D",
    name: "Watermelon Mint Electrolyte",
    price: 99,
    type: "cold" as const,
    protein: "0.09g",
    carbs: "5.21g",
    fat: "0g",
    calories: "21 kcal",
    sugar: "0.07g",
    tags: ["No Caffeine"],
    usp: "Refreshing hydration boost",
  },
  {
    slot: "E",
    name: "Coffee Mocha Whey Protein",
    price: 149,
    type: "cold" as const,
    protein: "24g",
    carbs: "4g",
    fat: "2g",
    calories: "131 kcal",
    sugar: "0.56g",
    tags: ["Digestive Enzymes"],
    usp: "High-quality whey blend",
  },
  {
    slot: "F",
    name: "Cookies & Cream Whey Protein",
    price: 149,
    type: "cold" as const,
    protein: "24g",
    carbs: "4g",
    fat: "2g",
    calories: "131 kcal",
    sugar: "0.56g",
    tags: ["Digestive Enzymes"],
    usp: "High-quality whey blend",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          OUR <span className="text-primary text-glow">MENU</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center mb-16 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Premium shakes and electrolytes — crafted for performance, served ice cold.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {menuItems.map((menuItem) => (
            <motion.div
              key={menuItem.slot}
              variants={item}
              className="bg-card rounded-lg gradient-border overflow-hidden hover:box-glow transition-shadow duration-300 group"
            >
              {/* Header */}
              <div className="p-6 pb-4 flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Snowflake className="w-3.5 h-3.5 text-primary/70" />
                  </div>
                  </div>
                  <h3 className="font-display text-lg font-semibold leading-tight">
                    {menuItem.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{menuItem.usp}</p>
                </div>
                <div className="text-right">
                  <span className="font-display text-2xl font-bold text-primary">
                    ₹{menuItem.price}
                  </span>
                </div>
              </div>

              {/* Nutrition grid */}
              <div className="px-6 pb-4">
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: "Protein", value: menuItem.protein },
                    { label: "Carbs", value: menuItem.carbs },
                    { label: "Fat", value: menuItem.fat },
                    { label: "Energy", value: menuItem.calories },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-secondary/80 rounded px-2 py-2 text-center"
                    >
                      <div className="text-xs font-semibold text-foreground">{stat.value}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="px-6 pb-6 flex flex-wrap gap-2">
                {menuItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-medium text-primary/80 bg-primary/10 px-2 py-1 rounded-full"
                  >
                    {tag.includes("Vegan") ? (
                      <Leaf className="w-3 h-3" />
                    ) : tag.includes("Lactose") ? (
                      <Droplets className="w-3 h-3" />
                    ) : null}
                    {tag}
                  </span>
                ))}
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                  Sugar: {menuItem.sugar}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
