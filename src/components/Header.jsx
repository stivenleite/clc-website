import { useState } from "react";
import logo from "../assets/logo.svg";
import { FaX, FaBars } from "react-icons/fa6";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [headerWhiteBg, setHeaderWhiteBg] = useState(false);
  const [isDesktopScreen, setIsDesktopScreen] = useState(
    window.innerWidth > 768 ? true : false
  );

  const headerClasses =
    "fixed z-10 w-full h-fit px-4 py-2 flex flex-col md:flex-row items-center transition";
  const headerClassesBgWhite = headerClasses + " " + "bg-white shadow-xl";

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function scrollToJoin() {
    window.scrollTo({
      top: 433,
      behavior: "smooth",
    });
  }

  function scrollToKids() {
    if (isDesktopScreen) {
      window.scrollTo({
        top: 808,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 1100,
        behavior: "smooth",
      });
    }
  }

  function scrollToGive() {
    if (isDesktopScreen) {
      window.scrollTo({
        top: 1176,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 1600,
        behavior: "smooth",
      });
    }
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

  return (
    <header
      className={
        showMenu || headerWhiteBg ? headerClassesBgWhite : headerClasses
      }
    >
      <div className="w-full flex items-center justify-between">
        <a href="#">
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
              onClick={scrollToJoin}
            >
              Join
            </button>
          </li>
          <li>
            <button
              type="button"
              className="hover:brightness-200"
              onClick={scrollToKids}
            >
              Kids
            </button>
          </li>
          <li>
            <button
              type="button"
              className="hover:brightness-200"
              onClick={scrollToGive}
            >
              Give
            </button>
          </li>
          <li>
            <button type="button" className="hover:brightness-200">
              <a
                href="https://www.facebook.com/christianlifecenterchipman/live_videos"
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
