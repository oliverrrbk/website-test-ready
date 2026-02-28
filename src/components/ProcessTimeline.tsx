import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

const steps = [
  {
    num: "1",
    title: "Kontakt & Besigtigelse",
    desc: "Vi starter med et uforpligtende møde, hvor vi besigtiger dit udeareal og lytter til dine visioner. Vi rådgiver om materialevalg, designmuligheder og afstemmer proaktivt forventningerne til projektet.",
    align: "right"
  },
  {
    num: "2",
    title: "Tilbud & Planlægning",
    desc: "Du modtager et gennemskueligt og fast tilbud uden skjulte tillæg. Vi udarbejder en klar tidsplan og sætter rammerne, så hele projektforløbet bliver struktureret og trygt for dig som bygherre.",
    align: "left"
  },
  {
    num: "3",
    title: "Udførelse & Styring",
    desc: "Vores erfarne anlægsgartnere fører projektet ud i livet med fokus på holdbarhed og korrekt opbygning. Med fast byggeledelse sikrer vi, at planen overholdes, og du holdes løbende opdateret i byggefasen.",
    align: "right"
  },
  {
    num: "4",
    title: "Aflevering & Garanti",
    desc: "Vi gennemgår det færdige resultat i fællesskab for at sikre, at alt lever op til det aftalte og vores strenge kvalitetskrav. Først når alt anlægsarbejde står skarpt og du er tilfreds, er vi i mål.",
    align: "left"
  }
];

export const ProcessTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section data-section="process" className="pt-16 pb-16 md:pt-20 md:pb-20 bg-bg-soft text-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]"></div>
      </div>
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-primary mb-6 px-5 py-2.5 bg-primary/5 rounded-full border border-primary/20"
          >
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Vores proces
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-5xl font-bold mb-6 text-gray-900"
          >
            Sådan <span className="text-accent">arbejder</span> vi
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg leading-relaxed"
          >
            En enkel og gennemsigtig proces – fra første kontakt til færdig have.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto" ref={containerRef}>
          {/* Timeline Line */}
          <svg className="absolute left-1/2 -translate-x-1/2 top-0 w-full pointer-events-none hidden md:block" preserveAspectRatio="none" viewBox="0 0 800 1000" style={{ height: "calc(100% + 80px)" }}>
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="currentColor" className="text-primary" stopOpacity="0.6"></stop>
                <stop offset="100%" stopColor="currentColor" className="text-primary" stopOpacity="0.3"></stop>
              </linearGradient>
            </defs>
            <path d="M 400 40 C 400 100, 220 140, 220 200 S 580 300, 580 360 S 220 460, 220 520 S 580 620, 580 680 S 400 780, 400 860 L 400 960" fill="none" className="stroke-gray-300" strokeWidth="2" strokeLinecap="round"></path>
            <motion.path
              d="M 400 40 C 400 100, 220 140, 220 200 S 580 300, 580 360 S 220 460, 220 520 S 580 620, 580 680 S 400 780, 400 860 L 400 960"
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ pathLength }}
            ></motion.path>
          </svg>

          {/* Mobile middle line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 md:hidden">
            <motion.div className="w-full bg-gradient-to-b from-primary to-primary/30 origin-top" style={{ height: '100%', scaleY: pathLength }}></motion.div>
          </div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, idx) => (
              <div key={idx} className={`relative flex items-center gap-6 ${step.align === 'right' ? 'md:flex-row flex-row' : 'md:flex-row-reverse flex-row'}`}>
                {/* Icon Marker */}
                <div className={`relative z-10 flex-shrink-0 ${step.align === 'right' ? 'md:ml-auto ml-0' : 'md:mr-auto ml-0'}`}>
                  <motion.div
                    initial={{ scale: 0, backgroundColor: 'var(--color-bg-soft)' }}
                    whileInView={{ scale: 1, backgroundColor: 'var(--color-primary)' }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.4 }}
                    className="relative w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-white shadow-lg border-2 border-primary/20"
                  >
                    <Check className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </motion.div>
                </div>

                {/* Card */}
                <div className={`flex-1 max-w-md ${step.align === 'right' ? 'md:text-right md:pr-6 pl-4 md:pl-0' : 'md:text-left md:pl-6 pl-4 md:pl-0'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: step.align === 'right' ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    <div className={`flex items-center gap-2 mb-3 ${step.align === 'right' ? 'md:justify-end' : ''}`}>
                      <span className="text-xs font-mono text-accent font-bold uppercase tracking-wider">Step {step.num}</span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold mb-2 text-gray-900">{step.title}</h3>
                    <p className="leading-relaxed text-sm md:text-base text-gray-500">{step.desc}</p>

                    <div className="mt-5 h-0.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="h-full bg-primary rounded-full transition-transform"
                        style={{ transformOrigin: step.align === 'right' ? 'right center' : 'left center' }}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
