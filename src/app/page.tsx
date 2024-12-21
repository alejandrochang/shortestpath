"use client";
import Navbar from "./components/Navbar";
import Container from "./components/CardContainer";
import useMobile from "./hooks/useMobile";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const isMobile = useMobile();
  const largeText = isMobile ? "text-2xl" : "text-4xl";
  const headerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: isMobile ? "40px" : "90px",
    lineHeight: ".9em",
  };

  const textContainerStyle: React.CSSProperties = {
    marginTop: 0,
    marginBottom: 0,
    fontSize: "57px",
    maxWidth: isMobile ? '100%' : "425px",
    padding: isMobile ? "1rem 0" : "2.5rem",
  };

  const excellenceText: React.CSSProperties = {
    marginRight: isMobile ? 0 : '65px',
    maxWidth: isMobile ? 'inherit' : '525px',
  };

  const titleStyle: React.CSSProperties = {
    letterSpacing: "-.04em",
    textTransform: "uppercase",
    fontSize: isMobile ? "30px" : "59px",
    fontWeight: 700,
    lineHeight: "83%",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: isMobile ? "0px" : "60px",
    marginBottom: isMobile ? "0px" : "50px",
    marginTop: isMobile ? "0px" : "50px",
  };

  const subtitleStyle: React.CSSProperties = {
    letterSpacing: "-0.04em",
    textTransform: "uppercase",
    fontSize: isMobile ? '48px' : "51px",
    fontWeight: 700,
    lineHeight: "83%",
    marginBottom: "24px",
    background: "-webkit-linear-gradient(#3F4337, #6E8787)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const footerTitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '50px' : "80px",
    width: isMobile ? "100%" : "525px",
  };

  const mobileStyle = isMobile ? `width: 100vw;` : `width: 100%;`;

  return (
    <div
      className={`text-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] ${mobileStyle}`}
    >
      <Navbar isMobile={isMobile} />
      <main
        className="flex flex-col row-start-2"
        style={{ height: "100%", width: "100vw" }}
      >
        <Container
          backgroundColor={"#2C2F3A"}
          style={{ marginTop: "50px", height: "600px" }}
        >
          <div className="w-full text-center" style={headerStyle}>
            <h2
              className={`${largeText} font-bold mb-10`}
              style={{
                maxWidth: "970px",
                fontSize: isMobile ? "45px" : "90px",
                lineHeight: 0.9,
              }}
            >
              YOUR GROWTH STORY STARTS HERE.
            </h2>
            <div className="flex justify-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <a href="#contact">
                <button
                  type="button"
                  className="text-black bg-white hover:french-gray focus:ring-4 focus:outline-none focus:#6E8787 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-black-600 dark:hover:black dark:focus:black"
                  style={{ borderRadius: "100px" }}
                >
                  {"Get in Touch"}
                </button>
              </a>
            </div>
            <p
              className={`mb-5 text-sm leading-relaxed`}
              style={isMobile ? { marginTop: "24px" } : {}}
            >
              Delivering tailored technical solutions, streamlining operations,
              and driving business growth. 🚀
            </p>
          </div>
        </Container>
        <Container
          backgroundColor={"white"}
          style={{ marginTop: isMobile ? 0 : "50px" }}
        >
          <div id="who-we-are">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-30 text-black">
              <div style={titleStyle}>
                Software Engineering Consulting Agency
                <span
                  style={{
                    background: "-webkit-linear-gradient(#CAC9CF, #2C2F3A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Specializing In Building Products.
                </span>
              </div>
              <div
                style={{
                  fontSize: "16px",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  padding: isMobile ? "0px" : "50px",
                  marginBottom: isMobile ? "24px" : "0px",
                }}
              >
                Struggling to bring your software ideas to life? Need expert
                guidance to build robust and scalable products? You&apos;re not
                alone. We collaborate with CTOs, Product Managers, and
                Development Teams across the globe to tackle these challenges
                with cutting-edge software engineering solutions.
                <br />
                <br />
                Our agency specializes in end-to-end software development, from
                initial concept to final deployment. We have extensive
                experience in various industries including finance,
                social-media, healthcare, education, and more.
                <br />
                <br />
                Based in the heart of Silicon Valley, we are at the cutting edge
                of technnology innovation. Our dedicated engineers are always
                ready to assist you. We are committed to driving innovation and
                delivering high-quality software products for you and your
                company.
              </div>
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-5 gap-20 text-black"
              style={{ rowGap: ".5rem" }}
            >
              <div className="md:col-span-3">
                <video
                  autoPlay
                  muted
                  loop
                  className="w-full"
                  style={{ borderRadius: isMobile ? "none" : "0 35% 35% 0" }}
                >
                  <source src="/designslife.mp4" type="video/mp4" />
                </video>
              </div>
              <div
                className="md:col-span-2 text-left flex flex-col justify-center"
                id="values"
              >
                <div style={textContainerStyle}>
                  <h3
                    className="text-xl font-bold mb-2 text-black"
                    style={subtitleStyle}
                  >
                    Bringing Your Vision To Life
                  </h3>
                  <p className="text-sm">
                    Vision is how products are born and how they evolve from a
                    conception to a reality. Our team has a keen eye for design.
                    We push the boundaries of vision while still being
                    pragmatic! We believe that great design is a crucial
                    component of a user experience and ultimately telling a
                    branding story. We strive to create interfaces that are both
                    intuitive and aesthetically pleasing. From the initial
                    concept to the final product, our design process is
                    meticulous and detail-oriented, guaranteeing that your
                    vision is brought to life with precision and creativity.
                  </p>
                </div>
              </div>
              <div
                className="md:col-span-2 text-left flex flex-col justify-center"
                style={{
                  display: "flex",
                  flexDirection: isMobile ? 'column-reverse' : "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  width: isMobile ? '100%' : '100vw',
                }}
              >
                <div style={{ ...textContainerStyle, ...excellenceText }} className="md:col-span-2">
                  <h3
                    className="text-xl font-bold mb-2 text-black"
                    style={subtitleStyle}
                  >
                    Driven by Excellence, Powered by Passion
                  </h3>
                  <p className="text-sm mb-5">
                    We are technologically agnostic. Our expertise spans across
                    various domains including Frontend, Backend, AI tooling,
                    design, and more. We leverage our expertise to create
                    solutions that drive real-business solutions - not just
                    short-term bandages to bigger business problems. Our company
                    is committed to delivering exceptional software solutions
                    with precision, reliability, and unwavering attention to
                    detail, ensuring that every project is executed with the
                    highest standards of excellence and integrity.
                  </p>
                </div>
                <div className="md:col-span-3">
                  <video
                    autoPlay
                    muted
                    loop
                    className="w-full"
                    style={{ borderRadius: isMobile ? "none" : "35% 0% 0% 35%" }}
                  >
                    <source src="/coder.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-5 ${isMobile ? 'gap-5' : 'gap-20'} text-black`}>
              <div className="md:col-span-3">
                <video
                  autoPlay
                  muted
                  loop
                  className="w-full"
                  style={{ borderRadius: isMobile ? "none" : "0 35% 35% 0" }}
                >
                  <source src="/handshake.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="md:col-span-2 text-left flex flex-col justify-center">
                <div style={textContainerStyle}>
                  <h3
                    className="text-xl font-bold mb-2 text-black"
                    style={subtitleStyle}
                  >
                    Partnership with Integrity
                  </h3>
                  <p className="text-sm">
                    We believe in building transparent, mutually beneficial
                    partnerships. Our approach is simple: we only engage with
                    companies where we can offer real value and drive meaningful
                    results. We are committed to understanding your needs and
                    delivering solutions that align with your goals, ensuring
                    that both parties grow and succeed together. If we cant
                    bring significant benefit to your business, we will be
                    upfront about it—our focus is on creating partnerships that
                    are truly beneficial, not just transactional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Container
          backgroundColor="#fafafa"
          style={{ minHeight: isMobile ? '550px' : "650px", paddingBottom: "0px" }}
        >
          <h3
            className="text-xl font-bold mb-2 text-black"
            style={{ ...subtitleStyle, ...footerTitleStyle }}
            id="contact"
          >
            <span
              style={{
                background: "-webkit-linear-gradient(#CAC9CF, #2C2F3A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ready to get started
            </span>
          </h3>
          <ContactForm isMobile={isMobile} />
        </Container>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Shortest Path Consulting © 2024
      </footer>
    </div>
  );
}
