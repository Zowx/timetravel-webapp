import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Quiz from "@/components/Quiz";
import Reservation from "@/components/Reservation";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Header />
      <Hero />
      <Destinations />
      <Quiz />
      <Reservation />
      <About />
      <Footer />
      <Chatbot />
    </main>
  );
}
