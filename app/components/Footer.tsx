import Link from "next/link";
import { StarsBackground } from "./backgrounds/stars";

const Footer = () => {
  return (
    <footer className="relative w-full text-white py-8 md:py-12 px-4 md:px-16">
      {/* <StarsBackground className="absolute inset-0" pointerEvents={false}> */}
      <div className="max-w-[960px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0 relative z-10">
        <div className="space-y-2 md:space-y-4 text-center md:text-left">
          <h3 className="font-bold text-xl md:text-2xl mb-4 md:mb-6">TRINH HA ANH</h3>
          <p className="text-base md:text-lg">+84 1234 456 789</p>
          <p className="text-base md:text-lg">hatthere@gmail.com</p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-bold text-xl md:text-2xl mb-4 md:mb-6 md:invisible"> </h3>
          <ul className="space-y-2 md:space-y-4 flex flex-col">
            <li>
              <Link href="/" className="hover:text-gray-400 text-base md:text-lg">
                HOME
              </Link>
            </li> 
            <li>
              <Link href="/habout" className="hover:text-gray-400 text-base md:text-lg">
                HABOUT
              </Link>
            </li>
            <li>
              <Link href="/hat-there" className="hover:text-gray-400 text-base md:text-lg">
                HAT THERE
              </Link>
            </li>
            <li>
              <Link href="/under-the-hat" className="hover:text-gray-400 text-base md:text-lg">
                UNDER THE HAT
              </Link>
            </li>
            <li>
              <Link href="/pieces-of-me-dia" className="hover:text-gray-400 text-base md:text-lg">
                PIECES OF ME-DIA
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* </StarsBackground> */}
    </footer>
  );
};

export default Footer;
