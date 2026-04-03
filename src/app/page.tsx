import Hero from '@/components/Hero';
import WhoThisIsFor from '@/components/WhoThisIsFor';
import Approach from '@/components/Approach';
import Consulting from '@/components/Consulting';
import Portfolio from '@/components/Portfolio';

export default function Home() {
  return (
    <>
      <Hero />
      <WhoThisIsFor />
      <Approach />
      <Portfolio />
      <Consulting />
    </>
  );
}
