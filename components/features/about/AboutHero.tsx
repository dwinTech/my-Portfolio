"use client";

import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { skills } from "@/constants/skills";
import { experiences } from "@/constants/experiences";
import { Download, ChevronDown, ChevronUp } from "lucide-react";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";






// ── Component ────────────────────────────────────────────────────────────────

export function AboutHero() {
  const fullName = "Edwin G. Angoring Jr.";
  const [displayed, setDisplayed] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false); // ← fix

  useEffect(() => {
    if (charIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + fullName[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(timeout);
    } else {
      setDone(true);
    }
  }, [charIndex]);

  return (
    <Section className="relative min-h-screen flex items-center justify-center mt-10">



      {/* ── Two-column wrapper ── */}
      <div className="flex flex-col lg:flex-row items-start gap-12 w-full max-w-6xl px-6">

        {/* ── LEFT COLUMN ── */}
        <div className="flex flex-col items-center gap-6 w-full lg:w-72 shrink-0">

          {/* Profile Image */}
          <Image
            src="/Edwin.jpg"
            alt="Profile"
            width={220}
            height={220}
            className="rounded-full border-4 border-white shadow-xl
                       hover:scale-105 transition-transform duration-500 object-cover"
          />

          {/* Social Links */}
          <div className="flex flex-col items-center gap-3 w-full">
            <h3 className="font-semibold text-sm uppercase tracking-widest text-muted-foreground">
              Social Links
            </h3>
            <div className="flex gap-6">
              <Link href="https://linkedin.com" target="_blank"
                className="flex flex-col items-center hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5 mb-1" />
                <span className="text-xs">LinkedIn</span>
              </Link>
              <Link href="https://github.com" target="_blank"
                className="flex flex-col items-center hover:text-gray-400 transition-colors">
                <Github className="h-5 w-5 mb-1" />
                <span className="text-xs">GitHub</span>
              </Link>
              <Link href="https://instagram.com" target="_blank"
                className="flex flex-col items-center hover:text-pink-400 transition-colors">
                <Instagram className="h-5 w-5 mb-1" />
                <span className="text-xs">Instagram</span>
              </Link>
              <Link href="https://facebook.com" target="_blank"
                className="flex flex-col items-center hover:text-blue-600 transition-colors">
                <Facebook className="h-5 w-5 mb-1" />
                <span className="text-xs">Facebook</span>
              </Link>
            </div>
          </div>

          {/* ── Skills ── */}
          <div className="w-full">

            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-sm uppercase tracking-widest text-muted-foreground">
                Tech Stack
              </h3>

              {skills.length > 4 && (
                <button
                  onClick={() => setShowAllSkills((prev) => !prev)}
                  className="flex items-center gap-1 text-xs font-medium border border-gray-300
      dark:border-gray-600 rounded-sm px-3 py-1 hover:border-blue-500
      hover:text-blue-500 transition-colors duration-200"
                >
                  {showAllSkills ? (
                    <>
                      <ChevronUp className="h-3 w-3" /> Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-3 w-3" /> Show More
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Frontend */}
            <h2 className="font-medium mt-2">Frontend</h2>
            <div className="flex flex-wrap gap-2 justify-center mb-3">
              {(showAllSkills ? skills.filter(s => s.type === "Frontend") : skills.filter(s => s.type === "Frontend").slice(0, 4)).map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1 text-xs font-medium border  border-green-600 dark:border-gray-600
                             rounded-sm bg-transparent hover:border-blue-500 hover:text-blue-500
                             transition-colors duration-200 cursor-default"
                >
                  {skill.name}
                </span>
              ))}
            </div>

            {/* Backend + Database (show on expand) */}
            {showAllSkills && (
              <>
                <h2 className="font-medium mt-2">Backend</h2>
                <div className="flex flex-wrap gap-2 justify-center mb-3">
                  {skills.filter(s => s.type === "Backend").map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 text-xs font-medium border border-blue-600 dark:border-gray-600
                                 rounded-sm bg-transparent hover:border-blue-500 hover:text-blue-500
                                 transition-colors duration-200 cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>

                <h2 className="font-medium mt-2">Database</h2>
                <div className="flex flex-wrap gap-2 justify-center mb-3">
                  {skills.filter(s => s.type === "Database").map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 text-xs font-medium border border-pink-600 dark:border-gray-600
                                 rounded-sm bg-transparent hover:border-blue-500 hover:text-blue-500
                                 transition-colors duration-200 cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </>
            )}

            {/* Show More / Less Button */}
            {skills.length > 4 && (
              <div className="flex justify-center mt-3">
                <button
                  onClick={() => setShowAllSkills((prev) => !prev)}
                  className="flex items-center gap-1 text-xs font-medium border border-gray-300
                             dark:border-gray-600 rounded-sm px-3 py-1 hover:border-blue-500
                             hover:text-blue-500 transition-colors duration-200"
                >
                  {showAllSkills ? (
                    <><ChevronUp className="h-3 w-3" /> Show Less</>
                  ) : (
                    <><ChevronDown className="h-3 w-3" /> Show More</>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
        {/* END LEFT COLUMN */}

        {/* ── RIGHT COLUMN ── */}
        <div className="flex flex-col gap-6 flex-1">

          {/* Name */}
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl min-h-[1.2em]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              {displayed}
            </span>
            {!done && (
              <span className="inline-block w-[3px] h-[0.85em] ml-1 bg-foreground align-middle animate-pulse" />
            )}
          </h1>

          {/* Location + bio */}
          <div className={`space-y-2 transition-all duration-700 ${done ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}>
            <h2 className="text-lg text-muted-foreground font-medium">
              Cordova Cebu, Philippines
            </h2>
            <p className="text-muted-foreground max-w-md text-sm">
              I'm Edwin I passionate about Information Technology, especially in fields like technical support, hardware/software troubleshooting, and web development. I enjoy learning how systems work and solving technical problems. I’ve practiced setting up basic websites using HTML, CSS, and JavaScript, and I’m actively improving my skills through self-learning and small personal projects.
            </p>
          </div>

          {/* Resume Button */}
          <div>
            <Button size="lg" asChild>
              <Link href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                View My Resume
              </Link>
            </Button>
          </div>

          {/* ── Work Experience ── */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Work Experience
            </h3>
            <div className="flex flex-col gap-6">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-4 border-l-2 border-blue-500">
                  <p className="text-xs text-muted-foreground mb-1">{exp.period}</p>
                  <h4 className="font-semibold text-sm sm:text-base">{exp.role}</h4>
                  <p className="text-blue-500 text-xs mb-1">{exp.company}</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
        {/* END RIGHT COLUMN */}

      </div>
    </Section>
  );
}