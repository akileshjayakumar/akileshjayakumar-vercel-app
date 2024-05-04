"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useSectionInView } from "@/lib/hooks";
import { useState, useEffect, useRef } from "react";

const fullText = [
  "welcome to my portfolio website!",
  "i love learning new technologies.",
  "i am currently learning aws.",
  "i love building and designing software.",
  "i love solving puzzles and the rubik's cube.",
  "i like to play badminton.",
  "cardistry and magic tricks are my hobbies.",
  "sci-fi and comic book movies are my favourites.",
  "let's connect!",
];

export default function Intro() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [hasVisited, setHasVisited] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (hasVisited) {
      const currentText = fullText[loopNum % fullText.length];
      let timer: NodeJS.Timeout;

      const handleTyping = () => {
        setText(currentText.substring(0, text.length + 1));
        setTypingSpeed(40);
      };

      const handleDeleting = () => {
        setText(currentText.substring(0, text.length - 1));
        setTypingSpeed(20);
      };

      if (!isDeleting && text === currentText) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(1);
      } else if (!isDeleting) {
        timer = setTimeout(handleTyping, typingSpeed);
      } else {
        timer = setTimeout(handleDeleting, typingSpeed);
      }

      return () => clearTimeout(timer);
    }
  }, [text, isDeleting, loopNum, typingSpeed, hasVisited]);

  useEffect(() => {
    setHasVisited(true);
  }, []);

  const { ref } = useSectionInView("HOME", 0.5);
  const iconStyle = isMobile ? "text-5xl" : "text-5xl";

  return (
    <section
      ref={ref}
      id="home"
      className="max-w-[50rem] text-center text-white scroll-mt-[100rem]"
    >
      <div className="flex flex-col sm:m-1 items-center justify-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }}
        >
          <Image
            src="/profile-photo.jpg"
            alt="profile-photo"
            width={350}
            height={350}
            quality={100}
            priority={true}
            className="rounded-full mb-[1rem] sm:mb-[3rem] bject-cover border-[0.2rem] border-[cyan] no-shadow"
          />
        </motion.div>

        <motion.h1
          className="font-bold tracking-wider sm:m-2 mt-[1rem] sm:text-5xl text-5xl text-white"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          hi, i'm akilesh
        </motion.h1>

        <motion.h1 className="tracking-wider font-medium sm:m-4 mt-[2rem] sm:text-2xl text-2xl text-white">
          <span
            ref={textRef}
            style={{ whiteSpace: isMobile ? "normal" : "nowrap" }}
          >
            {text}
          </span>
          <span className="typing-cursor">_</span>
        </motion.h1>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center m-9 sm:m-8 mb-[15rem] mt-[2rem] text-2xl font-bold text-white"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex sm:gap-[3rem] gap-5">
          <a
            href="https://twitter.com/StrangeDoctorGo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterXLine
              className={
                iconStyle + " hover:scale-110 transition-transform text-white"
              }
            />
          </a>

          <a
            href="https://www.linkedin.com/in/akileshjayakumar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className={
                iconStyle + " hover:scale-110 transition-transform text-white"
              }
            />
          </a>

          <a
            href="https://g.dev/akileshjayakumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGoogle
              className={
                iconStyle + " hover:scale-110 transition-transform text-white"
              }
            />
          </a>

          <a
            href="https://github.com/akileshjayakumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className={
                iconStyle + " hover:scale-110 transition-transform text-white"
              }
            />
          </a>

          <a
            href="https://docs.google.com/document/d/1xSzu8tr0wTPws4p6kmbIIkKWmiE546apEEU3n6l27Ms/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoDocumentTextOutline
              className={
                iconStyle + " hover:scale-110 transition-transform text-white"
              }
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
