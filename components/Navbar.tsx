import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
function Navbar() {
  return (
    <header className="px-5 py-3 bg-white shadow-sm">
      <nav className="flex justify-between items-center text-black">
        <Image src="/logo.png" alt="logo" width={70} height={50} />
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="search" placeholder="Search" />
            <Button type="submit" className="left">
              Search
            </Button>
          </div>

        <div className="flex space space-x-2">
          
          <div className="flex "></div>
          <Button variant={"secondary"}>SignIn </Button>
          <Button variant={"default"}>SignIn </Button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
