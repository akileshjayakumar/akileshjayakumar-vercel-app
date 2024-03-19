"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Education() {
  const { ref } = useSectionInView("EDUCATION");
  const { theme } = useTheme();

  const handleCertificateClick = (url: string | undefined) => {
    if (typeof url === "string") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>EDUCATION</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "#ddd" : "#333"}>
        {educationData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: theme === "light" ? "#ffffff" : "#1f2937",
              boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.1)",
              border:
                theme === "light" ? "2px solid #e5e7eb" : "2px solid #374151",
              color: theme === "light" ? "#1f2937" : "#f3f4f6",
              textAlign: "left",
              padding: "3rem",
            }}
            contentArrowStyle={{
              borderRight: "8px solid #fff",
            }}
            date={item.date}
            dateClassName="text-lg font-semibold"
            icon={<item.icon />}
            iconStyle={{
              background: theme === "light" ? "#60a5fa" : "#312e81",
              color: "#fff",
              boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            <h3 className="font-bold text-lg capitalize mb-2">
              {item.institution}
            </h3>
            <h4 className="font-semibold text-md capitalize mb-1">
              {item.degree}
            </h4>
            {item.modules && (
              <ul className="list-disc pl-5 mt-2 mb-2">
                {item.modules.map((module, idx) => (
                  <li key={idx} className="mb-1">
                    {module}
                  </li>
                ))}
              </ul>
            )}
            {item.certificateUrl && (
              <button
                className="mt-4 inline-flex items-center justify-center bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
                onClick={() => handleCertificateClick(item.certificateUrl)}
              >
                View Certificate | Transcript
              </button>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
