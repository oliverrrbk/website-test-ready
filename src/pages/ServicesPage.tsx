import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Havedesign & Anlæg",
    desc: "Vi hjælper med alt fra den spæde idé til den færdige haveplan og udførelse.",
    image: "https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&q=80&w=800",
    features: ["Haveplaner", "Beplantning", "Græsplæner"]
  },
  {
    title: "Belægning & Terrasser",
    desc: "Professionel lægning af fliser, sten og træterrasser i højeste kvalitet.",
    image: "https://images.unsplash.com/photo-1590059391153-060481284898?auto=format&fit=crop&q=80&w=800",
    features: ["Indkørsler", "Terrasser", "Støttemure"]
  },
  {
    title: "Vedligeholdelse",
    desc: "Lad os stå for det grove, så du bare kan nyde din have hele året rundt.",
    image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800",
    features: ["Hækklipning", "Græsslåning", "Ukrudtsbekæmpelse"]
  },
  {
    title: "Træfældning & Beskæring",
    desc: "Sikker fældning af vanskelige træer og professionel beskæring af buske.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
    features: ["Sektionsfældning", "Topkapning", "Stubfræsning"]
  },
  {
    title: "Hegn & Indhegning",
    desc: "Vi opsætter alle typer hegn, der passer til din haves stil og dine behov.",
    image: "https://images.unsplash.com/photo-1610555356070-d0efb6505f81?auto=format&fit=crop&q=80&w=800",
    features: ["Træhegn", "Panelhegn", "Låger & porte"]
  }
];

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 space-y-8 md:space-y-0">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-accent-light px-4 py-2 rounded-full mb-6">
            <span className="text-primary text-sm font-bold uppercase tracking-wider">Vores ydelser</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary leading-tight">
            Hvad vi kan gøre <br /> <span className="text-accent">for dig</span>
          </h1>
        </div>
        <div className="max-w-md">
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Fra design til installation tilbyder vi kvalitetsløsninger skræddersyet til dine behov. Vi går aldrig på kompromis med kvaliteten.
          </p>
          <Link to="/kontakt" className="btn-primary inline-flex items-center space-x-2">
            <span>Se alle vores services</span>
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative bg-white rounded-[2.5rem] overflow-hidden card-shadow border border-gray-100 flex flex-col h-full"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-primary shadow-lg group-hover:bg-primary group-hover:text-white transition-colors">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>
            
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{service.desc}</p>
              
              <div className="mt-auto pt-6 border-t border-gray-50">
                <ul className="grid grid-cols-1 gap-3">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center space-x-3 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Custom Solution Card */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-primary rounded-[2.5rem] p-10 text-white flex flex-col justify-center items-center text-center space-y-8"
        >
          <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center rotate-12">
            <ArrowUpRight size={40} className="text-primary -rotate-12" />
          </div>
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Har du en speciel opgave?</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Vi elsker udfordringer. Kontakt os for en snak om dit unikke projekt.
            </p>
          </div>
          <Link to="/kontakt" className="w-full py-4 bg-white text-primary font-bold rounded-full hover:bg-accent transition-colors">
            Kontakt os nu
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
