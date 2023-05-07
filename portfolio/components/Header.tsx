import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

type Props = {};

function Header({}: Props) {
  const router = useRouter()
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-6xl mx-auto z-20 p-5">
      <motion.div 
        className="flex flex-row items-center"
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
          }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
        transition={{
          duration: .7,
        }}>
        {/* Social Icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/youlin-qu-2517a6131/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/Charlesq666"
          fgColor="gray"
          bgColor="transparent"
        />

        <button onClick={() => {router.push('/')}} className="z-1">
          <SocialIcon
            url="https://wechat.com"
            fgColor="gray"
            bgColor="transparent"
            className="z-0"
          />
        </button>
        
      </motion.div>

      <motion.div 
        className="flex flex-row items-center text-gray-300 cursor-pointer"
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
          duration: .7,
        }}>
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase text-center hidden md:inline-flex text-sm text-gray-400">
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
