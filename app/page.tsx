// app/page.tsx
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}
