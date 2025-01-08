import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
import Form from "next/form";
function Navbar() {
  const user = {
    id : 1,
    name: "John Doe",
    email: "xyz"
  }
  return (
    <header className="px-5 py-3 bg-white shadow-sm">
      <nav className="flex justify-between items-center text-black">
        <Link href="/">
        <Image src="/logo.png" alt="logo" width={70} height={50} />
        </Link>
        <div className="flex w-full max-w-sm items-center space-x-2 basis-1/2">
          <Form action={"/search"} className="flex w-full">
            <Input 
            type="search"
             placeholder="Search" 
             name="query"
             />
            <Button type="submit" className="left">
              Search
            </Button>
            </Form>
          </div>
            <div className="flex items-center space-x-4">
            <Link href="/cart">
              <Image src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png" alt="Cart" width={24} height={24} />
            </Link>
            </div>

            {/* User specific area */}
        <div className="flex  ">
          {user ? (
            <Link href="/profile" className="flex items-center space-x-2">
              <span className="font-sans">Wellcome {user.name}</span>
            </Link>
          ) : (
            <>
              <Button variant={"secondary"}>Sign In</Button>
              <Button variant={"default"}>Sign Up</Button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
