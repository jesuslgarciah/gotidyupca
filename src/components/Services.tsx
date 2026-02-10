import { motion } from 'framer-motion';
import { Home, Building2, Key, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Home,
      title: t.services.residential.title,
      description: t.services.residential.description,
      color: 'from-accent/20 to-yellow-500/20',
    },
    {
      icon: Building2,
      title: t.services.commercial.title,
      description: t.services.commercial.description,
      color: 'from-accent/20 to-yellow-500/20',
    },
    {
      icon: Key,
      title: t.services.airbnb.title,
      description: t.services.airbnb.description,
      color: 'from-accent/20 to-yellow-500/20',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-card rounded-2xl p-8 shadow-elegant hover:shadow-lg transition-all duration-300"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Link */}
                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto font-medium text-accent hover:text-white hidden"
                >
                  {t.services.learnMore}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary to-navy-light rounded-2xl p-8 md:p-12 text-primary-foreground"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                {t.pricing.title}
              </h3>
              <p className="text-primary-foreground/80">{t.pricing.subtitle}</p>
            </div>
            <Button size="lg" className="shadow-gold-glow" asChild>
              <a href="#contact">{t.pricing.cta}</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
