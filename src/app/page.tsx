"use client";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Image from "next/image";
import useMobile from "./hooks/useMobile";

export default function Home() {
  const isMobile = useMobile();
  const largeText = isMobile ? "text-2xl" : "text-4xl";
  const headerStyle = {
    fontSize: isMobile ? "40px" : "60px",
    lineHeight: "1.2em",
  };
  const paddingLeft = isMobile ? "pl-2" : "pl-5";
  const width = {
    width: isMobile ? "100%" : "1100px",
  };

  return (
    <div className="bg-gunmetal text-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar isMobile={isMobile} />
      <main
        className="flex flex-col gap-8 row-start-2 items-center sm:items-start"
        id="solutions"
        style={width}
      >
        <Container color="gunmetal" noPadding>
          <div className="w-full text-center">
            <h2 className={`${largeText} font-bold mb-10`} style={headerStyle}>
              Building Apps is Hard... But it doesn&apos;t have to be
            </h2>
            <p className="mb-5">
              At Shortest Path Consulting, we deliver tailored solutions that
              streamline operations, enhance current and future technology
              implementations, and drive business growth. 🚀
            </p>
          </div>
        </Container>
        <Container
          color="slateGray"
          title="Why Shortest Path?"
          id="why-shortest-path"
        >
          <div className="w-full text-center mt-10">
            <ul className={`list-disc ${paddingLeft} text-left space-y-4 mb-5`}>
              <ol className={`list-decimal ${paddingLeft} space-y-2`}>
                <li className="pb-3">
                  <strong>Bottleneck Research:</strong> We focus on the
                  bottlenecks of your business and provide solutions to remove
                  them. Looking at your own product over a period of time
                  creates a blinding bias. By providing our unique perspective,
                  we can help you see the bottlenecks that you may have missed.
                </li>
                <li className="pb-3">
                  <strong>Business Optimizations:</strong> We analyze your
                  current data, processes, and analytics to refine business
                  procedures and increase efficiency.
                </li>
                <li className="pb-3">
                  <strong>Technology Self-Sufficiency:</strong> Our goal is for
                  your business to be self-reliant, so we provide training and
                  support to ensure your team can maintain and adapt to new
                  systems and processes.
                </li>
                <li className="pb-3">
                  <strong>Filling the Gaps:</strong> We support your team
                  through technology transitions with strategic planning and
                  training, hiring and scaling support, and project management.
                </li>
              </ol>
            </ul>
          </div>
        </Container>
        <Container id="what-we-do">
          <div className="w-full">
            <div
              className={`flex ${
                isMobile ? "flex-col-reverse" : "flex-col"
              } sm:flex-row items-center gap-8`}
            >
              <div className="w-full sm:w-2/3 text-left">
                <h2 className={`${largeText} font-bold mb-4 text-center`}>
                  What We Do
                </h2>
                <ul
                  className={`{list-disc ${paddingLeft} text-left space-y-4 mb-10`}
                >
                  <li>
                    <strong>Growth Analysis:</strong> Comprehensive analysis and
                    strategic advice to identify opportunities for improvement
                    and growth.
                  </li>
                  <li>
                    <strong>Project Management:</strong> Guiding complex
                    projects from conception through to completion ensuring
                    timelines, budgets, and specifications are met.
                  </li>
                  <li>
                    <strong>Training and Support:</strong> Offering ongoing
                    support and training to ensure sustainable success and
                    adaptation to new systems and processes.
                  </li>
                  <li>
                    <strong>Custom Solutions:</strong> Whether its building from
                    scratch, wordpress or shopify, we can help you build a
                    website that fits your needs.
                  </li>
                </ul>
                <p className="font-bold text-lg mt-6 text-left">Our Edge:</p>
                <p className="text-left">
                  Deep industry knowledge across technology and business
                  management. Customized Solutions: We focus on creating
                  solutions that are uniquely tailored to the needs of your
                  business with no fluff added.
                </p>
              </div>
              <div className="w-full sm:w-1/3">
                <Image
                  className="w-full h-auto rounded-lg"
                  src="/spc5.png"
                  alt="Progammer Coding"
                  width={200}
                  height={200}
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
        <Container color="black" id="contact">
          <div className="w-full mt-12">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="w-full sm:w-1/2">
                <Image
                  className="w-full h-auto rounded-lg"
                  src="/shortestpathiphoneprocessed.png"
                  alt="Shortest Path Logo"
                  width={300}
                  height={300}
                  priority
                />
              </div>
              <div className="w-full sm:w-1/2 text-left">
                <h2 className={`${largeText} font-bold mb-4`}>Get in Touch</h2>
                <p className="mb-4">
                  <strong>Email: </strong>
                  <a
                    href="mailto:shortestpathc@gmail.com"
                    className="underline"
                  >
                    shortestpathc@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong> (650) 716-8403
                </p>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Shortest Path Consulting © 2024
      </footer>
    </div>
  );
}
