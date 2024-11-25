import Navbar from "./components/Navbar";
import Container from "./components/Container";

export default function Home() {
  const headerStyle = {
    fontSize: "60px",
    lineHeight: "1.2em",
  };

  return (
    <div className="bg-gunmetal text-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main
        className="flex flex-col gap-8 row-start-2 items-center sm:items-start"
        id="solutions"
      >
        <Container color="gunmetal">
          <div className="w-full sm:w-[800px] text-center">
            <h1 className="text-4xl font-bold mb-10" style={headerStyle}>
              Building Apps is Hard... But it doesnt have to be
            </h1>
            <p className="mb-10">
              At Shortest Path Consulting, we deliver tailored solutions that
              streamline operations, enhance technology implementation, and
              drive business growth. 🚀
            </p>
          </div>
        </Container>
        <Container title="Why Shortest Path?" id="why-shortest-path">
          <div
            className="w-full sm:w-[800px] text-center mt-10"
          >
            <ul className="list-disc pl-5 text-left space-y-4 mb-10">
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  <strong>Process Optimization:</strong> Utilizing advanced
                  analytics to refine business processes and increase
                  efficiency.
                </li>
                <li>
                  <strong>Technology Implementation:</strong> Deploying
                  cutting-edge technologies that align with your business goals
                  to foster innovation and competitive advantage.
                </li>
                <li>
                  <strong>Change Management:</strong> Supporting your team
                  through technology transitions with strategic planning and
                  training.
                </li>
              </ol>
            </ul>
            <p className="font-bold text-lg mt-6 text-left">Our Edge:</p>
            <p className="text-left">
              Deep industry knowledge across technology and business management.
              Customized Solutions: We focus on creating solutions that are
              uniquely tailored to the needs of your business.
            </p>
          </div>
        </Container>
        <Container color="black" title="What We Do?" id="what-we-do">
          <div
            className="w-full sm:w-[800px] text-center mt-10"
          >
            <ul className="list-disc pl-5 text-left space-y-4 mb-10">
              <li>
                <strong>Consulting:</strong> Comprehensive analysis and
                strategic advice to identify opportunities for improvement and
                growth.
              </li>
              <li>
                <strong>Project Management:</strong> Guiding complex projects
                from conception through to completion ensuring timelines,
                budgets, and specifications are met.
              </li>
              <li>
                <strong>Training and Support:</strong> Offering ongoing support
                and training to ensure sustainable success and adaptation to new
                systems and processes.
              </li>
            </ul>
          </div>
        </Container>
        <Container title="Contact" color="blackOlive" id="contact">
          <div>Container 4</div>
        </Container>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Footer
      </footer>
    </div>
  );
}
