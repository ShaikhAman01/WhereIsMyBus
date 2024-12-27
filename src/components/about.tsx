

import { Instagram, X, Youtube } from "lucide-react";
import TextLogoSecondary from "../assets/textLogoSecondary.svg";

const About = () => {
  return (
    <section className="bg-bgBlack text-white p-4">
      <div className="flex justify-between items-start gap-2">
        {/* About Us Section */}
        <div>
          <h1 className="text-md font-bold text-buttonYellow mb-2">About Us</h1>
          <p className="text-sm ">
            Our mission is to provide students with the tools they need to travel
            efficiently and stress-free. Gone are the days of waiting at the bus
            stop unsure of when your ride will arrive. With "Where is my bus?",
            you'll have real-time tracking information at your fingertips,
            ensuring you never miss a bus again.
          </p>
        </div>

        {/* Follow Us Section */}
        <div>
          <h1 className="font-bold text-md text-buttonYellow mb-2">Follow Us</h1>
          <div className="space-y-2 text-sm">
            <a
              href="https://instagram.com/whereismybus.tech"
              className="flex items-center gap-1 hover:underline text-xs"
            >
              <Instagram className="w-4 h-4 text-white" />
              whereismybus.tech
            </a>
            <a
              href="https://twitter.com/whereismybus22"
              className="flex items-center gap-1 hover:underline text-xs"
            >
              <X className="w-4 h-4 text-white" />
              whereismybus22
            </a>
            <a
              href="https://youtube.com/whereismybus"
              className="flex items-center gap-1 hover:underline text-xs"
            >
              <Youtube className="w-4 h-4 text-white" />
              whereismybus
            </a>
            <img src={TextLogoSecondary} alt="Where is my Bus?" className="h-24 text-ye" />
          </div>
        </div>

        {/* Logo Section */}
      </div>

      {/* Contact Information */}
      <div className="mt-8 text-sm">
        <p className="mb-2">
          <span className="font-bold text-buttonYellow">Want to Reach Out?</span>{" "}
          Mail us at <a href="mailto:whereismybus22@gmail.com" className="hover:underline">whereismybus22@gmail.com</a>
        </p>
        <p>
          <span className="font-bold text-buttonYellow">Location:</span> MLR
          Institute of Technology, Dundigal Police Station Road, Hyderabad,
          Telangana 500043
        </p>
      </div>
    </section>
  );
};

export default About;


