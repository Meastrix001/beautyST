"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Box } from "@radix-ui/themes";

export default function BackgroundSlider() {
    const [currentBg, setCurrentBg] = useState(0);

    const bgImages = [
        "/static/landing/slider/slider_2.jpg",
        "/static/landing/slider/slider_3.jpg",
        "/static/landing/slider/slider_4.jpg",
        "/static/landing/slider/slider_5.jpg",
        "/static/landing/slider/slider_6.jpg",
        "/static/landing/slider/slider_1.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % bgImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [bgImages.length]);

    return (
        <Box className="slider-container">
            {bgImages.map((src, i) => (
                <Box key={i} className={`slide ${i === currentBg ? "active" : ""}`}>
                    <Image
                        rel="preload"
                        src={src}
                        alt={`Background ${i}`}
                        fill
                        priority={i === 0} // load first image eagerly
                        sizes="100vw"
                        style={{ objectFit: "cover" }}
                    />
                </Box>
            ))}
        </Box>
    );
}
