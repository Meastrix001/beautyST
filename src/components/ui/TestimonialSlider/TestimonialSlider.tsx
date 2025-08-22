"use client";
import TestimonialCard from "@/components/ui/TestimonialCard/TestimonialCard";
import { Box } from "@radix-ui/themes";
import Slider from "react-infinite-logo-slider";
import React from "react";
import { testimonials } from "@/constants/testimonials";

/**
 * A testimonial slider component that displays a list of testimonials in a horizontally scrolling slider.
 *
 * @returns {JSX.Element} The rendered testimonial slider.
 *
 * @example
 * <TestimonialSlider />
 *
 * @remarks
 * - Uses the `Slider` component to create a horizontally scrolling carousel of testimonials.
 * - Each testimonial is rendered inside a `TestimonialCard` component.
 * - The slider supports pausing on hover and custom width and duration.
 */

const TestimonialSlider: React.FC = () => {
  return (
    <Slider width="350px" duration={80} pauseOnHover={true} blurBorders={false}>
      {testimonials.map((testimonial, index) => (
        <Slider.Slide key={index}>
          <Box minHeight="100%" maxWidth="100%">
            <TestimonialCard
              stars={testimonial.stars}
              statement={testimonial.statement}
              person={{
                name: testimonial.person.name,
                title: testimonial.person.title,
                avatar: testimonial.person.avatar,
              }}
            />
          </Box>
        </Slider.Slide>
      ))}
    </Slider>
  );
};

export default TestimonialSlider;
