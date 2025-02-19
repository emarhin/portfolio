/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { Metadata } from "next";

import Link from "@/components/ui/Link";
import Section from "@/components/Section";
import ConnectLinks from "../../components/ConnectLinks";
import Workplaces from "./components/Workplaces";
import Gallery from "./components/Gallery";

import hinesLogo from "public/work/hines-logo.jpeg";
import perishipLogo from "public/work/periship-logo.jpeg";
import camsLogo from "public/work/cams-logo.png";
import uhdLogo from "public/work/uhd.png";

import meLily from "public/gallery/me-lily.jpg";
import colorado from "public/gallery/colorado.jpg";

export const metadata: Metadata = {
  title: "About | Emmanuel Arhin",
  description:
    "I am a full-stack software engineer who basically just enjoys creating things.",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight">
          About Me
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Just a quick glimpse.
        </p>
      </div>
      <div className="mb-8 lg:hidden">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          {/* <Image
            src={meLily}
            alt={"me and lily"}
            width={324}
            height={139}
            className="relative h-60 inset-0 object-cover bg-gray-400 shadow-md pointer-events-none rounded-2xl -rotate-6"
            priority
          /> */}
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          {/* <Image
            src={colorado}
            alt={"me and lily"}
            width={220}
            height={260}
            className="absolute w-48 inset-0 object-cover bg-gray-400 shadow-md pointer-events-none rounded-2xl rotate-6 left-[45%] md:left-[60%] md:w-56 -top-48"
            priority
          /> */}
        </div>
      </div>
      <div className="hidden lg:block">{/* <Gallery /> */}</div>
      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>Hello world, I am Emmanuel Arhin!</p>

            <p>
              Hi, I am Arhin Emmanuel, a software engineer who loves building
              cool things with code. In addition to coding, n my free time, I
              enjoy teaching coding to non-programmers,alongside where I focus
              on tech, creative vlogs, and personal development.
            </p>

            <p>
              When I am not at my desk I am probably lifting weights, playing
              soccer, or at a coffee shop
            </p>
          </div>
        </Section>

        <Section heading="Connect" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              Have a question or just want to chat? Feel free to{" "}
              <Link href="mailto:emma1arhin@gmail.com">email me</Link>
            </p>
            <ul className="animated-list grid flex-grow grid-cols-1 gap-2 md:grid-cols-2">
              {ConnectLinks.map((link) => (
                <li className="col-span-1 transition-opacity" key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-grid w-full rounded-lg border border-primary p-4 no-underline transition-opacity"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{link.icon}</span>
                      {link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="ml-auto h-5 w-5 text-secondary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section heading="Work" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              {new Date().getFullYear() - 2017}+ years of professional
              development experience.
            </p>
            <p>
              I started my career teaching others how to code, which I will
              always be appreciative of. Then I worked at a few small local
              companies. Now I am a full stack engineer currently working at{" "}
              <Link
                className="underline"
                href="https://slove-ticket.vercel.app/"
              >
                Slove Ticket
              </Link>
              , one of the largest private real estate investors in the world.
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "Software Engineer",
    company: "COZY TECH SOLUTION",
    time: "May 2019 - April 2023",
    imageSrc: hinesLogo, // Replace with the relevant image if necessary
    link: "https://www.cozytechsolution.com", // Adjust the link as needed
  },
  {
    title: "Software Engineer",
    company: "EZA4SON GROUP",
    time: "April 2018 - April 2019",
    imageSrc: perishipLogo, // Replace with the relevant image if necessary
    link: "https://www.eza4son.com", // Adjust the link as needed
  },
  {
    title: "Software Engineer",
    company: "XACENT GLOBAL TECH",
    time: "Dec 2017 - Mar 2018",
    imageSrc: camsLogo, // Replace with the relevant image if necessary
    link: "https://www.xacentglobaltech.com", // Adjust the link as needed
  },
  {
    title: "B.S. Computer Software Engineering",
    company: "Ghana Community Technology",
    time: "2022",
    imageSrc: "", // Add relevant image if available
    link: "", // Link for educational institution (optional)
  },
];
