import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const links = [
  { href: "/landingPage", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/faq", label: "FAQ" },
];

const LandingHeader = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [showLinks, setShowLinks] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    const activeLinkFromStorage = localStorage.getItem("activeLink");
    if (activeLinkFromStorage) {
      setActiveLink(activeLinkFromStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("activeLink", currentPath);
    setActiveLink(currentPath);
  }, [currentPath]);

  const handleCloseNav = () => {
    setShowLinks(false);
  };

  return (
    <header
      className={`${
        showLinks ? "h-screen bg-white" : "lg:bg-white"
      } sticky top-0- z-50 w-full bg-white py-4 text-primary shadow lg:h-auto lg:py-3 lg:justify-center lg:items-center`}
    >
      <div className="mx-auto lg:justify-between px-4 lg:px-[72px] w-[100%] flex h-16 flex-col justify-between lg:flex-row lg:items-center">
        <div className="my-4 flex w-full justify-between lg:my-0">
          <Link href="/landingPage" className="flex group" onClick={handleCloseNav}>
            <Image className='group-hover:animate-pulse w-6 md:w-9 lg:w-full'  src={require("@/../public/Images/t-logo.svg")} alt="t-logo" />
            <div className="text-center text-primary leading-normal md:leading-[56px] lg:leading-[64px] text-[28px] md:text-[48px] lg:text-[56px] font-medium opacity-0- group-hover:opacity-100 bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 bg-clip-text "><span className='group-hover:text-transparent bg-clip-text'>reeviah</span></div>

          </Link>
          <div
            className="lg:hidden"
            onClick={() => {
              setShowLinks(!showLinks);
            }}
          >
            {showLinks ? (
              <FontAwesomeIcon
                className="block h-8 w-8 lg:hidden"
                icon={faXmark}
              />
            ) : (
              <FontAwesomeIcon
                className="block h-8 w-8 lg:hidden"
                icon={faBars}
              />
            )}
          </div>
        </div>
        <nav
          className={` ${
            showLinks ? "opacity-100 scale-y-100 h-screen bg-[#E6CCE6]" : "opacity-0 scale-y-0"
          }   lg:opacity-100 lg:scale-y-100 transition duration-300 ease-out transform flex flex-col md:flex-row md:item-center lg:w-fit md:w-[100%] md:justify-between`}
        >
          <ul className="mb-3 flex flex-col lg:space-x-16 lg:mb-0 lg:flex-row lg:items-center">
            {links.map((item, index) => (
              <li className="my-5 lg:my-0 transition-[width] hover:duration-500 delay-0 hover:ease hover:underline underline-offset-8" key={index}>
                <Link
                  passHref
                  onClick={() => {
                    setShowLinks(false);
                  }}
                  href={item.href}
                  className={`mx-4 md:mx-7 lg:mx-0 ${
                    activeLink === item.href ? "text-primary underline underline-offset-8 decoration-2" : null
                  } text-[24px] delay-100 duration-300 ease-in-out font-semibold hover:text-primary-light lg:text-[18px] lg:font-medium`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default LandingHeader;
