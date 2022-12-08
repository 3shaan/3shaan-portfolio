import Head from "next/head";
import Image from "next/image";
import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/Contact";
import { Main } from "../components/Main";
import Navbar from "../components/Navbar";
import { Project } from "../components/Project";
import { Skill } from "../components/Skill";
import Aos from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { ScrollContainer, ScrollPage } from "react-scroll-motion";
// ..

// if (typeof window !== "undefined") {
//   Aos.init();
//   console.log("You are on the browser");
// } else {
//   console.log("You are on the server");
// }

export default function Home({ data , front_end, back_end, tools}) {
  // console.log(data);
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  // react scroll motion

  const Animator = dynamic(
    import("react-scroll-motion").then((it) => it.Animator),
    { ssr: false }
  );

  return (
    <div>
      <Head>
        <title>Eshan | Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div>
          <ScrollContainer>
            <ScrollPage>
              <Main></Main>
            </ScrollPage>
            <ScrollPage>
              <AboutMe></AboutMe>
            </ScrollPage>

            <Skill front_end={front_end} back_end={back_end} tools={tools}></Skill>

            <Project projects={data}></Project>

            <Contact></Contact>
          </ScrollContainer>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://portfolio-server-tau.vercel.app/project");
  const res2 = await fetch(
    "https://portfolio-server-3shaan.vercel.app/skills?skill=front-end"
  );
  const res3 = await fetch(
    "https://portfolio-server-3shaan.vercel.app/skills?skill=Back-end"
  );
    const res4 = await fetch(
      "https://portfolio-server-3shaan.vercel.app/skills?skill=tools"
    );
  const data = await res.json();

  const front_end = await res2.json();
 
  const back_end = await res3.json();

  const tools = await res4.json();

  return {
    props: {
      data,
      front_end,
      back_end,
      tools
    },
    revalidate: 60,
  };
};

