import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/Contact";
import { Main } from "../components/Main";
import { Skill } from "../components/Skill";

type Props = {};

export default function Home({}: Props) {
  return (
    <section>
      <Main />
      <AboutMe />
      <Skill />
      <Contact />
    </section>
  );
}
