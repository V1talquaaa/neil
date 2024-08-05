import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Grow from "./components/Grow";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SwiperAccreditations from "./components/SwiperAccreditations";
import SwiperClients from "./components/SwiperClients";


export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <SwiperClients />
      <Grow />
      <SwiperAccreditations />
      <Services />
      <Feedback />
      <Footer />
    </main>
  );
}
