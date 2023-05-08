import React, { useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

type Props = {};

const WECHAT_IMG_URL = 'https://charlesqimg.s3.us-east-2.amazonaws.com/wechat.jpg'

function Header({}: Props) {
  const router = useRouter()
  const [isWechatOpen, setIsWechatOpen] = useState(false)

  return (
    <>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-y-auto"
        open={isWechatOpen}
        onClose={() => setIsWechatOpen(false)}
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Dialog.Overlay className="fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity" />
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
              WeChat ID
            </Dialog.Title>
            <div className="mt-2">
              <img src={WECHAT_IMG_URL} alt="wechat" className="w-full" />
            </div>
            <div className="mt-4">
              <button
                type="button"
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-secondary bg-primary border border-transparent rounded-md hover:bg-primary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                onClick={() => setIsWechatOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Dialog>
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

          <button onClick={() => setIsWechatOpen(true)}>
            <SocialIcon
              network="wechat"
              fgColor="gray"
              bgColor="transparent"
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
          
          <button onClick={() => router.push('/#contact')}>
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="gray"
              bgColor="transparent"
            />
            <p className="uppercase text-center hidden md:inline-flex text-sm text-gray-400">
              Get in Touch
            </p>
          </button>
        </motion.div>
      </header>
    </>
  );
}

export default Header;
