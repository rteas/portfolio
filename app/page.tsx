import Image from "next/image";
import NavBar from "./ui/navbar/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      
        <div className="home-page">
          Home / Profile
        </div>
        <div className="about-page">
          About / Hobbies
        </div>
        <div className="project-page">
          Skills / Experience
        </div>
        <div className="contact-page">
          Contact
        </div>
      
    </main>
  );
}
