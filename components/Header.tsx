import Image from "next/image";
import React, { Fragment, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import useMediaQuery from "@/hooks/useMediaQuery";
import resumelogo from "@/assets/resume.svg"

type Props = {};

const WECHAT_IMG_URL = "/wechat.jpg";

function Header({}: Props) {
  const router = useRouter();
  const [isWechatOpen, setIsWechatOpen] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const MOBILE_MENU_ICON_CLASS = "w-full h-10 m-3 flex items-center";

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
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                WeChat ID
              </Dialog.Title>
              <div className="mt-2">
                <Image
                  src={WECHAT_IMG_URL}
                  alt="wechat"
                  className="w-full"
                  width={500}
                  height={500}
                  priority={true}
                />
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
        {isAboveMediumScreens ? (
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <motion.div
              className="flex flex-row items-center justify-center"
              initial={{
                x: -500,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
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

            <div className="w-12 h-12">
              <a href="https://docs.google.com/document/d/1TLjbq6Ykvp2CBdFxgIUitk3q8bOuaSOB/edit?usp=sharing&ouid=110553617090949454042&rtpof=true&sd=true">
                <Image 
                  className="ml-1 w-10"
                  src={resumelogo}
                  width={200} 
                  height={200}
                  alt="resume"
                />
              </a>
            </div>

            <motion.div
              className="flex flex-row items-center text-gray-300 cursor-pointer"
              initial={{
                x: 500,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              <button onClick={() => router.push("/#contact")}>
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
        ) : (
          <div>
            {isMenuOpen ? (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="absolute h-screen w-screen bg-background flex flex-col items-start justify-start"
              >
                <div className={MOBILE_MENU_ICON_CLASS}>
                  <SocialIcon
                    url="https://www.linkedin.com/in/youlin-qu-2517a6131/"
                    fgColor="gray"
                    bgColor="transparent"
                  />
                </div>

                <div className={MOBILE_MENU_ICON_CLASS}>
                  <SocialIcon
                    url="https://github.com/Charlesq666"
                    fgColor="gray"
                    bgColor="transparent"
                  />
                </div>

                <div className={MOBILE_MENU_ICON_CLASS}>
                  <button onClick={() => setIsWechatOpen(true)}>
                    <SocialIcon
                      network="wechat"
                      fgColor="gray"
                      bgColor="transparent"
                    />
                  </button>
                </div>

                <div className={MOBILE_MENU_ICON_CLASS}>
                  <a href="https://docs.google.com/document/d/1TLjbq6Ykvp2CBdFxgIUitk3q8bOuaSOB/edit?usp=sharing&ouid=110553617090949454042&rtpof=true&sd=true">
                    <Image 
                      className="ml-1 w-10"
                      src={resumelogo}
                      width={200} 
                      height={200}
                      alt="resume"
                    />
                  </a>
                </div>
                {/* CLOSE MARK */}
                <button
                  className="flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="m-5 w-8 h-8 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </motion.div>
            ) : (
              <button
                className="flex items-center"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="m-5 w-8 h-8 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            )}
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
