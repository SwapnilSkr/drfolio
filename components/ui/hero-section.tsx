import { HoverBorderGradient } from "./hover-border-gradient";
import { TextGenerateEffect } from "./text-generate-effect";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="py-28">
      <div className="max-w-screen-xl mx-auto text-gray-600 md:gap-x-0 xl:gap-x-12 items-center sm:justify-center md:justify-between overflow-hidden md:flex md:px-8">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            ease: "easeOut",
            duration: 1.5,
          }}
          className="flex-none space-y-5 px-4 sm:max-w-lg md:max-w-sm md:px-0 lg:max-w-xl"
        >
          <h1 className="text-sm text-emerald-500 font-medium">
            Over 1000 satisfied patients
          </h1>
          <TextGenerateEffect
            words="I am a well known Pulmonologist from West Bengal."
            className="text-4xl text-gray-800 font-extrabold lg:text-5xl"
          />
          <p>
            I am known for my vast experience and work in the medical field.
          </p>
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
              ease: "easeOut",
              duration: 1.5,
            }}
            className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0"
          >
            <a
              href="javascript:void(0)"
              className="block rounded-full py-2 px-4 text-center text-white font-medium bg-emerald-500 duration-150 hover:bg-emerald-700 active:bg-emerald-900 shadow-lg hover:shadow-none"
            >
              Read My Blogs
            </a>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              Chat with Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </HoverBorderGradient>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex-none mt-14 md:mt-0 md:max-w-sm"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
        >
          <img
            src="https://media.licdn.com/dms/image/D5603AQHCVmDjiyNMkQ/profile-displayphoto-shrink_800_800/0/1714851176769?e=1721260800&v=beta&t=nbO401syi6jQ980neEx9PECY-b2X2vEFF8LrVbGZ31k"
            className=" md:rounded-full lg:w-96 lg:h-96 w-72 h-72 rounded-full object-cover shadow-lg"
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
