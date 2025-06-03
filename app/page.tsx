import Navbar from '@/components/navbar';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Features from '@/components/sections/features';
import Connection from '@/components/sections/connection';
import Waitlist from '@/components/sections/waitlist';
import Footer from '@/components/footer';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col dark:bg-black bg-white">
      <Navbar />
      <Hero />
      <Separator className="w-[80%] mx-auto opacity-20" />
      <About />
      <Separator className="w-[80%] mx-auto opacity-20" />
      <Features />
      <Separator className="w-[80%] mx-auto opacity-20" />
      <Connection />
      <Separator className="w-[80%] mx-auto opacity-20" />
      <Waitlist />
      <Footer />
    </main>
  );
}