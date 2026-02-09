import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import work1 from '@/assets/work-1.jpeg';
import work2 from '@/assets/work-2.jpeg';
import work3 from '@/assets/work-3.jpeg';
import work4 from '@/assets/work-4.jpeg';
import work5 from '@/assets/work-5.jpeg';
import work6 from '@/assets/work-6.jpeg';

const images = [
  { src: work1, alt: 'Residential cleaning work 1' },
  { src: work2, alt: 'Residential cleaning work 2' },
  { src: work3, alt: 'Bathroom cleaning work 1' },
  { src: work4, alt: 'Bathroom cleaning work 2' },
  { src: work5, alt: 'Home cleaning work 1' },
  { src: work6, alt: 'Home cleaning work 2' },
];

export function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.gallery.subtitle}
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group mb-6 break-inside-avoid overflow-hidden rounded-2xl shadow-elegant bg-card"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
