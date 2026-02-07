import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, MessageSquare, Send, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/context/LanguageContext';
import { toast } from 'sonner';

export function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Thank you! We\'ll be in touch within 24 hours.');
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t.contact.info.location,
    },
    {
      icon: Clock,
      title: t.contact.info.hours,
    },
    {
      icon: MessageSquare,
      title: t.contact.info.response,
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              {t.contact.subtitle}
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-10">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-elegant"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="font-medium">{info.title}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">{t.footer.followUs}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/gotidyupca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="font-medium">@gotidyupca</span>
                </a>
                <a
                  href="https://www.facebook.com/GotidyupCa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="font-medium">@gotidyupca</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 shadow-elegant"
            >
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.contact.form.name}
                  </label>
                  <Input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="h-12"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.contact.form.email}
                    </label>
                    <Input 
                      type="email" 
                      required
                      placeholder="john@example.com"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.contact.form.phone}
                    </label>
                    <Input 
                      type="tel" 
                      placeholder="(613) 555-0123"
                      className="h-12"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.contact.form.service}
                  </label>
                  <select 
                    className="w-full h-12 px-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  >
                    <option value="">Select a service...</option>
                    <option value="residential">Residential Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                    <option value="airbnb">Airbnb & Rentals</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.contact.form.message}
                  </label>
                  <Textarea 
                    rows={4}
                    placeholder="Tell us about your space, size, and any special requirements..."
                    className="resize-none"
                  />
                </div>

                {/* Submit */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full shadow-gold-glow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      {t.contact.form.submit}
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
