"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("EXPERIENCE");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>EXPERIENCE</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "#ddd" : "#333"}>
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              boxShadow: "none",
              border: "1px solid white",
              textAlign: "left",
              padding: "25px",
              borderRadius: "10px",
              width: "20%",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light" ? "0.5rem solid white" : "0.5rem solid white",
            }}
            date={item.date}
            icon={<item.icon />}
            iconStyle={{
              background:
                theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
              fontSize: "1rem",
            }}
          >
            <h3 className="font-bold text-lg capitalize">{item.company}</h3>
            <h4 className="font-semibold text-md capitalize">{item.title}</h4>
            <ul
              className="list-disc pl-4 mt-2 space-y-2"
              style={{
                color: theme === "light" ? "#374151" : "#e5e7eb",
                textAlign: "left",
              }}
            >
              {item.description.map((point, idx) => (
                <li key={idx} className="text-base leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
