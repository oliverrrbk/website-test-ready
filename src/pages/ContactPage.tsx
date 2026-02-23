import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Star, CheckCircle2, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Tak for din henvendelse! Vi vender tilbage hurtigst muligt.');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Info */}
        <div className="space-y-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-8 leading-tight">
              Lad os tage en snak om <span className="text-accent">din have</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Udfyld formularen, så kontakter vi dig inden for 24 timer for at aftale en tid til en uforpligtende besigtigelse.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-display font-bold text-primary">Hvad du kan forvente:</h3>
            <ul className="space-y-4">
              {[
                "Gratis og uforpligtende besigtigelse",
                "Professionel rådgivning om design og materialer",
                "Gennemsigtigt tilbud med fast pris",
                "En fast tidsplan for dit projekt"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-gray-600">
                  <CheckCircle2 size={20} className="text-accent flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8 border-t border-gray-100">
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?u=${i}`}
                    alt="Kunde"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center text-accent">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                  <span className="ml-2 font-bold text-primary">4.9/5</span>
                </div>
                <p className="text-gray-500">Baseret på 180+ anmeldelser</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Ring til os</p>
                  <a href="tel:+4512345678" className="text-primary font-bold hover:text-accent transition-colors">+45 12 34 56 78</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Skriv til os</p>
                  <a href="mailto:info@groenelegance.dk" className="text-primary font-bold hover:text-accent transition-colors">info@groenelegance.dk</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-primary rounded-[3rem] p-8 md:p-12 shadow-2xl text-white"
        >
          <h2 className="text-3xl font-display font-bold mb-8">Få et uforpligtende tilbud</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Fornavn*</label>
                <input
                  type="text"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors text-white placeholder-white/30"
                  placeholder="Morten"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Efternavn*</label>
                <input
                  type="text"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors text-white placeholder-white/30"
                  placeholder="Jensen"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">E-mail*</label>
              <input
                type="email"
                required
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors text-white placeholder-white/30"
                placeholder="navn@eksempel.dk"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Telefonnummer*</label>
              <input
                type="tel"
                required
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors text-white placeholder-white/30"
                placeholder="+45 00 00 00 00"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Hvad kan vi hjælpe med?</label>
              <select className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors text-white appearance-none cursor-pointer">
                <option className="bg-primary" value="">Vælg en ydelse</option>
                <option className="bg-primary" value="havedesign">Havedesign</option>
                <option className="bg-primary" value="belaegning">Belægning</option>
                <option className="bg-primary" value="vedligeholdelse">Vedligeholdelse</option>
                <option className="bg-primary" value="andet">Andet</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Besked</label>
              <textarea
                rows={4}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors text-white placeholder-white/30 resize-none"
                placeholder="Fortæl os lidt om dit projekt..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-accent text-primary font-bold rounded-2xl hover:bg-white transition-all flex items-center justify-center space-x-3 group"
            >
              <span>Send besked</span>
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            
            <p className="text-center text-xs text-gray-400 pt-4">
              Ved at indsende denne formular accepterer du vores privatlivspolitik.
            </p>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
