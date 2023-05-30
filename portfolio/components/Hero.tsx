import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const HERO_IMG = "/hero/me.jpg";

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hi my name is Charles", "A FULL STACK software engineer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      
      <Image
        priority = {true}
        src={HERO_IMG}
        alt="self"
        className="relative rounded-full h-40 w-40 mx-auto object-cover"
        width={200}
        height={200}
      />

      <div className="z-10">
        <h2 className="text-sm uppercase text-secondary-200 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-primary text-3xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#6b81a3" />
        </h1>

        <div className="pt-5">
          <Link href='/#about'>
            <button className="heroButton">About</button>
          </Link>

          <Link href='/#experiences'>
            <button className="heroButton">Experiences</button>
          </Link>

          <Link href='/#projects'>
            <button className="heroButton">Projects</button>
          </Link>

          <Link href='/#skills'>
            <button className="heroButton">Skills</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
