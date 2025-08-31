"use client";

import { useState, useEffect } from "react";
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
    });

    useEffect(() => {
        bgImages.forEach((src) => {
            const img = new Image();
            img.src = src;
        });

    });

    return (
        <Box
            className="bg_test"
            style={{
                backgroundImage: `url(${bgImages[currentBg]})`,
                transition: "background-image 1s ease-in-out",
            }}
        />
    );
}
