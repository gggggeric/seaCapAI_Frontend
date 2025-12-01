import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Header } from "@/Components/Header";
import { Footer } from "@/Components/Footer";
import { Target, Eye, Lightbulb, Users, Rocket, Shield } from "lucide-react";
import teamIan from "@/assets/team-ian.jpg";
import teamLianne from "@/assets/team-lianne.jpg";
import teamGeric from "@/assets/team-geric.jpg";

const team = [
  {
    name: "Ian Calica",
    role: "Full-Stack Developer",
    image: teamIan,
    description: "Specialized in building scalable backend systems and implementing cutting-edge AI algorithms. Ian brings expertise in blockchain integration and secure financial systems.",
  },
  {
    name: "Lianne Deldacan",
    role: "Full-Stack Developer",
    image: teamLianne,
    description: "Expert in creating intuitive user experiences and responsive frontend architectures. Lianne focuses on making complex financial systems accessible to everyone.",
  },
  {
    name: "Geric Morit",
    role: "Full-Stack Developer",
    image: teamGeric,
    description: "Passionate about cryptocurrency technologies and automated trading systems. Geric leads the development of our secure wallet integration and smart contract implementations.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "Your financial security is our top priority. We use industry-leading encryption and blockchain technology.",
  },
  {
    icon: Users,
    title: "OFW-Centric",
    description: "Every feature is designed specifically for the unique needs of Overseas Filipino Workers.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Leveraging AI and blockchain to create smarter, more efficient financial solutions.",
  },
];

const AboutUs = () => {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const storyRef = useRef(null);
  const solutionsRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const solutionsInView = useInView(solutionsRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About <span className="text-gradient">SeaCap AI</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Empowering Overseas Filipino Workers with intelligent financial technology that grows your remittances automatically through AI-powered investment strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-2xl shadow-card"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To revolutionize financial services for Overseas Filipino Workers by combining artificial intelligence with blockchain technology, eliminating high remittance fees, and democratizing access to intelligent investment strategies that help OFWs build wealth automatically.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-8 rounded-2xl shadow-card"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the leading AI-powered financial platform for OFWs worldwide, creating a future where every Filipino worker abroad can effortlessly grow their hard-earned money through intelligent, automated investment strategies that work 24/7.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Started */}
      <section ref={storyRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6">
              <Lightbulb className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
              How We Started
            </h2>
            <div className="space-y-4 text-lg text-foreground/90 leading-relaxed">
              <p>
                SeaCap AI was born from a simple observation: millions of Overseas Filipino Workers send billions of pesos home every year, but lose significant amounts to remittance fees and missed investment opportunities due to financial illiteracy.
              </p>
              <p>
                Our founding team, composed of experienced full-stack developers with personal connections to the OFW community, saw the potential to leverage emerging technologies—artificial intelligence, blockchain, and cryptocurrency—to solve this critical problem.
              </p>
              <p>
                What started as a hackathon project quickly evolved into a comprehensive platform. We combined cutting-edge AI algorithms with the security of blockchain technology and the accessibility of MetaMask wallets to create a system that automatically grows remittances without requiring financial expertise.
              </p>
              <p>
                Today, SeaCap AI serves over 10 million OFWs worldwide, managing billions in assets, and helping Filipino workers build wealth while they focus on their careers abroad.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Solutions */}
      <section ref={solutionsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Product & Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Intelligent financial technology designed specifically for OFWs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-8 rounded-2xl shadow-card"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">AI-Powered Investing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our advanced AI algorithms analyze market trends 24/7 and execute intelligent investment strategies automatically, maximizing your returns while you sleep.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card p-8 rounded-2xl shadow-card"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⛓️</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Blockchain Security</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built on x402 protocols and blockchain technology, ensuring transparent, secure, and immutable transactions that protect your hard-earned money.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card p-8 rounded-2xl shadow-card"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Zero-Fee Remittance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Say goodbye to expensive remittance fees. Our platform leverages cryptocurrency to enable near-zero-cost transfers to your loved ones back home.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Passionate developers dedicated to transforming financial services for OFWs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-4">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
