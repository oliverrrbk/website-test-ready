import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Leaf } from "lucide-react";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Jesper N.",
        role: "Haveejer",
        content: "Helt fantastisk arbejde. De tryllede vores overgroede have om til en ren oase på under en uge. Kan varmt anbefales!",
        rating: 5,
    },
    {
        id: 2,
        name: "Mette K.",
        role: "Boligejer",
        content: "Professionelle fra start til slut. Flisebelægningen i vores indkørsel sidder lige i skabet, og de ryddede pænt op efter sig.",
        rating: 5,
    },
    {
        id: 3,
        name: "Søren P.",
        role: "Husejer",
        content: "Sikker og effektiv træfældning af et stort træ tæt på huset. Imponerende at se dem arbejde - de har virkelig styr på sagerne.",
        rating: 5,
    },
];

function CrumpledNote({ testimonial, index }: { testimonial: Testimonial; index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    const crumpledVariants = {
        initial: {
            scale: 0.85,
            rotateX: 25,
            rotateY: index === 0 ? -15 : index === 2 ? 15 : 0,
            rotateZ: index === 0 ? -8 : index === 2 ? 8 : 0,
        },
        hover: {
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            y: -20,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
            },
        },
    };

    const contentVariants = {
        initial: {
            opacity: 0,
            scale: 0.8,
        },
        hover: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.1,
                duration: 0.3,
            },
        },
    };

    return (
        <motion.div
            className="relative"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            style={{
                perspective: "1000px",
            }}
        >
            <motion.div
                variants={crumpledVariants}
                initial="initial"
                whileHover="hover"
                className="relative w-72 h-80 cursor-pointer"
                style={{
                    transformStyle: "preserve-3d",
                }}
            >
                <div
                    className="absolute inset-0 rounded-lg shadow-2xl overflow-hidden"
                    style={{
                        background: `linear-gradient(135deg, 
              ${index === 0 ? "#F5E6D3" : index === 1 ? "#E8D5C4" : "#F0DCC8"} 0%, 
              ${index === 0 ? "#E8D5C4" : index === 1 ? "#D4C4B0" : "#E0CDB8"} 100%)`,
                        boxShadow: isHovered
                            ? "0 25px 50px -12px rgba(45, 74, 62, 0.25)"
                            : "0 10px 30px -10px rgba(45, 74, 62, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
                    }}
                >
                    <div
                        className="absolute inset-0 rounded-lg opacity-30"
                        style={{
                            backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 2px,
                  rgba(45, 74, 62, 0.03) 2px,
                  rgba(45, 74, 62, 0.03) 4px
                ),
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 2px,
                  rgba(45, 74, 62, 0.03) 2px,
                  rgba(45, 74, 62, 0.03) 4px
                )
              `,
                        }}
                    />

                    <AnimatePresence>
                        {!isHovered && (
                            <motion.div
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 rounded-lg"
                                style={{
                                    background: `
                    radial-gradient(circle at 30% 40%, rgba(45, 74, 62, 0.15) 0%, transparent 50%),
                    radial-gradient(circle at 70% 60%, rgba(45, 74, 62, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 50% 80%, rgba(45, 74, 62, 0.12) 0%, transparent 40%)
                  `,
                                    filter: "blur(8px)",
                                }}
                            />
                        )}
                    </AnimatePresence>

                    <motion.div
                        variants={contentVariants}
                        initial="initial"
                        animate={isHovered ? "hover" : "initial"}
                        className="relative h-full p-8 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Leaf className="w-6 h-6 text-primary" />
                                <div className="flex gap-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={
                                                isHovered
                                                    ? { opacity: 1, scale: 1 }
                                                    : { opacity: 0, scale: 0 }
                                            }
                                            transition={{ delay: i * 0.1 }}
                                            className="text-primary text-lg"
                                        >
                                            ★
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            <motion.p
                                className="text-primary text-base leading-relaxed mb-6 font-medium"
                                style={{
                                    opacity: isHovered ? 1 : 0.4,
                                }}
                            >
                                "{testimonial.content}"
                            </motion.p>
                        </div>

                        <div>
                            <motion.h3
                                className="text-primary font-bold text-lg font-display"
                                style={{
                                    opacity: isHovered ? 1 : 0.6,
                                }}
                            >
                                {testimonial.name}
                            </motion.h3>
                            <motion.p
                                className="text-primary/70 text-sm"
                                style={{
                                    opacity: isHovered ? 1 : 0.5,
                                }}
                            >
                                {testimonial.role}
                            </motion.p>
                        </div>
                    </motion.div>
                </div>

                <div
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    style={{
                        boxShadow: "inset 0 2px 4px rgba(255, 255, 255, 0.5)",
                        opacity: isHovered ? 0 : 1,
                        transition: "opacity 0.3s",
                    }}
                />
            </motion.div>
        </motion.div>
    );
}

export function CrumpledTestimonials() {
    return (
        <div className="w-full bg-white flex items-center justify-center py-12 md:py-16 overflow-hidden">
            <div className="max-w-7xl w-full px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-display font-bold text-primary mb-4">
                        Hvad vores kunder siger
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Læs anmeldelser fra nogle af de mange haveejere, vi allerede har hjulpet.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 50, rotateZ: index === 0 ? -10 : index === 2 ? 10 : 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2,
                                type: "spring",
                                stiffness: 100,
                            }}
                        >
                            <CrumpledNote testimonial={testimonial} index={index} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
