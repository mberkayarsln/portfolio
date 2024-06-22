"use client";
import React from "react";
import Image from "next/image";
import Typed from "typed.js";

const HeroSection = () => {
  const el = React.useRef();

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Berkay", "Frontend Developer", "Backend Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077b6] to-[#90e0ef]">
              Hello, I'm
            </span>
            <br></br>
            <span ref={el}></span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            natus ut. Dolores recusandae reiciendis a.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#0077b6] via-[#00b4d8] to-[#90e0ef] hover:from-[#90e0ef] hover:via-[#00b4d8] hover:to-[#0077b6]">
              Hire Me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border-2 border-[#90e0ef] mt-3">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[360px] lg:h-[360px] relative overflow-hidden">
            <Image
              src="/images/avatar.svg"
              alt="avatar"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
