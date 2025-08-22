export interface TestimonialCardProps {
  stars: 1 | 2 | 3 | 4 | 5;
  statement: string;
  person: {
    name: string;
    title: string;
    avatar: string;
  };
}
