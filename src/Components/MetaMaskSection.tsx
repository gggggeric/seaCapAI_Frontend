import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Wallet, Lock, Zap, Globe } from "lucide-react";
import { Button } from "@/Components/ui/button";
import metamaskLogo from "@/assets/metamask-logo.png";

const features = [
  {
    icon: Wallet,
    title: "Digital Wallet",
    description: "Store and manage your crypto assets securely in one place",
  },
  {
    icon: Lock,
    title: "Bank-Level Security",
    description: "Your keys, your crypto. Full control and ownership of your assets",
  },
  {
    icon: Zap,
    title: "Instant Transactions",
    description: "Send and receive funds globally in seconds, not days",
  },
  {
    icon: Globe,
    title: "Multi-Chain Support",
    description: "Access multiple blockchain networks from a single wallet",
  },
];

export const MetaMaskSection = () => {
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
          <div className="inline-flex items-center gap-3 bg-card px-6 py-3 rounded-full shadow-card mb-6">
            <img src={metamaskLogo} alt="MetaMask Logo" className="h-10 w-10 object-contain" />
            <span className="font-heading text-2xl font-bold">MetaMask Wallet</span>
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Gateway to <span className="text-gradient">Web3 Finance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            MetaMask is a secure cryptocurrency wallet that connects you to blockchain applications. 
            It's your key to accessing SeaCap AI's powerful investment platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-heading text-3xl font-bold text-foreground">
              Why MetaMask?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MetaMask is the world's most trusted crypto wallet, used by millions of people worldwide. 
              It provides you with complete control over your digital assets while maintaining the highest security standards.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Easy Setup</h4>
                  <p className="text-sm text-muted-foreground">Create your wallet in minutes with a simple browser extension</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Full Control</h4>
                  <p className="text-sm text-muted-foreground">You own your private keys - we never have access to your funds</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Seamless Integration</h4>
                  <p className="text-sm text-muted-foreground">Connect instantly to SeaCap AI with one click</p>
                </div>
              </div>
            </div>
            <Button size="lg" className="bg-gradient-gold text-white font-semibold px-8 shadow-gold">
              Install MetaMask
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-gold transition-all hover:scale-105"
              >
                <feature.icon className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
