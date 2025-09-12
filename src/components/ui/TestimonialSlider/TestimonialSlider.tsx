"use client";
import TestimonialCard from "@/components/ui/TestimonialCard/TestimonialCard";
import { Box, Flex, Spinner } from "@radix-ui/themes";
import Slider from "react-infinite-logo-slider";
import React, { useEffect, useState } from "react";
import { getAllReviews, Review } from "@/api/firebase.config";

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

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await getAllReviews();
      setReviews(data as Review[]);
    };
    fetchReviews();
  }, []); // <-- empty dependency so it runs once



  if (reviews.length === 0 || !reviews) {
    return <Flex align={"center"} justify={"center"}>
      <Spinner />
    </Flex>
  }

  return (

    <Box className="testimonial">
      <Slider width="350px" duration={80} pauseOnHover={true} blurBorders={false}>

        {reviews.map((review, index) => (
          <Slider.Slide key={index}>
            <Box maxWidth="100%" width={"100%"} >
              <TestimonialCard
                index={index}
                review={review}
              />
            </Box>
          </Slider.Slide>
        ))}
      </Slider>

    </Box>
  );
};

export default TestimonialSlider;
