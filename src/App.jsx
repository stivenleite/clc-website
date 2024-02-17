import logo from "./assets/logo.svg";
import kidsLogo from "./assets/kids-logo.svg";
import { FaChurch, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

export function App() {
  const headerClassesOnTop = "w-full fixed top-0 mx-auto py-2 px-4 flex items-center justify-between transition"
  const headerClassesOnScroll = headerClassesOnTop + " " + "bg-white border-b-[1px] border-slate-400"
  // const headerClassesOnScroll = "w-full fixed top-0 mx-auto p-4 flex items-center justify-between transition bg-white border-b-[1px] border-slate-400"
  const [headerClasses, setHeaderClasses] = useState(headerClassesOnTop)

  function changeHeaderBg() {
    console.log(window.scrollY)
    if(window.scrollY >= 80) {
      setHeaderClasses(headerClassesOnScroll)
    } else {
      setHeaderClasses(headerClassesOnTop)
    }
  }

  function scrollToJoin(e) {
    e.preventDefault()
    window.scrollTo({
      top: 433,
      behavior: "smooth"
    })
  }

  function scrollToKids(e) {
    e.preventDefault()
    window.scrollTo({
      top: 708,
      behavior: "smooth"
    })
  }

  window.addEventListener("scroll", changeHeaderBg)

  return (
    <div className="">
      <header className={headerClasses}>
        <a href="#">
          <img
            src={logo}
            alt="CLC"
            className="size-16 grayscale-[40%] drop-shadow-lg hover:brightness-150"
          />
        </a>

        <ul className="flex items-center gap-5 text-lg text-lime-950">
          <li className="hover:brightness-200">
            <a onClick={scrollToJoin} href="">Join</a>
          </li>
          <li className="hover:brightness-200">
            <a onClick={scrollToKids} href="">Kids</a>
          </li>
          <li className="hover:brightness-200">
            <a href="#give">Give</a>
          </li>
          <li className="hover:brightness-200">
            <a
              href="https://appurl.io/684dJPQPn-"
              target="_blank"
            >
              Watch
            </a>
          </li>
        </ul>
      </header>

      {/* Welcome Home */}
      <section className="w-full h-screen bg-[url('./assets/cover.jpg')] bg-cover bg-center flex flex-col justify-center items-center">
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
            href="https://appurl.io/684dJPQPn-"
            target="_blank"
          >
            WATCH LIVE STREAM
          </a>
        </button>
      </section>

      {/* Join */}
      <section className="flex flex-col items-center justify-center w-full h-52" id="join">
        <h2 className="text-2xl text-lime-950">SERVICE TIME & ADRESS</h2>
        <div className="my-6 text-lg">
          <strong className="text-lime-800">Sunday Services</strong> @ 10:30am
        </div>
        <div className="flex items-center gap-1">
          <FaChurch className="text-lime-700"/>
          740 Main Street, Chipman NB -
          <a className="text-lime-700 hover:underline" href="https://maps.app.goo.gl/u7i1FJbLsgK5W9Xt7" target="_blank">
            View map
          </a>
        </div>
        <div className="flex items-center gap-1">
          <FaPhoneAlt className="text-lime-700" />
          (506) 339-6113
        </div>
      </section>

      {/* CLC Kids */}
      <section className="w-full h-[500px] bg-[url('./assets/kids-cover.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center">
        <div className="flex flex-1 flex-col items-center justify-center gap-6 p-4 text-white bg-black/50 backdrop-blur-sm">
          <a href="https://www.facebook.com/profile.php?id=100064468585085" target="_blank">
            <img className="w-72 hover:scale-110" src={kidsLogo} alt="CLC Kids" />
          </a>
          <p className="w-3/4 text-center font-mono text-xl tracking-wider">
            <span className="text-sky-500">Engaging Activities</span> - <span className="text-yellow-500">Uplifting Music</span> - <span className="text-red-500">Interactive Storytelling</span>
          </p>
        </div>
      </section>

      {/* Give */}
      <section className=""></section>
    </div>
  );
}
