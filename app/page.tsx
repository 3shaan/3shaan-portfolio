import React from "react";
import { Main } from "../components/Main";
import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/Contact";
import { Skill } from "../components/Skill";

type Props = {};

export default function ({}: Props) {
  return (
    <section>
      <Main />
      <AboutMe />
      <Skill />
      <Contact />
    </section>
  );
}
