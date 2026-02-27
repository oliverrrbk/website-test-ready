import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Havedesign & Anlæg",
    desc: "Omdan dit drømmeuderum til virkelighed med vores havearkitekter. Vi hjælper med alt fra den spæde idé og skitsering til den færdige haveplan og endelige udførelse.",
    image: "/images/slideshow/2.png",
    features: ["Haveplaner", "Beplantning", "Græsplæner"]
  },
  {
    title: "Belægning & Terrasser",
    desc: "Skab fundamentet for det gode udeliv med professionel belægning. Vi udfører lægning af fliser, sten og flotte træterrasser i højeste kvalitet med fokus på lang levetid.",
    image: "/images/slideshow/3.png",
    features: ["Indkørsler", "Terrasser", "Støttemure"]
  },
  {
    title: "Vedligeholdelse",
    desc: "Slip for det hårde fysiske arbejde og få en skarp finish. Lad os stå for det grove, så du trygt kan læne dig tilbage og bare nyde din velholdte have hele året rundt.",
    image: "/images/slideshow/4.png",
    features: ["Hækklipning", "Græsslåning", "Ukrudtsbekæmpelse"]
  },
  {
    title: "Træfældning & Beskæring",
    desc: "Vi udfører alt inden for avanceret og sikker fældning af vanskelige træer. Vi tilbyder derudover professionel beskæring, så dine buske altid forbliver sunde og frodige.",
    image: "/images/slideshow/5.png",
    features: ["Sektionsfældning", "Topkapning", "Stubfræsning"]
  },
  {
    title: "Hegn & Indhegning",
    desc: "Få skabt en smuk og elegant afskærmning omkring dit frirum. Vi leverer og opsætter alle typer hegn, som naturligt passer til din husstil og imødekommer dine praktiske behov.",
    image: "/images/slideshow/6.png",
    features: ["Træhegn", "Panelhegn", "Låger & porte"]
  }
];

const ServicesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
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
          <Link to="/om-os" className="btn-primary inline-flex items-center space-x-2">
            <span>Læs om hvordan vi gør</span>
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="group relative bg-white rounded-[2.5rem] overflow-hidden card-shadow border border-gray-100 flex flex-col h-full transition-all duration-500"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-display font-bold text-primary mb-4 transition-colors group-hover:text-accent">{service.title}</h3>
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
          variants={itemVariants}
          className="bg-primary rounded-[2.5rem] p-10 text-white flex flex-col justify-center items-center text-center space-y-8 relative overflow-hidden group shadow-xl"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform duration-700" />

          <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center rotate-12 transition-transform duration-500 group-hover:rotate-0">
            <ArrowUpRight size={40} className="text-primary -rotate-12 transition-transform duration-500 group-hover:rotate-0" />
          </div>
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Har du en speciel opgave?</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Vi elsker udfordringer. Kontakt os for en snak om dit unikke projekt.
            </p>
          </div>
          <Link to="/kontakt" className="w-full py-4 bg-white text-primary font-bold rounded-full hover:bg-accent hover:text-white transition-all duration-300">
            Kontakt os nu
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ServicesPage;
