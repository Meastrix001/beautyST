"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Separator,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { Label } from "radix-ui";
import { Dispatch, SetStateAction, useState } from "react";
import { PersonIcon, StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { brand } from "@/theme/brand.config";
import { useCreateReview } from "./hooks/useCreateReview";
import { Review } from "@/api/firebase.config";

export default function ReviewPage() {

  const [reviewData, setReviewData] = useState<Partial<Review>>({
    message: "",
    name: "",
    rating: 0,
  }
  )

  const setNewValue = (key: string, value: string | number) => {
    setReviewData((prev) => ({
      ...prev,
      [key]: value
    }
    ))
  }
  const [disableReview, setDisableReview] = useState<boolean>(false);
  const [hover, setHover] = useState(0);
  const { createReview } = useCreateReview()

  const handleSubmit = () => {
    createReview(reviewData)
    setDisableReview(true);

    setTimeout(() => {
      setDisableReview(false);
    }, 60000);
  };

  return (
    <Box className="prices">
      <Container>
        <Flex
          direction="column"
          align="center"
          gap="6"
          className="prices__container"
        >
          <Box className="prices__hero" mb="6">
            <Heading size="8" weight="bold" mb="3" align="center">
              Leave a Review
            </Heading>
            <Text size="4" className="prices__subtitle" align="center">
              We’d love to hear your feedback about your service!
            </Text>
          </Box>

          <Separator size="4" />

          <Flex
            className="prices__list"
            direction={{ initial: "column", md: "row" }}
            justify="center"
            gap="6"
            mt="6"
          >
            {disableReview ? (
              <ThankYouMess />
            ) : (
              <Form
                handleSubmit={handleSubmit}
                hover={hover}
                setHover={setHover}
                reviewData={reviewData}
                setNewValue={setNewValue}
              />
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

const ThankYouMess = () => {
  return (
    <Box>
      <Flex direction="column" justify="center" align="center">
        <Text size="7">Thank you!</Text>
        <Text
          color="gray"
          size="4"
          className="prices__subtitle"
          align="center"
          mb="7"
        >
          Thank you so much for your review! We really appreciate your feedback
          and support.
        </Text>

        {/* <Box> */}
        <Image src={brand.company.logo} alt="brand logo" />
        {/* </Box> */}
      </Flex>
    </Box>
  );
};

const Form = ({
  handleSubmit,
  hover,
  setHover,
  reviewData,
  setNewValue
}: {
  handleSubmit: (e: React.FormEvent) => void;
  hover: number;
  setHover: Dispatch<SetStateAction<number>>
  reviewData: Partial<Review>
  setNewValue: (key: string, value: string | number) => void
}) => {
  return (
    <form onSubmit={handleSubmit} className="review-form">
      {/* Stars */}
      <Box className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <Button
            type="button"
            key={star}
            className={`star ${star <= (hover || reviewData.rating || 0) ? "active" : ""}`}
            onClick={() => setNewValue("rating", star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            {star <= (hover || reviewData.rating || 0) ? (
              <StarFilledIcon width={36} height={36} />
            ) : (
              <StarIcon width={36} height={36} />
            )}
          </Button>
        ))}
      </Box>

      <Box className="field">
        <Label.Root htmlFor="name">Your Name</Label.Root>
        <Text size="1" style={{ fontStyle: "italic" }}>Your name helps us validate your review.</Text>
        <TextField.Root
          placeholder=""
          id="name"
          type="text"
          value={reviewData.name}
          onChange={(e) => setNewValue("name", e.target.value)}
        >
          <TextField.Slot>
            <PersonIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
      </Box>

      <Box className="field">
        <Label.Root htmlFor="review">Your Review</Label.Root>
        <Text size="1" style={{ fontStyle: "italic" }}>Any feedback or tips is welcome.</Text>
        <TextArea
          id="review"
          value={reviewData.message}
          onChange={(e) => setNewValue("message", e.target.value)}
          placeholder="Tell us about your experience..."
          rows={4}
        />
      </Box>

      <Button type="submit" className="submit-btn">
        Submit Review
      </Button>
      <Text style={{ fontStyle: "italic" }} size="1">Reviews will be checked for explicit language or false reviews before being published. </Text>
    </form>
  );
};
