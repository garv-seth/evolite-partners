'use client';
import React, { useRef } from "react";
import {
    motion,
    useMotionValue,
    useMotionTemplate,
    useAnimationFrame,
} from "framer-motion";

const GridPattern = ({ offsetX, offsetY }) => (
    <svg className="grid-svg" width="100%" height="100%">
        <defs>
            <motion.pattern
                id="evolite-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
                x={offsetX}
                y={offsetY}
            >
                <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="var(--color-gold)"
                    strokeWidth="0.6"
                />
            </motion.pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#evolite-grid)" />
    </svg>
);

export default function InfiniteGridHero({ children }) {
    const containerRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const gridOffsetX = useMotionValue(0);
    const gridOffsetY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    useAnimationFrame(() => {
        gridOffsetX.set((gridOffsetX.get() + 0.35) % 40);
        gridOffsetY.set((gridOffsetY.get() + 0.35) % 40);
    });

    const maskImage = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="hero"
        >
            {/* Background gradient */}
            <div className="hero-bg" />

            {/* Base grid — very faint, always visible */}
            <div className="grid-layer grid-layer-base">
                <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
            </div>

            {/* Interactive grid — follows mouse cursor */}
            <motion.div
                className="grid-layer grid-layer-active"
                style={{ maskImage, WebkitMaskImage: maskImage }}
            >
                <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
            </motion.div>

            {/* Gradient orbs */}
            <div className="hero-orbs">
                <div className="hero-orb hero-orb-1" />
                <div className="hero-orb hero-orb-2" />
                <div className="hero-orb hero-orb-3" />
            </div>

            {/* Content */}
            <div className="hero-content-wrapper">
                {children}
            </div>
        </section>
    );
}
