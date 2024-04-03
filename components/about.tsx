"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("ABOUT");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[60rem] mt-[10rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>ABOUT</SectionHeading>
      <p className="text-3xl text-center leading-[3rem] tracking-wider">
        Hi! I'm currently a final-year computer science student at the{" "}
        <a
          className=" hover:bg-blue-700 text-white 
          justify-center items-center rounded duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          href="https://www.uow.edu.au/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold", textDecoration: "underline" }}
        >
          University of Wollongong (SIM Campus)
        </a>{" "}
        , focusing on big data and cybersecurity. <br />
        <br />
        I'm passionate about building and designing software that is both
        functional and user-friendly. <br /> <br />
        I'm also interested in data science and UI/UX, and I'm always looking
        for opportunities to grow my skill set. <br />
      </p>

      <br />
    </motion.section>
  );
}
