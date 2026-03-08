"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring } from 'motion/react';

interface GrassParticle {
    id: number;
    x: number;
    y: number;
    rotation: number;
    type: 'blade' | 'leaf';
    scale: number;
}

const SPRING = {
    mass: 0.1,
    damping: 15,
    stiffness: 100,
};

const GrassBladeIcon = ({ className }: { className?: string }) => (
    <svg
        width="12"
        height="20"
        viewBox="0 0 12 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M6 0C6 0 4 5 4 10C4 12 5 15 6 20C7 15 8 12 8 10C8 5 6 0 6 0Z"
            fill="currentColor"
        />
    </svg>
);

const LeafIcon = ({ className }: { className?: string }) => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M2 14C2 14 4 10 8 8C10 7 14 6 14 2C14 2 12 6 8 8C6 9 2 10 2 14Z"
            fill="currentColor"
        />
    </svg>
);

const LandscaperCursorAnimation = () => {
    const [particles, setParticles] = useState<GrassParticle[]>([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [prevMousePosition, setPrevMousePosition] = useState({ x: 0, y: 0 });
    const particleIdRef = useRef(0);
    const lastSpawnTime = useRef(0);

    const xSpring = useSpring(0, SPRING);
    const ySpring = useSpring(0, SPRING);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPrevMousePosition(mousePosition);
            setMousePosition({ x: e.clientX, y: e.clientY });
            xSpring.set(e.clientX);
            ySpring.set(e.clientY);

            const now = Date.now();
            const timeSinceLastSpawn = now - lastSpawnTime.current;

            if (timeSinceLastSpawn > 50) {
                const dx = e.clientX - prevMousePosition.x;
                const dy = e.clientY - prevMousePosition.y;
                const velocity = Math.sqrt(dx * dx + dy * dy);

                if (velocity > 2) {
                    const angle = Math.atan2(dy, dx);
                    const newParticle: GrassParticle = {
                        id: particleIdRef.current++,
                        x: e.clientX,
                        y: e.clientY,
                        rotation: (angle * 180) / Math.PI + Math.random() * 60 - 30,
                        type: Math.random() > 0.6 ? 'leaf' : 'blade',
                        scale: 0.6 + Math.random() * 0.6,
                    };

                    setParticles((prev) => [...prev, newParticle]);
                    lastSpawnTime.current = now;

                    setTimeout(() => {
                        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
                    }, 1500);
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mousePosition, prevMousePosition, xSpring, ySpring]);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    initial={{
                        x: particle.x,
                        y: particle.y,
                        opacity: 0.8,
                        scale: particle.scale,
                        rotate: particle.rotation,
                    }}
                    animate={{
                        x: particle.x + (Math.random() - 0.5) * 40,
                        y: particle.y + Math.random() * 60 + 20,
                        opacity: 0,
                        rotate: particle.rotation + (Math.random() - 0.5) * 90,
                    }}
                    transition={{
                        duration: 1.5,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="absolute"
                    style={{
                        left: 0,
                        top: 0,
                    }}
                >
                    {particle.type === 'blade' ? (
                        <GrassBladeIcon className="text-green-600/40 dark:text-green-400/30" />
                    ) : (
                        <LeafIcon className="text-green-700/40 dark:text-green-500/30" />
                    )}
                </motion.div>
            ))}

            <motion.div
                style={{
                    x: xSpring,
                    y: ySpring,
                }}
                className="absolute w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-green-600/20 dark:bg-green-400/20 blur-sm"
            />
        </div>
    );
};

export default LandscaperCursorAnimation;
