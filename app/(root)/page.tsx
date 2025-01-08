import Navbar from "@/components/Navbar";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section_title from "@/components/Section_title";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero/>
    <Section_title Text ="Wholesale clothing" />
    </>
  );
}
