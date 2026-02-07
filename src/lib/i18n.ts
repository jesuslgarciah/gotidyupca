export type Language = 'en' | 'fr' | 'es';

export const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇨🇦' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];

export const translations = {
  en: {
    nav: {
      services: 'Services',
      about: 'About',
      testimonials: 'Testimonials',
      careers: 'Careers',
      contact: 'Contact',
      getQuote: 'Get a Quote',
    },
    hero: {
      tagline: 'Premium Cleaning Services in Ottawa',
      title: 'Immaculate Spaces.',
      titleHighlight: 'Peace of Mind.',
      description: 'We don\'t just clean—we transform spaces into experiences of wellbeing. Efficiency, trust, and high standards every time.',
      cta: 'Book Your Free Estimate',
      ctaSecondary: 'Our Services',
      stats: {
        clients: 'Happy Clients',
        years: 'Years Experience',
        rating: 'Star Rating',
      },
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive cleaning solutions for every space',
      residential: {
        title: 'Residential Cleaning',
        description: 'Transform your home into a sanctuary. Regular or deep cleaning services tailored to your needs.',
      },
      commercial: {
        title: 'Commercial Cleaning',
        description: 'Professional cleaning for offices, clinics, pharmacies, and retail spaces. First impressions matter.',
      },
      airbnb: {
        title: 'Airbnb & Rentals',
        description: 'Quick turnovers with exceptional results. Give your guests a 5-star experience every time.',
      },
      learnMore: 'Learn More',
    },
    about: {
      title: 'Why Choose Go Tidy Up?',
      subtitle: 'Excellence is not an option—it\'s our standard',
      values: {
        excellence: {
          title: 'Excellence',
          description: 'Every space should speak well of who inhabits it.',
        },
        respect: {
          title: 'Respect',
          description: 'For your time, your spaces, and your trust.',
        },
        honesty: {
          title: 'Honesty',
          description: 'Complete transparency in everything we say and do.',
        },
        innovation: {
          title: 'Innovation',
          description: 'Technology and processes that improve day by day.',
        },
      },
    },
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Join hundreds of satisfied customers in Ottawa',
    },
    careers: {
      title: 'Join Our Team',
      subtitle: 'Build a career with a company that values you',
      description: 'We\'re looking for dedicated, detail-oriented individuals who take pride in their work. Join the Go Tidy Up family and grow with us.',
      positions: {
        routeManager: {
          title: 'Route Manager',
          description: 'Lead a team, ensure quality cleans, and manage documentation of team activities.',
        },
        assistant: {
          title: 'Cleaning Assistant',
          description: 'Provide industry-leading service with energy and a positive attitude alongside our Route Managers.',
        },
      },
      benefits: {
        title: 'Benefits',
        competitive: 'Competitive Pay',
        flexible: 'Flexible Hours',
        growth: 'Career Growth',
        training: 'Paid Training',
      },
      cta: 'Apply Now',
    },
    contact: {
      title: 'Get Your Free Quote',
      subtitle: 'Contact us today for a free estimate',
      form: {
        name: 'Your Name',
        email: 'Email Address',
        phone: 'Phone Number',
        service: 'Service Needed',
        message: 'Tell us about your space',
        submit: 'Request Free Quote',
      },
      info: {
        location: 'Ottawa, Ontario',
        hours: 'Mon - Fri: 9am - 5pm',
        response: 'We respond within 24 hours',
      },
    },
    footer: {
      tagline: 'Premium cleaning services for homes and businesses in Ottawa.',
      quickLinks: 'Quick Links',
      followUs: 'Follow Us',
      rights: '© 2024 Go Tidy Up. All rights reserved.',
    },
    pricing: {
      title: 'Transparent Pricing',
      subtitle: 'Pricing varies by space and scope. Tell us what you need and we will send a custom quote.',
      cta: 'Get a Quote',
    },
  },
  fr: {
    nav: {
      services: 'Services',
      about: 'À propos',
      testimonials: 'Témoignages',
      careers: 'Carrières',
      contact: 'Contact',
      getQuote: 'Obtenir un Devis',
    },
    hero: {
      tagline: 'Services de Nettoyage Premium à Ottawa',
      title: 'Espaces Impeccables.',
      titleHighlight: 'Tranquillité d\'Esprit.',
      description: 'Nous ne faisons pas que nettoyer—nous transformons les espaces en expériences de bien-être. Efficacité, confiance et standards élevés à chaque fois.',
      cta: 'Réservez Votre Estimation Gratuite',
      ctaSecondary: 'Nos Services',
      stats: {
        clients: 'Clients Satisfaits',
        years: 'Ans d\'Expérience',
        rating: 'Étoiles',
      },
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Solutions de nettoyage complètes pour chaque espace',
      residential: {
        title: 'Nettoyage Résidentiel',
        description: 'Transformez votre maison en un sanctuaire. Services de nettoyage régulier ou en profondeur adaptés à vos besoins.',
      },
      commercial: {
        title: 'Nettoyage Commercial',
        description: 'Nettoyage professionnel pour bureaux, cliniques, pharmacies et commerces. La première impression compte.',
      },
      airbnb: {
        title: 'Airbnb & Locations',
        description: 'Rotations rapides avec des résultats exceptionnels. Offrez à vos invités une expérience 5 étoiles.',
      },
      learnMore: 'En Savoir Plus',
    },
    about: {
      title: 'Pourquoi Choisir Go Tidy Up?',
      subtitle: 'L\'excellence n\'est pas une option—c\'est notre standard',
      values: {
        excellence: {
          title: 'Excellence',
          description: 'Chaque espace doit parler bien de qui l\'habite.',
        },
        respect: {
          title: 'Respect',
          description: 'Pour votre temps, vos espaces et votre confiance.',
        },
        honesty: {
          title: 'Honnêteté',
          description: 'Transparence totale dans tout ce que nous disons et faisons.',
        },
        innovation: {
          title: 'Innovation',
          description: 'Technologie et processus qui s\'améliorent jour après jour.',
        },
      },
    },
    testimonials: {
      title: 'Ce Que Disent Nos Clients',
      subtitle: 'Rejoignez des centaines de clients satisfaits à Ottawa',
    },
    careers: {
      title: 'Rejoignez Notre Équipe',
      subtitle: 'Construisez une carrière avec une entreprise qui vous valorise',
      description: 'Nous recherchons des personnes dévouées et méticuleuses qui sont fières de leur travail. Rejoignez la famille Go Tidy Up et grandissez avec nous.',
      positions: {
        routeManager: {
          title: 'Gestionnaire de Route',
          description: 'Dirigez une équipe, assurez des nettoyages de qualité et gérez la documentation des activités.',
        },
        assistant: {
          title: 'Assistant de Nettoyage',
          description: 'Fournissez un service de premier ordre avec énergie et une attitude positive aux côtés de nos Gestionnaires.',
        },
      },
      benefits: {
        title: 'Avantages',
        competitive: 'Salaire Compétitif',
        flexible: 'Horaires Flexibles',
        growth: 'Évolution de Carrière',
        training: 'Formation Rémunérée',
      },
      cta: 'Postuler',
    },
    contact: {
      title: 'Obtenez Votre Devis Gratuit',
      subtitle: 'Contactez-nous aujourd\'hui pour une estimation gratuite',
      form: {
        name: 'Votre Nom',
        email: 'Adresse Email',
        phone: 'Numéro de Téléphone',
        service: 'Service Souhaité',
        message: 'Parlez-nous de votre espace',
        submit: 'Demander un Devis Gratuit',
      },
      info: {
        location: 'Ottawa, Ontario',
        hours: 'Lun - Ven: 9h - 17h',
        response: 'Nous répondons sous 24 heures',
      },
    },
    footer: {
      tagline: 'Services de nettoyage premium pour les maisons et entreprises à Ottawa.',
      quickLinks: 'Liens Rapides',
      followUs: 'Suivez-nous',
      rights: '© 2024 Go Tidy Up. Tous droits réservés.',
    },
    pricing: {
      title: 'Tarifs Transparents',
      subtitle: 'Les prix varient selon l’espace et le service. Dites-nous vos besoins et nous enverrons un devis.',
      cta: 'Obtenir un Devis',
    },
  },
  es: {
    nav: {
      services: 'Servicios',
      about: 'Nosotros',
      testimonials: 'Testimonios',
      careers: 'Carreras',
      contact: 'Contacto',
      getQuote: 'Cotización',
    },
    hero: {
      tagline: 'Servicios Premium de Limpieza en Ottawa',
      title: 'Espacios Impecables.',
      titleHighlight: 'Tranquilidad.',
      description: 'No solo limpiamos—transformamos espacios en experiencias de bienestar. Eficiencia, confianza y altos estándares siempre.',
      cta: 'Reserva Tu Estimación Gratis',
      ctaSecondary: 'Nuestros Servicios',
      stats: {
        clients: 'Clientes Felices',
        years: 'Años de Experiencia',
        rating: 'Estrellas',
      },
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones integrales de limpieza para cada espacio',
      residential: {
        title: 'Limpieza Residencial',
        description: 'Transforma tu hogar en un santuario. Servicios de limpieza regular o profunda adaptados a tus necesidades.',
      },
      commercial: {
        title: 'Limpieza Comercial',
        description: 'Limpieza profesional para oficinas, clínicas, farmacias y locales comerciales. La primera impresión cuenta.',
      },
      airbnb: {
        title: 'Airbnb y Alquileres',
        description: 'Rotaciones rápidas con resultados excepcionales. Da a tus huéspedes una experiencia 5 estrellas.',
      },
      learnMore: 'Más Información',
    },
    about: {
      title: '¿Por Qué Elegir Go Tidy Up?',
      subtitle: 'La excelencia no es una opción—es nuestro estándar',
      values: {
        excellence: {
          title: 'Excelencia',
          description: 'Cada espacio debe hablar bien de quien lo habita.',
        },
        respect: {
          title: 'Respeto',
          description: 'Por tu tiempo, tus espacios y tu confianza.',
        },
        honesty: {
          title: 'Honestidad',
          description: 'Transparencia total en todo lo que decimos y hacemos.',
        },
        innovation: {
          title: 'Innovación',
          description: 'Tecnología y procesos que mejoran día a día.',
        },
      },
    },
    testimonials: {
      title: 'Lo Que Dicen Nuestros Clientes',
      subtitle: 'Únete a cientos de clientes satisfechos en Ottawa',
    },
    careers: {
      title: 'Únete a Nuestro Equipo',
      subtitle: 'Construye una carrera con una empresa que te valora',
      description: 'Buscamos personas dedicadas y meticulosas que se enorgullecen de su trabajo. Únete a la familia Go Tidy Up y crece con nosotros.',
      positions: {
        routeManager: {
          title: 'Gerente de Ruta',
          description: 'Lidera un equipo, asegura limpiezas de calidad y gestiona la documentación de las actividades.',
        },
        assistant: {
          title: 'Asistente de Limpieza',
          description: 'Brinda un servicio de primera clase con energía y actitud positiva junto a nuestros Gerentes de Ruta.',
        },
      },
      benefits: {
        title: 'Beneficios',
        competitive: 'Pago Competitivo',
        flexible: 'Horarios Flexibles',
        growth: 'Crecimiento Profesional',
        training: 'Capacitación Pagada',
      },
      cta: 'Aplicar Ahora',
    },
    contact: {
      title: 'Obtén Tu Cotización Gratis',
      subtitle: 'Contáctanos hoy para una estimación gratuita',
      form: {
        name: 'Tu Nombre',
        email: 'Correo Electrónico',
        phone: 'Número de Teléfono',
        service: 'Servicio Necesario',
        message: 'Cuéntanos sobre tu espacio',
        submit: 'Solicitar Cotización Gratis',
      },
      info: {
        location: 'Ottawa, Ontario',
        hours: 'Lun - Vie: 9am - 5pm',
        response: 'Respondemos en 24 horas',
      },
    },
    footer: {
      tagline: 'Servicios premium de limpieza para hogares y negocios en Ottawa.',
      quickLinks: 'Enlaces Rápidos',
      followUs: 'Síguenos',
      rights: '© 2024 Go Tidy Up. Todos los derechos reservados.',
    },
    pricing: {
      title: 'Precios Transparentes',
      subtitle: 'Los precios varían según el espacio y el servicio. Cuéntanos lo que necesitas y te enviamos una cotización.',
      cta: 'Solicitar Cotización',
    },
  },
};

export type Translations = typeof translations.en;
