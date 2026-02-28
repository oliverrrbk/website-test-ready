import React from "react";
import { cn } from "../lib/utils";
import { Marquee } from "./ui/marquee";
import { AnimatedText } from "./ui/animated-underline-text-one";
import { motion } from "framer-motion";

const reviews = [
    {
        name: "Jesper N.",
        username: "@jespern12",
        body: "Helt fantastisk arbejde. De tryllede vores overgroede have om til en ren oase på under en uge. Kan varmt anbefales!",
        img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
    },
    {
        name: "Mette K.",
        username: "@mette_kristensen",
        body: "Professionelle fra start til slut. Flisebelægningen i vores indkørsel sidder lige i skabet.",
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    },
    {
        name: "Søren P.",
        username: "@soeren_p",
        body: "Sikker og effektiv træfældning af et stort træ tæt på huset. Imponerende arbejde og oprydning.",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    },
    {
        name: "Lone H.",
        username: "@lonehansen_dk",
        body: "Vores nye træterrasse er husets nye samlingspunkt. Kæmpe ros for de gode løsningsforslag og snedkerarbejde.",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    },
    {
        name: "Anders M.",
        username: "@amikkelsen",
        body: "Det faste vedligeholdelsesabonnement er det absolut bedste vi har gjort. Haven står bare skarpt og er nydelig.",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    },
    {
        name: "Camilla R.",
        username: "@camillarasmussen",
        body: "Fantastisk service og rådgivning omkring plantevalg. Vores bede blomstrer smukkere end nogensinde før.",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard: React.FC<{
    img: string;
    name: string;
    username: string;
    body: string;
}> = ({ img, name, username, body }) => {
    return (
        <figure
            className={cn(
                "group/card relative w-72 md:w-80 cursor-pointer overflow-hidden rounded-xl border p-6 m-2",
                "border-gray-100 bg-white shadow-sm transition-all duration-300 card-shadow",
            )}
        >
            <div className="flex flex-row items-center gap-4">
                <img className="rounded-full w-12 h-12 object-cover border-2 border-primary/10 transition-colors duration-300 group-hover/card:border-accent" alt={name} src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-base font-semibold text-gray-900 font-display tracking-tight transition-colors duration-300 group-hover/card:text-accent">
                        {name}
                    </figcaption>
                    <p className="text-[13px] font-medium text-gray-500 transition-colors duration-300 group-hover/card:text-accent/80">{username}</p>
                </div>
            </div>
            <blockquote className="mt-4 text-gray-700 leading-relaxed text-sm md:text-[15px] transition-colors duration-300 group-hover/card:text-accent">"{body}"</blockquote>
        </figure>
    );
};

export function MarqueeReviewsVertical() {
    return (
        <section className="bg-bg-soft pt-12 pb-12 md:pt-16 md:pb-16 px-4 md:px-8 border-y border-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
                    <AnimatedText
                        text="Hvad vores kunder siger"
                        textClassName="text-4xl md:text-5xl font-display font-bold text-primary relative z-10"
                        underlineDuration={1.2}
                        className="items-start max-w-max mx-auto lg:mx-0"
                    />
                    <motion.p
                        initial={{ paddingTop: "0px", opacity: 0 }}
                        whileInView={{ paddingTop: "16px", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="text-gray-500 text-lg md:text-xl max-w-lg mx-auto lg:mx-0"
                    >
                        Læs anmeldelser fra nogle af de mange haveejere, vi allerede har hjulpet.
                    </motion.p>
                </div>

                <div className="flex-1 w-full mx-auto flex h-[500px] md:h-[600px] flex-row items-center justify-center overflow-hidden relative">
                    <Marquee pauseOnHover vertical className="[--duration:30s]">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.username} img={review.img} name={review.name} username={review.username} body={review.body} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover vertical className="[--duration:30s]">
                        {secondRow.map((review) => (
                            <ReviewCard key={review.username} img={review.img} name={review.name} username={review.username} body={review.body} />
                        ))}
                    </Marquee>

                    {/* Gradient masking for soft edges mapped to bg-bg-soft hex #f8f9fa */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#f8f9fa] to-transparent z-10"></div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f8f9fa] to-transparent z-10"></div>
                </div>

            </div>
        </section>
    );
}
