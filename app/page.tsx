// app/page.tsx
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="text-gray-100 min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
}
