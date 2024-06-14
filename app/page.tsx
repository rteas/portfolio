'use client';
import Image from "next/image";
import Home from "./ui/sections/home";

export default function Main() {

  return (
    <main>
      <section id="home" className="home-page">
        <Home/>
      </section>
      <section id="about" className="about-page">
        About / Hobbies
      </section>
      <section id="projects" className="project-page">
        Skills / Experience
      </section>
      <section id="contact" className="contact-page">
        Contact
      </section>
    </main>
  );
}
