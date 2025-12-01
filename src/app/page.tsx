import Hero from '@/components/Hero';
import WhoThisIsFor from '@/components/WhoThisIsFor';
import ImageSection from '@/components/ImageSection';
import Consulting from '@/components/Consulting';
import Portfolio from '@/components/Portfolio';

export default function Home() {
  return (
    <>
      <Hero />
      <WhoThisIsFor />
      <ImageSection imagePath="/Collage Photo.jpg" alt="Ariel Santos Professional" />
      <Portfolio />
      <Consulting />
    </>
  );
}
