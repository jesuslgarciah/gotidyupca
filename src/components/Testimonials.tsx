import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { featureFlags } from '@/config/featureFlags';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Homeowner',
    avatar: 'SM',
    rating: 5,
    text: 'Go Tidy Up transformed my home! Their attention to detail is incredible. I\'ve never seen my place this spotless. Highly recommend!',
  },
  {
    name: 'David Chen',
    role: 'Airbnb Host',
    avatar: 'DC',
    rating: 5,
    text: 'As an Airbnb host, turnaround time is crucial. Go Tidy Up delivers exceptional results every time, and my guests always comment on how clean the space is.',
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Clinic Owner',
    avatar: 'ER',
    rating: 5,
    text: 'Professional, reliable, and thorough. They understand the hygiene standards required for medical facilities. Our patients feel safe and comfortable.',
  },
  {
    name: 'Mark Thompson',
    role: 'Office Manager',
    avatar: 'MT',
    rating: 5,
    text: 'Switching to Go Tidy Up was the best decision for our office. The team is friendly, efficient, and our workspace has never looked better.',
  },
];

export function Testimonials() {
  const { t } = useLanguage();

  if (!featureFlags.showTestimonials) {
    return null;
  }

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-card rounded-2xl p-8 shadow-elegant"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-accent/20">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/90 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="font-display font-semibold text-accent">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8"
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-display font-bold text-2xl">4.9</span>
          </div>
          <p className="text-muted-foreground">Based on 100+ reviews</p>
        </motion.div>
      </div>
    </section>
  );
}
