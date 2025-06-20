import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="lg:px-52 px-5  bg-[#191919]">
      <div>
        <div className="bg-[#d87d4a] w-40 h-1"></div>
      </div>
      <div className="pt-12 pb-7">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 pb-3">
          <Logo />
          <ul className="text-white flex items-center lg:gap-10 gap-5">
            <li>
              <Link className="text-sm" href={"/"}>HOME</Link>
            </li>
            <li>
              <Link className="text-sm" href={"/"}>HEADPHONES</Link>
            </li>
            <li>
              <Link className="text-sm" href={"/"}>SPEAKERS</Link>
            </li>
            <li>
              <Link className="text-sm" href={"/"}>EARPHONES</Link>
            </li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 text-neutral-600">
            <div>
                <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
