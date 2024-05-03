import kidsLogo from "./assets/kids-logo.svg";
import { FaChurch, FaPhoneAlt, FaCheck } from "react-icons/fa";
import { Header } from "./components/Header";
import { isMobile } from "react-device-detect";
import { useEffect, useState } from "react";

export function App() {
  const [streamUrl, setStreamUrl] = useState("https://www.facebook.com/christianlifecenterchipman/live_videos")
  
  useEffect(() => {
    if (isMobile) {
      setStreamUrl("fb://page/1215015818590281")
    }
  })
  return (
    <div className="">
      <Header />

      {/* Welcome Home */}
      <section id="welcome" className="w-full h-screen bg-[url('./assets/cover.jpg')] bg-cover bg-center flex flex-col justify-center items-center">
        <h1 className="font-serif md:text-9xl text-6xl text-white">
          Welcome Home
        </h1>
        <p className="md:text-base text-[10px] text-white">
          Know Jesus - Find Community - Discover Purpose - Make a Difference
        </p>
        <button
          type="button"
          className="w-fit p-2 m-4 text-lg border-2 rounded-md text-white bg-lime-950/50 hover:bg-lime-950 transition-all duration-400 ease-in-out"
        >
          <a
            href={streamUrl}
            target="_blank"
          >
            WATCH LIVE STREAM
          </a>
        </button>
      </section>

      {/* Join */}
      <section id="join" className="w-full h-fit md:p-8 px-4 py-12 flex md:flex-row flex-col items-center justify-evenly gap-10">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl text-lime-950">SERVICE TIME & ADRESS</h2>
          <div className="my-6 text-lg">
            <strong className="text-lime-800">Sunday Services</strong> @ 10:30am
          </div>
          <div className="flex items-center gap-1">
            <FaChurch className="text-lime-700" />
            740 Main Street, Chipman NB -
            <a
              className="text-lime-700 hover:underline"
              href="https://maps.app.goo.gl/u7i1FJbLsgK5W9Xt7"
              target="_blank"
            >
              View map
            </a>
          </div>
          <div className="flex items-center gap-1">
            <FaPhoneAlt className="text-lime-700" />
            (506) 339-6113
          </div>
        </div>
        <div className="md:w-px md:h-40 w-2/3 h-px bg-lime-700" />
        <div className="flex flex-col md:gap-2 gap-6 items-center md:items-start">
          {/* <h2 className="text-2xl text-lime-950">COME JOIN US FOR</h2> */}
          <div className="flex md:flex-row flex-col items-center gap-2">
            <FaCheck className="text-lime-700" /> Uplifting Worship Music
          </div>
          <div className="flex md:flex-row flex-col items-center gap-2">
            <FaCheck className="text-lime-700" /> Practical Bible-Based Teaching
          </div>
          <div className="flex md:flex-row flex-col items-center gap-2">
            <FaCheck className="text-lime-700" /> Nursery Care for Babies &
            Toddlers
          </div>
          <div className="flex md:flex-row flex-col items-center gap-2">
            <FaCheck className="text-lime-700" /> CLC Kids Program
          </div>
          <div className="flex md:flex-row flex-col items-center gap-2">
            <FaCheck className="text-lime-700" /> Youth Class (1st & 3rd Sunday)
          </div>
        </div>
      </section>

      {/* CLC Kids */}
      <section id="kids" className="w-full h-[500px] bg-[url('./assets/kids-cover.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center">
        <div className="flex flex-1 flex-col items-center justify-center gap-6 p-4 text-white bg-black/50 backdrop-blur-sm">
          <a
            href="https://www.facebook.com/profile.php?id=100064468585085"
            target="_blank"
          >
            <img
              className="w-72 hover:scale-110"
              src={kidsLogo}
              alt="CLC Kids"
            />
          </a>
          <p className="w-3/4 text-center font-mono text-xl tracking-wider">
            <span className="text-sky-500">Engaging Activities</span> -{" "}
            <span className="text-yellow-500">Uplifting Music</span> -{" "}
            <span className="text-red-500">Interactive Storytelling</span>
          </p>
        </div>
      </section>

      
      <section id="give" className="flex items-center text-center flex-col gap-6 py-12 px-6">
        <div className="font-bold text-xl">We desire to be generous because He is Generous with us</div>
        <div className="flex md:flex-row flex-col gap-12 justify-center text-center">
          <div className="shadow-2xl bg-lime-950/90 hover:bg-lime-950 text-white rounded-lg w-52 h-56 px-4 flex flex-col justify-center gap-4">
            <h3 className="font-bold">Give In-Person</h3>
            <p>Use the envelope located at the back of the seating area.</p>
          </div>
          <div className="shadow-2xl bg-lime-950/90 hover:bg-lime-950 text-white rounded-lg w-52 h-56 px-4 flex flex-col justify-center gap-4">
            <h3 className="font-bold">E-Transfer</h3>
            <p>To give simply email your offering to: chipmanclc@gmail.com</p>
          </div>
          <div className="shadow-2xl bg-lime-950/90 hover:bg-lime-950 text-white rounded-lg w-52 h-56 px-4 flex flex-col justify-center gap-4">
            <h3 className="font-bold">Mail</h3>
            <p>740 Main St. Chipman, NB E4A 2R5.</p>
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section id="calendar" className="flex justify-center items-center flex-col gap-5 pt-7 pb-5 bg-lime-950/70">
        <h2 className="font-serif text-white text-6xl">What's happening</h2>
        <iframe src="https://embed.styledcalendar.com/#2WF2PeHUbs3oKNGr7Dkv" title="Calendar" className="w-full max-w-6xl h-[46rem] border-none"></iframe>
      </section>

      <footer className="w-full h-10 bg-lime-950/80 text-white text-sm flex items-center justify-center">© 2024 Christian Life Center</footer>
    </div>
  );
}
