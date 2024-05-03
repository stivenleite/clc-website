import { useState } from "react";
import logo from "../assets/logo.svg";
import { FaX, FaBars } from "react-icons/fa6";
import { isMobile, osName } from "react-device-detect";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [headerWhiteBg, setHeaderWhiteBg] = useState(false);
  const [isDesktopScreen, setIsDesktopScreen] = useState(
    window.innerWidth > 768 ? true : false
  );
  const [streamUrl, setStreamUrl] = useState("https://www.facebook.com/christianlifecenterchipman/live_videos")

  const headerClasses =
    "fixed z-10 w-full h-fit px-4 py-2 flex flex-col md:flex-row items-center transition";
  const headerClassesBgWhite = headerClasses + " " + "bg-white shadow-xl";

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function scrollToSection (id) {
    const section = document.getElementById(id)
    const offset = 79
    const sectionPosition = section.offsetTop - offset
    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth"
    })

    toggleMenu()
  }

  function changeHeaderBg() {
    if (window.scrollY >= 80) {
      setHeaderWhiteBg(true);
    } else {
      setHeaderWhiteBg(false);
    }
  }

  function changeScreen() {
    if (window.innerWidth > 768) {
      setIsDesktopScreen(true);
    } else {
      setIsDesktopScreen(false);
    }
  }

  addEventListener("scroll", changeHeaderBg);
  addEventListener("resize", changeScreen);

  useEffect(() => {
    if (isMobile) {
      if(osName === "iOS"){
        setStreamUrl("fb://profile/1215015818590281")
      } else {
        setStreamUrl("fb://page/1215015818590281")
      }
    }
  })

  return (
    <header
      id="navbar"
      className={
        showMenu || headerWhiteBg ? headerClassesBgWhite : headerClasses
      }
    >
      <div className="w-full flex items-center justify-between">
        <a href="">
          <img
            src={logo}
            alt="CLC"
            className="size-16 drop-shadow-lg hover:brightness-150"
          />
        </a>
        <button className="md:hidden" onClick={toggleMenu}>
          {showMenu ? (
            <FaX className="text-lime-700 size-6" />
          ) : (
            <FaBars className="text-lime-700 size-6" />
          )}
        </button>
      </div>

      {showMenu || isDesktopScreen ? (
        <ul className="flex flex-col md:flex-row gap-4 items-center text-lg text-lime-950">
          <li>
            <button
              type="button"
              className="hover:brightness-200"
              onClick={() => scrollToSection("join")}
            >
              Join
            </button>
          </li>
          <li>
            <button
              type="button"
              className="hover:brightness-200"
              onClick={() => scrollToSection("kids")}
            >
              Kids
            </button>
          </li>
          <li>
            <button
              type="button"
              className="hover:brightness-200"
              onClick={() => scrollToSection("give")}
            >
              Give
            </button>
          </li>
          <li>
            <button
              type="button"
              className="hover:brightness-200"
              onClick={() => scrollToSection("calendar")}
            >
              Calendar
            </button>
          </li>
          <li>
            <button type="button" className="hover:brightness-200">
              <a
                href={streamUrl}
                target="_blank"
              >
                Watch
              </a>
            </button>
          </li>
        </ul>
      ) : (
        <></>
      )}
    </header>
  );
}
