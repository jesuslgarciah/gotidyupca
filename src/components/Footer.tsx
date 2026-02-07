import { Instagram, Mail, MessageCircle, Facebook } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const PHONE_NUMBER = '+16135610205';
const EMAIL = 'gotidyappca@gmail.com';
const INSTAGRAM_URL = 'https://www.instagram.com/gotidyupca';
const FACEBOOK_URL = 'https://www.facebook.com/GotidyupCa/';

const getSmsLink = (lang: string) => {
  const templates: Record<string, string> = {
    en: "Hi! I'd like to request a free cleaning estimate for my property in Ottawa. Can you help me?",
    fr: "Bonjour! J'aimerais demander un devis gratuit pour le nettoyage de ma propriété à Ottawa. Pouvez-vous m'aider?",
    es: "¡Hola! Me gustaría solicitar un presupuesto gratuito de limpieza para mi propiedad en Ottawa. ¿Pueden ayudarme?",
  };
  const message = encodeURIComponent(templates[lang] || templates.en);
  return `sms:${PHONE_NUMBER}?body=${message}`;
};

export function Footer() {
  const { t, language } = useLanguage();

  const quickLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.testimonials, href: '#testimonials' },
    { label: t.nav.careers, href: '#careers' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-1">
              <img
                src="/logo.png"
                alt="Go Tidy Up logo"
                className="block h-20 w-auto object-contain mt-4"
              />
            </div>
            <p className="text-primary-foreground/70 max-w-sm mb-6">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={getSmsLink(language)}
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Send SMS"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>Ottawa, Ontario, Canada</li>
              <li>Mon - Fri: 9am - 5pm</li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-primary-foreground transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={getSmsLink(language)} className="hover:text-primary-foreground transition-colors">
                  +1 (613) 561-0205
                </a>
              </li>
              <li>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  @gotidyupca
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            {t.footer.rights}
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
