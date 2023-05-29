import Image from "next/image";
import React, { Fragment, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ResumeLogo from "@/assets/ResumeLogo";

type Props = {};

const WECHAT_IMG_URL = '/wechat.jpg'

function Header({}: Props) {
  const router = useRouter()
  const [isWechatOpen, setIsWechatOpen] = useState(false)

  return (
    <>
      <Transition
        show={isWechatOpen}
        enter="ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        as={Fragment}
      >
        <Dialog
          as="div"
          className="fixed z-50 inset-0 overflow-y-auto"
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
                <Image src={WECHAT_IMG_URL} alt="wechat" className="w-full" width={500} height={500}/>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-secondary-200 bg-primary border border-transparent rounded-md hover:bg-primary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                  onClick={() => setIsWechatOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>

      <header className="sticky top-0 w-full mx-auto z-20 md:p-5">
        <div className="flex items-center justify-between max-w-6xl mx-auto p-5">
          <motion.div 
            className="flex flex-row items-center justify-center"
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
            }}
          >
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

          <div className="w-10 h-10">
            <a href="https://docs.google.com/document/d/1TLjbq6Ykvp2CBdFxgIUitk3q8bOuaSOB/edit?usp=sharing&ouid=110553617090949454042&rtpof=true&sd=true"> 
              <ResumeLogo /> 
            </a>
          </div>

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
        </div>
      </header>
    </>
  );
}

export default Header;
