import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface SPWelcomeEmailProps {
  steps?: {
    id: number;
    Description: React.ReactNode;
  }[];
  links?: string[];
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const PropDefaults: SPWelcomeEmailProps = {
  steps: [
    {
      id: 1,
      Description: (
        <li className="mb-20" key={1}>
          <strong>Communication.</strong> You should expect a quick response
          from us in 24 hours or less. Our team is ready to serve and connect
          with you as soon as possible!
        </li>
      ),
    },
    {
      id: 2,
      Description: (
        <li className="mb-20" key={2}>
          <strong>What to expect form our work.</strong> Our focus is to
          bring the best out of your business. We do this through vision,
          excellence and integral work!{" "}
          <Link href={'https://www.shortestpath.org/#values'}>Read over it in detail on our site</Link>.
        </li>
      ),
    },
    {
      id: 3,
      Description: (
        <li className="mb-20" key={3}>
          <strong>Need Immediate Help?</strong> Our support team is here for you!
          If you have any questions or doubts feel free to reach out to our direct line
          at 650-716-8403.
        </li>
      ),
    },
  ],
};

export function WelcomeEmail({
  steps = PropDefaults.steps,
}: SPWelcomeEmailProps): JSX.Element {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite text-base font-sans">
          <Img
            src={`${baseUrl}/logo-letters.png`}
            width="110"
            height="75"
            alt="Shortest Path Logo"
            className="mx-auto my-20"
          />
          <Container className="bg-white p-45">
            <Heading className="text-center my-0 leading-8 text-3xl font-bold">
              Welcome to ShortestPath
            </Heading>
            <Section>
              <Row>
                <Text className="text-base">
                  Thank you for connecting with us! We&apos;re
                  delighted to welcome you to the ShortestPath Consulting
                  community where we help businesses thrive and scale.
                </Text>

                <Text className="text-base">
                  Here&apos;s what to expect next:
                </Text>
              </Row>
            </Section>

            <ul>{steps?.map(({ Description }) => Description)}</ul>
            <Section>
              <Row>
                <Text className="text-base">
                  We believe Shortest Path Consulting will help you achieve your software goals, and were here to assis you every step of the way.
                </Text>
                <Text className="text-base">
                  Thank you for joining us! Were excited to see what you&apos;ll achieve.
                </Text>
                <Text className="text-base">
                  Warm regards,<br />
                  The ShortestPath Team
                </Text>
              </Row>
            </Section>
          </Container>

          <Container className="mt-20">
            <Section>
            </Section>
            <Text className="text-center text-gray-400 mb-45">
              Shortest Path Consulting, San Francisco, CA
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
