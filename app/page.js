import Nav from "./components/Nav";
import Contact from "./sections/Contact";
import Header from "./sections/Header";
import Projects from "./sections/Porjects";

export default function Home() {
  return (
    <main className="bg-[#F8FAFB] w-full h-lvh">
      <Nav />
      <Header />
      <Projects />
      <Contact />
    </main>
  );
}
