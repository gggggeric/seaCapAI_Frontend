import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    role: "Nurse in Dubai",
    content: "SeaCap AI has transformed how I manage my remittances. The AI handles everything automatically, and I've seen a 35% increase in my savings in just 6 months!",
    rating: 5,
    image: "MS",
  },
  {
    name: "Juan dela Cruz",
    role: "Engineer in Singapore",
    content: "Finally, a platform that understands OFW needs. The MetaMask integration is seamless, and I love how transparent everything is with blockchain technology.",
    rating: 5,
    image: "JC",
  },
  {
    name: "Anna Reyes",
    role: "Teacher in the UK",
    content: "I was skeptical about crypto, but SeaCap AI made it so easy. The AI does all the hard work, and I just watch my investments grow. Highly recommended!",
    rating: 5,
    image: "AR",
  },
  {
    name: "Carlos Mendoza",
    role: "IT Professional in Canada",
    content: "The best investment decision I've made. SeaCap AI's advanced algorithms and 24/7 support give me peace of mind while working abroad.",
    rating: 5,
    image: "CM",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied OFWs who trust SeaCap AI with their financial future
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl shadow-card hover:shadow-gold transition-all hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-sm text-foreground/90 leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full shadow-card">
            <Star className="h-5 w-5 fill-primary text-primary" />
            <span className="font-semibold text-foreground">4.9/5 Average Rating</span>
            <span className="text-muted-foreground">from 10,000+ reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
