import Feedback from "./components/Feedback";
import Grow from "./components/Grow";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SwiperAccreditations from "./components/SwiperAccreditations";
import SwiperClients from "./components/SwiperClients";


export default function Home() {
  return (
    <>
      <Hero />
      <SwiperClients />
      <Grow />
      <SwiperAccreditations />
      <Services />
      <Feedback />
    </>
  );
}
