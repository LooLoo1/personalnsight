import { Typography } from "components/Typography";

const { Title, Description, Button } = Typography;

export default function Home() {
  return (
    <section className="flex w-96 my-5 flex-col p-2 mx-auto gap-8 group alert">
      <Title>Discover Your Relationship Astrology</Title>

      <Description>
        Take our survey to uncover personalized insights into your relationships
        based on astrology. We&apos;ll guide you through a series of questions
        to tailor-make your astrological profile. Understanding your
        astrological blueprint can revolutionize your approach to relationships.
        Let&apos;s explore together!
      </Description>

      <Button state="alert">Start Now</Button>
    </section>
  );
}
