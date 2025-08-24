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

export default function ReviewPage() {
  const [disableReview, setDisableReview] = useState<boolean>(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [loginPass, setLoginPass] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  const loginPassVal = "stiina@nick18072025";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ rating, name, review });
    setRating(0);
    setName("");
    setReview("");
    setDisableReview(true);

    setTimeout(() => {
      setDisableReview(false);
    }, 60000);
  };

  const handleLogin = () => {
    if (loginPass === loginPassVal) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  if (isLoggedIn) {
    return (
      <Box className="prices">
        <Container>
          <Flex
            direction="column"
            align="center"
            gap="6"
            className="prices__container"
          >
            <Box className="field" mt="9">
              <Label.Root htmlFor="name">Password</Label.Root>
              <TextField.Root
                placeholder=""
                id="pass"
                type="password"
                value={loginPass}
                mb="4"
                onChange={(e) => setLoginPass(e.target.value)}
              >
                <TextField.Slot>
                  <StarFilledIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
              <Button onClick={() => handleLogin()}>Log in</Button>
            </Box>
          </Flex>
        </Container>
      </Box>
    );
  }

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
                setRating={setRating}
                handleSubmit={handleSubmit}
                hover={hover}
                rating={rating}
                setHover={setHover}
                name={name}
                setName={setName}
                review={review}
                setReview={setReview}
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
  setRating,
  handleSubmit,
  hover,
  rating,
  setHover,
  name,
  setName,
  review,
  setReview,
}: {
  setRating: Dispatch<SetStateAction<number>>;
  handleSubmit: (e: React.FormEvent) => void;
  hover: number;
  rating: number;
  setHover: Dispatch<SetStateAction<number>>;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  review: string;
  setReview: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <form onSubmit={handleSubmit} className="review-form">
      {/* Stars */}
      <Box className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <Button
            type="button"
            key={star}
            className={`star ${star <= (hover || rating) ? "active" : ""}`}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            {star <= (hover || rating) ? (
              <StarFilledIcon width={36} height={36} />
            ) : (
              <StarIcon width={36} height={36} />
            )}
          </Button>
        ))}
      </Box>

      <Box className="field">
        <Label.Root htmlFor="name">Your Name</Label.Root>
        <TextField.Root
          placeholder="Optional"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        >
          <TextField.Slot>
            <PersonIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
      </Box>

      <Box className="field">
        <Label.Root htmlFor="review">Your Review</Label.Root>
        <TextArea
          id="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Tell us about your experience..."
          rows={4}
        />
      </Box>

      <Button type="submit" className="submit-btn">
        Submit Review
      </Button>
    </form>
  );
};
