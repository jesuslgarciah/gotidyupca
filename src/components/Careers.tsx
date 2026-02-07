import { motion } from 'framer-motion';
import { Users, Clock, TrendingUp, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import teamImage from '@/assets/cleaning-team.jpg';

export function Careers() {
  const { t } = useLanguage();

  const benefits = [
    { icon: Users, label: t.careers.benefits.competitive },
    { icon: Clock, label: t.careers.benefits.flexible },
    { icon: TrendingUp, label: t.careers.benefits.growth },
    { icon: GraduationCap, label: t.careers.benefits.training },
  ];

  const positions = [
    {
      title: t.careers.positions.routeManager.title,
      description: t.careers.positions.routeManager.description,
    },
    {
      title: t.careers.positions.assistant.title,
      description: t.careers.positions.assistant.description,
    },
  ];

  return (
    <section id="careers" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={teamImage}
                alt="Go Tidy Up cleaning team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-card rounded-xl p-6 shadow-elegant max-w-xs"
            >
              <p className="font-display font-semibold text-lg mb-2">Join a Growing Team</p>
              <p className="text-sm text-muted-foreground">Be part of Ottawa's leading cleaning service</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t.careers.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t.careers.subtitle}
            </p>
            <p className="text-foreground/80 mb-8">
              {t.careers.description}
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium">{benefit.label}</span>
                </div>
              ))}
            </div>

            {/* Positions */}
            <div className="space-y-4 mb-8">
              {positions.map((position, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl border border-border hover:border-accent/50 transition-colors"
                >
                  <h4 className="font-display font-semibold mb-1">{position.title}</h4>
                  <p className="text-sm text-muted-foreground">{position.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button size="lg" className="group shadow-gold-glow">
              {t.careers.cta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
