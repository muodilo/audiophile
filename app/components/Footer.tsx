import Logo from "./Logo";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="lg:px-52 px-5  bg-[#191919]">
      <div>
        <div className="bg-[#d87d4a] w-40 h-1"></div>
      </div>
      <div className="pt-12 pb-7">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 pb-3">
          <Logo />
          <ul className="text-white flex items-center lg:gap-10 gap-5">
            <li>
              <Link className="text-sm" href={"/"}>
                HOME
              </Link>
            </li>
            <li>
              <Link className="text-sm" href={"/category/headphones"}>
                HEADPHONES
              </Link>
            </li>
            <li>
              <Link className="text-sm" href={"/category/speakers"}>
                SPEAKERS
              </Link>
            </li>
            <li>
              <Link className="text-sm" href={"/category/earphones"}>
                EARPHONES
              </Link>
            </li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 text-neutral-600">
          <div>
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We&apos;re a small team of music lovers and sound specialists who
              are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we&apos;re open 7 days a week.
            </p>
          </div>
        </div>
        <div className="text-white md:flex hidden items-center gap-5 justify-end">
            <FaFacebookSquare className="text-2xl hover:text-[#d87d4a]"/>
            <FaTwitter className="text-2xl hover:text-[#d87d4a]"/>
            <FaInstagram className="text-2xl hover:text-[#d87d4a]"/>
        </div>
        <div className="flex items-center justify-between">
            <p className="text-neutral-600 text-sm pt-5">Copyright 2021. All Rights Reserved</p>
            <div className="text-white flex md:hidden items-center gap-5 justify-end">
            <FaFacebookSquare className="text-2xl hover:text-[#d87d4a]"/>
            <FaTwitter className="text-2xl hover:text-[#d87d4a]"/>
            <FaInstagram className="text-2xl hover:text-[#d87d4a]"/>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
