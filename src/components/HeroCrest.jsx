'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroCrest() {
    return (
        <div className="hero-crest-visual">

            <div className="hcv-ring hcv-ring-1" />
            <div className="hcv-ring hcv-ring-2" />

            <motion.div
                className="hcv-crest"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
                <Image
                    src="/crest.jpeg"
                    alt="Evolite Partners Crest"
                    width={260}
                    height={260}
                    className="hcv-crest-img"
                    priority
                    sizes="260px"
                />
            </motion.div>

            <motion.div className="hcv-badge hcv-badge-tl"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
                <div className="hcv-num">17</div>
                <div className="hcv-label">Businesses Built</div>
            </motion.div>

            <motion.div className="hcv-badge hcv-badge-tr"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                <div className="hcv-num">20<span className="hcv-plus">+</span></div>
                <div className="hcv-label">Countries Active</div>
            </motion.div>

            <motion.div className="hcv-badge hcv-badge-bl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}>
                <div className="hcv-num">20<span className="hcv-unit">Yrs</span></div>
                <div className="hcv-label">Fortune 500</div>
            </motion.div>

            <motion.div className="hcv-badge hcv-badge-br"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}>
                <div className="hcv-pride">P·R·I·D·E</div>
                <div className="hcv-label">Framework</div>
            </motion.div>

        </div>
    );
}
