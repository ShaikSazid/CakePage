import React, { useRef } from "react";
import InstagramIcon from "../icons/InstagramIcon";
import GithubIcon from "../icons/GithubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import { Link } from "react-router-dom";

const Footer = () => {
  const instaRef = useRef();
  const githubRef = useRef();

  return (
    <footer className="border-t-2 border-white/10 w-full text-white mt-5">
      <p className="text-center mt-2 max-sm:text-sm">
        &copy; {new Date().getFullYear()}{" "}
        <Link to={"/"}
          style={{ fontFamily: "Alagen" }}
          className="cursor-pointer text-emerald-400"
        >
          MyCakePage
        </Link>{" "}
        — Made with ❤️ for cake lovers.
      </p>
      <p className="text-center mt-2 max-sm:text-sm">
        Designed & Developed By{" "}
        <a
          className="text-emerald-400 cursor-pointer"
        >
          Shaik Sazid
        </a>
      </p>
      <div className="flex items-center justify-center gap-2 mt-2 pb-4">
        <a
          onMouseEnter={() => instaRef.current?.startLoop()}
          onMouseLeave={() => instaRef.current?.stopAndReset()}
          href="https://www.instagram.com/sazid._.shaik/"
        >
          <InstagramIcon ref={instaRef} />
        </a>
        <a
          href="https://github.com/ShaikSazid?tab=repositories"
          className="flex items-center text-white/70 hover:text-white transition"
          onMouseEnter={() => githubRef.current?.startLoop()}
          onMouseLeave={() => githubRef.current?.stopAndReset()}
        >
          <GithubIcon ref={githubRef} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;