import Image from 'next/image';

function Hero() {
  return (
    <div>
      <Image 
        src="/heroImage.jpg" 
        alt="Hero Image" 
        width={800} 
        height={600} 
        className="w-full" 
        layout="responsive" 
        objectFit="cover" 
      />
    </div>
  );
}

export default Hero;