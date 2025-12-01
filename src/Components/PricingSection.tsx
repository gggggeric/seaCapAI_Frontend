import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "@/Components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "₱999",
    period: "/month",
    description: "Perfect for getting started with crypto investment",
    features: [
      "AI-powered investment suggestions",
      "Basic portfolio management",
      "Up to ₱100,000 monthly investment",
      "Email support",
      "MetaMask integration",
      "Real-time market data",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "₱2,999",
    period: "/month",
    description: "For serious investors looking to maximize returns",
    features: [
      "Advanced AI algorithms",
      "Unlimited investment capacity",
      "Priority 24/7 support",
      "Custom investment strategies",
      "Portfolio diversification",
      "Tax optimization tools",
      "Advanced analytics dashboard",
      "Dedicated account manager",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for institutions and high-volume traders",
    features: [
      "White-label solutions",
      "API access",
      "Custom AI model training",
      "Institutional-grade security",
      "Multi-user accounts",
      "Compliance support",
      "Dedicated infrastructure",
      "On-premise deployment options",
    ],
    highlighted: false,
  },
];

export const PricingSection = () => {
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
            Choose Your <span className="text-gradient">Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Flexible pricing plans designed to grow with your investment journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-card rounded-2xl shadow-card p-8 ${
                plan.highlighted
                  ? "md:scale-110 border-2 border-primary shadow-gold z-10"
                  : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold text-white px-4 py-1 rounded-full text-sm font-semibold shadow-gold">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className={`w-full font-semibold ${
                  plan.highlighted
                    ? "bg-gradient-gold text-white shadow-gold"
                    : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            All plans include 14-day money-back guarantee • No credit card required to start
          </p>
        </motion.div>
      </div>
    </section>
  );
};
