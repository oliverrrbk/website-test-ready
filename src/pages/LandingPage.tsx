import { motion } from 'motion/react';
import { Star, CheckCircle2, Phone, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="space-y-0 pb-20"
    >
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden mt-8 md:mt-12 mx-4 sm:mx-6 lg:mx-8 rounded-[2rem] md:rounded-[3rem] shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&q=80&w=2000"
            alt="Smuk have"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            variants={itemVariants}
            className="max-width-2xl"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
              <Star className="text-accent fill-accent" size={16} />
              <span className="text-sm font-medium">4.9/5 Google Rating</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Vi forvandler din have til et <span className="text-accent">levende kunstværk</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-xl leading-relaxed">
              Professionel anlægsgartner i Aarhus og omegn. Vi skaber uderum, der forener æstetik, funktionalitet og holdbarhed.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/kontakt" className="btn-primary text-center flex items-center justify-center space-x-2">
                <span>Få et uforpligtende tilbud</span>
                <ArrowRight size={18} />
              </Link>
              <a href="tel:+4512345678" className="flex items-center justify-center space-x-3 text-lg font-semibold hover:text-accent transition-colors">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                  <Phone size={20} />
                </div>
                <span>Ring os op</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-spacing">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: ShieldCheck, title: "100% Garanti", desc: "Vi forlader aldrig en opgave, før du er fuldt tilfreds." },
            { icon: Clock, title: "Overholdte Aftaler", desc: "Vi kommer til tiden og overholder alle deadlines." },
            { icon: MapPin, title: "Lokalt Forankret", desc: "Din lokale gartner i Østjylland med 15 års erfaring." }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-8 bg-bg-soft rounded-3xl border border-gray-100 flex flex-col items-center text-center group cursor-default transition-all duration-500 hover:bg-white card-shadow"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Before/After or Project Showcase */}
      <section className="bg-primary py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 space-y-6 md:space-y-0">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Se vores seneste projekter</h2>
              <p className="text-gray-300 text-lg">Fra vilde haver til minimalistiske terrasser. Vi har erfaringen til at løfte enhver opgave.</p>
            </div>
            <Link to="/ydelser" className="text-accent font-semibold flex items-center space-x-2 hover:translate-x-2 transition-transform">
              <span>Se alle ydelser</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative h-[400px] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=1000"
                alt="Projekt 1"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="text-accent text-sm font-bold uppercase tracking-widest mb-2 block">Belægning</span>
                <h3 className="text-2xl font-display font-bold">Moderne terrasse i Aarhus</h3>
              </div>
            </div>
            <div className="group relative h-[400px] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1000"
                alt="Projekt 2"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="text-accent text-sm font-bold uppercase tracking-widest mb-2 block">Havedesign</span>
                <h3 className="text-2xl font-display font-bold">Komplet haveforvandling i Skanderborg</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-display font-bold mb-6">Sådan foregår det</h2>
          <p className="text-gray-500 text-lg">En enkel og gennemsigtig proces fra første kontakt til færdig have.</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
        >
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 z-0" />

          {[
            { step: "01", title: "Kontakt & Besigtigelse", desc: "Vi kommer forbi og kigger på din have og hører om dine ønsker." },
            { step: "02", title: "Tilbud & Planlægning", desc: "Du modtager et fast tilbud og en tidsplan for projektet." },
            { step: "03", title: "Udførelse", desc: "Vores erfarne gartnere går i gang og holder dig løbende opdateret." },
            { step: "04", title: "Aflevering", desc: "Vi gennemgår resultatet sammen og sikrer, at alt er som aftalt." }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative z-10 bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-50 group transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110">
                {item.step}
              </div>
              <h4 className="text-lg font-display font-bold mb-3">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-spacing">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-accent-light rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8">Klar til at starte dit haveprojekt?</h2>
            <p className="text-lg text-primary/70 mb-12">
              Kontakt os i dag for en uforpligtende snak om dine muligheder. Vi glæder os til at høre fra dig!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/kontakt" className="btn-primary">Få et tilbud nu</Link>
              <a href="tel:+4512345678" className="btn-outline">Ring os op: +45 12 34 56 78</a>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default LandingPage;
