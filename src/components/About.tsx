import { motion } from 'framer-motion';
import { Award, Heart, Shield, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Award,
      title: t.about.values.excellence.title,
      description: t.about.values.excellence.description,
    },
    {
      icon: Heart,
      title: t.about.values.respect.title,
      description: t.about.values.respect.description,
    },
    {
      icon: Shield,
      title: t.about.values.honesty.title,
      description: t.about.values.honesty.description,
    },
    {
      icon: Lightbulb,
      title: t.about.values.innovation.title,
      description: t.about.values.innovation.description,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t.about.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              {/* Icon Circle */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-accent/20 rounded-full group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-2 bg-card rounded-full flex items-center justify-center shadow-elegant">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <div className="relative">
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-8xl text-accent/20 font-display">
              "
            </span>
            <blockquote className="font-display text-2xl md:text-3xl font-medium italic text-foreground/90 leading-relaxed">
              Go Tidy Up doesn't just clean—we transform spaces into experiences of wellbeing.
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
