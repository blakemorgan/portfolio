import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}