"use client";

import { Review } from "@/api/firebase.config";
import { StarFilledIcon, StarIcon, PersonIcon } from "@radix-ui/react-icons";
import { Box, Button, TextField, TextArea, Text } from "@radix-ui/themes";
import { Label } from "radix-ui";
import { useState } from "react";
import { useCreateReview } from "./hooks/useCreateReview";
import { ReviewsMessage } from "./reviews.message";
import { PageLang } from "@/models/pageLang.model";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";

export const Form = ({ lang }: PageLang) => {
  const [reviewData, setReviewData] = useState<Partial<Review>>({
    message: "",
    name: "",
    rating: 0,
  });

  const setNewValue = (key: string, value: string | number) => {
    setReviewData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const [disableReview, setDisableReview] = useState<boolean>(false);
  const [hover, setHover] = useState(0);
  const { createReview } = useCreateReview();

  const handleSubmit = async () => {
    if (!reviewData.name) {
      return;
    }

    await createReview(reviewData);
    setDisableReview(true);

    setTimeout(() => {
      setReviewData({
        message: "",
        name: "",
        rating: 0,
      });
      setDisableReview(false);
    }, 60000);
  };

  if (disableReview) {
    return <ReviewsMessage />;
  }

  return (
    <form className="review-form">
      {/* Stars */}
      <Box className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <Button
            type="button"
            key={star}
            className={`star ${
              star <= (hover || reviewData.rating || 0) ? "active" : ""
            }`}
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
        <Label.Root htmlFor="name">
          {LanguageKeys[lang].review.form.nameHeading}
        </Label.Root>
        <Text size="1" style={{ fontStyle: "italic" }}>
          {LanguageKeys[lang].review.form.nameSubHeading}
        </Text>
        <TextField.Root
          required
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
        <Label.Root htmlFor="review">
          {LanguageKeys[lang].review.form.feedbackHeading}
        </Label.Root>
        <Text size="1" style={{ fontStyle: "italic" }}>
          {LanguageKeys[lang].review.form.feedbackSubHeading}
        </Text>
        <TextArea
          id="review"
          value={reviewData.message}
          onChange={(e) => setNewValue("message", e.target.value)}
          placeholder={LanguageKeys[lang].review.form.feedbackPlaceholder}
          rows={4}
        />
      </Box>

      <Button
        onClick={() => handleSubmit()}
        className="submit-btn"
        type="button"
        disabled={!reviewData.name || !reviewData.rating}
      >
        {LanguageKeys[lang].review.form.submitBtn}
      </Button>
      <Text style={{ fontStyle: "italic" }} size="1">
        {LanguageKeys[lang].review.form.reviewDisclaimer}
      </Text>
    </form>
  );
};
