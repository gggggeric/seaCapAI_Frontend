import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";
import { useInView } from "framer-motion";
import { useRef } from "react";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";

export const AboutSection = () => {
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
            About <span className="text-gradient">SeaCap AI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Empowering Overseas Filipino Workers with cutting-edge AI technology and blockchain innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/90 leading-relaxed">
              SeaCap AI (Sikap AI) is a revolutionary platform designed specifically for Overseas Filipino Workers. 
              We combine artificial intelligence with blockchain technology to help you grow your remittances automatically.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Say goodbye to high remittance fees and investment illiteracy. Our intelligent system uses x402 protocols 
              and advanced AI algorithms to maximize your financial growth while you focus on your career abroad.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex-1 min-w-[200px] p-4 bg-card rounded-lg shadow-card">
                <div className="text-3xl font-bold text-primary mb-1">10M+</div>
                <div className="text-sm text-muted-foreground">OFWs Served</div>
              </div>
              <div className="flex-1 min-w-[200px] p-4 bg-card rounded-lg shadow-card">
                <div className="text-3xl font-bold text-accent mb-1">₱5B+</div>
                <div className="text-sm text-muted-foreground">Assets Managed</div>
              </div>
            </div>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8">
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 rounded-2xl overflow-hidden shadow-card">
              <img src={about1} alt="AI Technology Dashboard" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img src={about2} alt="Blockchain Security" className="w-full h-48 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden bg-gradient-gold p-6 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-sm">Uptime SLA</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
