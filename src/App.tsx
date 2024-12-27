import "./App.css";
import { FeatureCard, FeatureNavigation } from "./components/feature-card";
import Header from "./components/header";
import Hero from "./components/hero";
import Vector from "./assets/Vector.svg";
import studentImage from "./assets/student.svg";
import secureImage from "./assets/secure.svg";
import Location from "./assets/location.svg";
import Alarm from "./assets/alarm.svg";
import { useState } from "react";
import About from "./components/about";
import Footer from "./components/footer";

function App() {
  const features = [
    {
      title: "Tailored For College Life",
      description:
        "Our solution is uniquely designed fore college students, providing practical and student-focused functionalities that cater to their daily needs and challenges.",
      imageUrl: studentImage,  
    },
    {
      title: "Reliable Tracking",
      description:
        "Our GPS technology ensures precise location tracking for accurate bus location updates. Continuous tracking ensures reliable updates even in areas with network issues",
      imageUrl: Location,  
    },
  
    {
      title: "Real Time Precision",
      description:
        "Our system offes real-time precision, ensuring students can efficiently plan their journeys with accurate and up-to-date bus locations, reducing waiting times.",
      imageUrl: Alarm,  
    },
    {
      title: "Secure Data Handling",
      description:
        "Our encryption technology safeguards student location data, ensuring security and privacy. This ensures peace of mind for users, knowing their information is protected.",
      imageUrl: secureImage,  
    },
  ]
  const [currentFeature, setCurrentFeature] = useState(0)

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % features.length)
  }

  const previousFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <section className="pt-4">
        <div className="bg-bgYellow px-4 flex flex-col justify-center items-center">
          <p className=" text-gray-800 font-semibold text-center pt-4 text-2xl">Welcome to</p>
          <p className="text-4xl text-brandBlue font-bold text-center">Where is my bus?</p>
          <p className="pt-6">
            Your ultimate companion for hassle-free college commutes! Designed
            with students in mind, our progressive web application provides
            real-time tracking for college buses, ensuring you never miss a
            ride. Join us and experience the convenience of knowing exactly
            where your bus is, every step of the way!
          </p>
          <img src={Vector} alt="" className="w-40 h-40 object-contain pt-6" />
</div>
          {/* <div className="p-4">
            <p className="text-brandBlue text-4xl font-bold text-center">Our Features</p>
            <FeatureCard />
          </div> */}
         <div className="p-4">
          <p className="text-brandBlue text-4xl font-bold text-center">
            Our Features
          </p>
          <div className="relative mt-8">
            <FeatureCard {...features[currentFeature]} />
            <FeatureNavigation
              onPrevious={previousFeature}
              onNext={nextFeature}
            />
          </div>
        </div>
      </section>
        <About/>  
      <Footer/>
    </div>
  );
}

export default App;
