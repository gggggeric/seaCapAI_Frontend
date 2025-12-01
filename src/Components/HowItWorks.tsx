import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Wallet, Brain, TrendingUp, Shield } from "lucide-react";

const steps = [
  {
    icon: Wallet,
    title: "Connect Your Wallet",
    description: "Link your MetaMask wallet securely to get started with SeaCap AI",
    color: "text-brand-gold",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Our AI analyzes market trends and creates personalized investment strategies",
    color: "text-brand-teal",
  },
  {
    icon: TrendingUp,
    title: "Automated Growth",
    description: "Watch your remittances grow automatically through smart investments",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "Secure & Transparent",
    description: "All transactions are secured by blockchain technology with full transparency",
    color: "text-brand-navy",
  },
];

export const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get started in minutes and let our AI handle the rest
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-card p-6 rounded-2xl shadow-card hover:shadow-gold transition-all duration-300 h-full flex flex-col items-center text-center group hover:scale-105">
                <div className={`${step.color} mb-4 p-4 rounded-full bg-muted/50 group-hover:animate-glow transition-all`}>
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
