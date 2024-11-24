import Navbar from "./components/Navbar";
import Container from "./components/Container";

export default function Home() {
  return (
    <div className="bg-gunmetal text-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Container>
          Container 1
        </Container>
        <Container>
          Container 2
        </Container>
        <Container>
          Container 3
        </Container>
        <Container>
          Container 4
        </Container>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Footer
      </footer>
    </div>
  );
}
