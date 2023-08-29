import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/Contact";
import Experience from "../components/Experience";
import { Main } from "../components/Main";
import { Project } from "../components/Project";
import { Skill } from "../components/Skill";

type Props = {};

export default function Home({}: Props) {
  return (
    <section>
      <Main />
      <AboutMe />
      <Skill />
      <Experience/>
      <Project/>
      <Contact />
    </section>
  );
}
