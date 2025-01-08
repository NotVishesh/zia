import Navbar from "@/components/Navbar";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section_title from "@/components/Section_title";
import Cards from "@/components/Cards";
import TrendingSection from "@/components/TrendingSection";
import OurCatalog from "@/components/OurCatalog";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero/>
    <Section_title Text ="Trending" />
    <div className="sm:grid 
    grid-cols-2 md:grid-cols-3  gap-4 py-8 px-20">
      <TrendingSection trendingSrc='https://images.bewakoof.com/web/trending-spring-outfits-for-girls-bewakoof-blog-4-1620740562.jpg' trendingAlt="test" trendingTitle='Next level' startingPrice={20} />
    </div>

    <Section_title Text ="Wholesale clothing" />
    <div className="sm:grid 
    grid-cols-2 md:grid-cols-4  gap-4 py-8 px-20">
      <Cards text={"Saare"} src={'https://thenmozhidesigns.com/cdn/shop/files/091A9116.jpg?v=1724212541&width=3778'} alt={'saaree'}/>
      <Cards text={"Lehnga"} src={'https://i.ebayimg.com/images/g/2tYAAOSwrxNjxpa6/s-l1600.jpg'} alt={'lehnga'}/>
      <Cards text={"casuals"} src={'https://i.pinimg.com/736x/a9/9d/d4/a99dd4259f68e2128e0d0e7f8b5c8922.jpg'} alt={'casuals'}/>
      <Cards text={"Kurtis"} src={'https://assets.ajio.com/medias/sys_master/root/20240506/fsmu/663904ff16fd2c6e6aed6bd5/-473Wx593H-467306043-beige-MODEL.jpg'} alt={'kurtis'}/>
    </div>
    <Section_title Text ="Our Catalog" />
    <div className="sm:grid 
    grid-cols-2 md:grid-cols-4  gap-4 py-8 px-20">
      <OurCatalog cataImgSrc="https://veirdo.in/cdn/shop/files/Artboard8.png?v=1724158576" cataName="T-shirt" />
      <OurCatalog cataImgSrc="https://veirdo.in/cdn/shop/files/Artboard8.png?v=1724158576" cataName="T-shirt" />
      
    </div>
    <div className="py-8 px-20 flex justify-center flex-col items-center">
      <h3 className="font-bold font-sans text-3xl">{`Wholesale clothing India`.toUpperCase()}</h3>

      <p className="font-medium font-sans pt-10">We offer a wide range of products exclusively for women, including bulk t-shirts, sweatshirts, tank tops, polos, sport shirts, jackets, hats, workwear, accessories, and more, all available on our website. Our blank apparel is perfect for customization, whether you're a business, embroiderer, print shop, or an individual. Available in over 10 different colors, our products feature options like tie-dye, V-necks, sleeveless styles, and burnout designs. We also offer items with tear-away labels for those planning to resell. Each product is carefully selected for quality, weight, shape, and fit to meet the unique needs of women.</p>
    </div>
    <div className="relative flex justify-center items-center">
    <Image src={'/clothesMainPage.png'} width={1000} height={1000} alt="Image" className="pb-3 w-full h-56 object-cover"/>
    <Button className="absolute top-[-20]">Shop Now</Button>
    </div>
    <hr />
    <Footer />
    </>
  );
}
