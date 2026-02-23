import { motion } from 'motion/react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: "Morten Jensen",
    role: "Ejer & Chef-anlægsgartner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    bio: "Morten har over 20 års erfaring inden for anlægsbranchen. Han startede Grøn Elegance i 2010 med en vision om at bringe mere natur og æstetik ind i de danske parcelhushaver. Morten er uddannet anlægsgartner og har en passion for stenarbejde og moderne havedesign.",
    social: { linkedin: "#", mail: "morten@groenelegance.dk" }
  },
  {
    name: "Lars Nielsen",
    role: "Projektleder & Belægningsekspert",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    bio: "Lars er manden, der får tingene til at ske på pladsen. Han er ekspert i alt fra store belægningsopgaver til komplekse støttemure. Med et skarpt øje for detaljen sikrer han, at alle projekter lever op til vores høje kvalitetskrav og bliver færdige til tiden.",
    social: { linkedin: "#", mail: "lars@groenelegance.dk" }
  },
  {
    name: "Sofie Holm",
    role: "Havearkitekt & Beplantningsansvarlig",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    bio: "Sofie er vores kreative sjæl. Hun er uddannet havearkitekt og ved præcis, hvilke planter der trives hvor. Hun skaber de smukkeste beplantningsplaner, der sikrer, at din have er spændende at kigge på året rundt – også i de mørke vintermåneder.",
    social: { instagram: "#", mail: "sofie@groenelegance.dk" }
  }
];

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      {/* Intro Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-8 leading-tight">
            Vi skaber uderum med <span className="text-accent">sjæl og kvalitet</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-6">
            Grøn Elegance blev grundlagt med en simpel mission: At levere anlægsarbejde af højeste kvalitet, hvor kundens ønsker og havens naturlige potentiale altid er i centrum.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed">
            Vi tror på, at en have er mere end bare græs og fliser. Det er et frirum, et sted til fordybelse og et samlingspunkt for familien. Derfor lægger vi vores hjerte i hvert eneste projekt, uanset om det er en lille beskæringsopgave eller en totalrenovering af en herregårdshave.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=1000"
              alt="Vores arbejde"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-accent p-10 rounded-3xl shadow-xl hidden md:block">
            <div className="text-4xl font-display font-bold text-primary mb-1">15+</div>
            <div className="text-primary/70 font-medium">Års erfaring</div>
          </div>
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="space-y-32">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-primary mb-6">Mød holdet bag</h2>
          <p className="text-gray-500">Et dedikeret team af fagmænd og kreative sjæle, der brænder for det grønne håndværk.</p>
        </div>

        <div className="space-y-24">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className={`relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-xl ${idx % 2 === 0 ? 'bg-primary/5' : 'bg-accent/5'}`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">{member.role}</span>
                  <h3 className="text-4xl font-display font-bold text-primary">{member.name}</h3>
                </div>
                <p className="text-lg text-gray-500 leading-relaxed italic">
                  "{member.bio}"
                </p>
                <div className="flex space-x-4 pt-4">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all">
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a href={member.social.instagram} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all">
                      <Instagram size={20} />
                    </a>
                  )}
                  <a href={`mailto:${member.social.mail}`} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
