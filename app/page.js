import Image from "next/image";
import Navbar from "./Navbar";
import BlogPosts from "./BlogPosts";
import Authors from "./Authors";


export default function Home() {
  return (
    <main className="w-screen min-h-screen h-full flex flex-col">
      <section className="w-screen h-[420px] md:h-[500px] lg:h-[720px] overflow-hidden bg-hero-pattern object-cover bg-center bg-cover bg-no-repeat bg-blend-soft-light">
      <Navbar />
      </section>
      <section className="flex flex-wrap md:flex-row ">
        <BlogPosts/>
        <Authors/>
      </section>
    </main>
  )
}
